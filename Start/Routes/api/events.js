const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const app = express();
const sendNotif = require("../../utils/mailer");
const joi = require("joi");
const User = require("../../Models/User");

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

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const requestedEvent = await Event.findById(id);
    res.json({ msg: "Event you asked for", data: requestedEvent });
  } catch (error) {
    console.log(error);
  }
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
    try {
      sendNotif();
    } catch {
      console.log(err);
    }
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
    const x = "Event was deleted successfully";
    return res.json(x);
  } catch (error) {
    console.log(error);
  }
});

//Booking an Event
bookEvent = async (req, res) => {
  try {
    var cid = req.params.cid;
    var eid = req.params.eid;

    var candidate = await User.findById(cid).exec();

    var event = await Event.findById(eid).exec();

    Event.findByIdAndUpdate(
      eid,
      { $push: { applicants: cid } },
      (err, model) => {
        if (!err) {
          console.log({ data: model });
        } else {
          console.log({ error: `Error, couldn't update applicants array` });
        }
      }
    );

    User.findByIdAndUpdate(
      cid,
      { $push: { pastEvents: event.eventName } },
      (err, model) => {
        if (!err) {
          console.log({ data: model });
        } else {
          console.log({ error: `Error, couldn't update pastEvents array` });
        }
      }
    );

    Event.findByIdAndUpdate(
      eid,
      { $inc: { remainingPlaces: -1 } },
      (err, model) => {
        if (!err) {
          console.log({ data: model });
        } else {
          console.log({ error: `Error, couldn't update remainingPlaces ` });
        }
      }
    );

    const message = "Event has been booked!";
    return res.json(message);
  } catch (err) {
    console.log("couldn't book the event");
  }
};

//Canceling a Booking
cancelBooking = async (req, res) => {
  try {
    var cid = req.params.cid;
    var eid = req.params.eid;

    var candidate = await User.findById(cid).exec();

    var event = await Event.findById(eid).exec();

    Event.findByIdAndUpdate(
      eid,
      { $pull: { applicants: cid } },
      (err, model) => {
        if (!err) {
          console.log({ data: model });
        } else {
          console.log({ error: `Error, couldn't update applicants array` });
        }
      }
    );

    User.findByIdAndUpdate(
      cid,
      { $pull: { pastEvents: event.eventName } },
      (err, model) => {
        if (!err) {
          console.log({ data: model });
        } else {
          console.log({ error: `Error, couldn't update past events array` });
        }
      }
    );

    Event.findByIdAndUpdate(
      eid,
      { $inc: { remainingPlaces: 1 } },
      (err, model) => {
        if (!err) {
          console.log({ data: model });
        } else {
          console.log({ error: `Error, couldn't update Remaining Places ` });
        }
      }
    );

    const message = "Event booking has been canceled!";
    return res.json(message);
  } catch (err) {
    console.log("couldn't cancel the booking");
  }
};

viewEvents = async () => {
  try {
    var view = await Event.find({ approvalStatus: "confirmed" });
    return view;
  } catch (err) {
    console.log(err);
  }
};

router.get("/", viewEvents);

router.post("/:eid/users/:cid", bookEvent);
router.post("/:eid/events/:cid", cancelBooking);

module.exports = router;
