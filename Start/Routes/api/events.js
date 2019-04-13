const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const app = express();
const joi = require('joi')

// We will be connecting using database
const Event = require("../../Models/Event");
const validator = require("../../Validation/eventValid");

// Default route (entry point)
app.get("/", (req, res) => {
  res.send(`<h1>Welcome</h1>`);
});

// Get all events
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json({ data: events });
});



// Create a new newEvent
router.post("/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const event = await new Event({
      eventname: req.body.eventname,
      organizer: req.body.organizer,
      location: req.body.location,
      description: req.body.description,
      remainingplaces: req.body.remainingplaces,
      speakers: req.body.speakers,
      maximumplaces: req.body.maximumplaces,
      topicscovered: req.body.topicscovered,
      field: req.body.field,
      registrationprice: req.body.registrationprice,
      approvalstatus: req.body.approvalstatus,
      applicants: req.body.applicants,
      feedback: req.body.feedback
    }).save();
    return res.json({ data: event });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

// Update event
router
  .route("/:id")
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

  .put(async (request, response) => {
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
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedEvent = await Event.findByIdAndRemove(id);
    res.json({ message: "Event was deleted successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
