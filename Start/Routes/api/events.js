const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const authenticateUser= require("../../middleware/authenticate");
const app = express();
const sendNotif = require('../../utils/mailer')


// We will be connecting using database
const Event = require("../../Models/Event");
const validator = require("../../Validation/eventValid");

// Default route (entry point)
app.get("/",authenticateUser, (req, res) => {
  res.send(`<h1>Welcome</h1>`);
});

// Get all events
router.get("/",authenticateUser, async (req, res) => {
  const events = await Event.find();
  res.json({ data: events });
});

router.get('/:id',authenticateUser,async (req,res)=>{
  try {
    const id = req.params.id
    const requestedEvent = await Event.findById(id)
    res.json({msg:'Event you asked for', data: requestedEvent})
   }catch(error){
    console.log(error)
   }
   })



// Create a new newEvent
router.post("/",authenticateUser, async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const event = await new Event({
      eventName: req.body.eventName,
      organizer: req.body.organizer,
      location: req.body.location,
      description: req.body.description,
      remainingPlaces: req.body.remainingPlaces,
      speakers: req.body.speakers,
      maximumPlaces: req.body.maximumPlaces,
      topicsCovered: req.body.topicsCovered,
      field: req.body.field,
      registrationPrice: req.body.registrationPrice,
      approvalStatus: req.body.approvalStatus,
      applicants: req.body.applicants,
      feedback: req.body.feedback
    }).save();
    fin
    sendNotif()
    return res.json({ data: event });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

// Update event
router
  .route("/:id",authenticateUser)
  .all(async (request, response, next) => {
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
  })

  .put(authenticateUser,async (request, response) => {
    Event.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true },
      (err, model) => {
        if (!err) {
          return response.json({ data: model });
        } else {
          return response.json({ error: `Error, couldn't update event` });
        }
      }
    );
  });

// Delete newEvent
router.delete("/:id" ,authenticateUser,async (req, res) => {
  try {
    const id = req.params.id;
    const deletedEvent = await Event.findByIdAndRemove(id);
    res.json({ message: "Event was deleted successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
