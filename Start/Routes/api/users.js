const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const tokenKey = require("../../config/keys").secretOrKey;
const User = require("../../Models/User");
const validator = require("../../Validation/userValid");
const sendNotif = require("../../utils/mailer");
const joi = require("joi");
const authenticateUser = require("../../middleware/authenticate");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json({ data: users });
});

router.get("/consultants", authenticateUser, async (req, res) => {
  const users = await User.find({ userType: "Consultant" });
  res.json({ data: users });
});

router.get("/partners", authenticateUser, async (req, res) => {
  const users = await User.find({ userType: "partner" });
  res.json({ data: users });
});

router.get("/candidates", authenticateUser, async (req, res) => {
  const users = await User.find({ userType: "Candidate" });
  res.json({ data: users });
});

router.get("/:id", authenticateUser, async (req, res) => {
  try {
    const id = req.params.id;
    const requestedUser = await User.findById(id);
    res.json({ data: requestedUser });
  } catch (error) {
    console.log(error);
  }
});
//login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ email: "Email does not exist" });
    const match = bcrypt.compareSync(password, user.password);
    if (match) {
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email
      };
      const token = jwt.sign(payload, tokenKey, { expiresIn: "1h" });

      return res.json({ token });
    } else return res.status(400).send({ password: "Wrong password" });
  } catch (e) {}
});

// register user
router.post("/register", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const {
      email,
      age,
      name,
      password,
      username,
      phoneNumber,
      userType,
      location
    } = req.body;
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: "Email already exists" });
    const user1 = await User.findOne({ username });
    if (user1)
      return res.status(400).json({ error: "username already exists" });

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = await new User({
      name: req.body.name,
      password: hashedPassword, // hashedPassword ,
      email: req.body.email,
      age: req.body.age,
      username: req.body.username,
      phoneNumber: req.body.phoneNumber,
      userType: req.body.userType,
      location: req.body.location,

      //candidate
      skills: req.body.skills,
      interests: req.body.interests,
      pastEventsAndTasks: req.body.pastEventsAndTasks,
      reviewsRecieved: req.body.reviewsRecieved,

      //Partner
      board: req.body.board,
      pastEvents: req.body.pastEvents,
      reports: req.body.reports,
      organisationName: req.body.organisationName,
      businessPartners: req.body.businessPartners,
      eventsOrganized: req.body.eventsOrganized,
      fieldOfWork: req.body.fieldOfWork,
      projectHistory: req.body.projectHistory
    }).save();
    sendNotif(req.body.email, "Welcome to lirten hub", "Registration");
    return res.json({ data: newUser });
  } catch (error) {
    console.log(error);
  }
});
// Not working yet.
router.route("/:id").all(async (request, response, next) => {
  const status = joi.validate(request.params, {
    id: joi
      .string()
      .length(24)
      .required()
  });
  if (status.error) {
    return response.json({ error: status.error.details[0].message });
  }
  next();
});

router.put("/:id", async (request, response) => {
  User.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true },
    (err, model) => {
      if (!err) {
        return response.json({ data: model });
      } else {
        return response.json({ error: `Error, couldn't update user` });
      }
    }
  );
});

// Done with delete.
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deletedUser = await User.findByIdAndRemove(id);
  const x = "User was deleted successfully";
  //res.json({msg:'User was deleted successfully', data: deletedUser})
  // return res.json(x)
  return res.json(x);
});

module.exports = router;
