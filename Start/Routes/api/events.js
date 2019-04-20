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

// //Get all events
// router.get("/", async (req, res) => {
//   const events = await Event.find();
//   res.json({ data: events });
// });

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
      approvalStatus: "pending",
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
router.put("/:id", async (request, response) => {
  const status = joi.validate(request.params, {
    id: joi
      .string()
      .length(24)
      .required()
  });
  if (status.error) {
    return response.json({ error: status.error.details[0].message });
  }
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

//View approved events
viewApprovedEvents = async (req, res) => {
  try {
    var view = await Event.find({ approvalStatus: "approved" });
    console.log(view);
    res.json({ data: view });
  } catch (err) {
    console.log(err);
  }
};

//View pending events
viewPendingEvents = async (req, res) => {
  try {
    var view = await Event.find({ approvalStatus: "pending" });
    console.log(view);
    res.json({ data: view });
  } catch (err) {
    console.log(view);
    console.log(err);
  }
};

//get a specific event by ID
router.get("/getE/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const requestedEvent = await Event.findById(id);
    res.json({ msg: "Event you asked for", data: requestedEvent });
  } catch (error) {
    console.log(error);
  }
});


//Admin confirm requested event 
confirmRequest = async (req, res) => {
    try {
      var eid = req.params.eid;
      var event = await Event.findById(eid).exec();
      Event.findByIdAndUpdate(
        eid,
        { $set : { approvalStatus: "approved" } },
        (err, model) => {
          if (!err) {
            console.log({ data: model });
          } else {
            console.log({ error: `Error, couldn't confirm event ` });
          }
        }
      );
  
      const message = "Event request has been approved!";
      return res.json(message);
    }
     catch (err) {
      console.log("couldn't confirm the event");
    }
  };

  //Partner request event
requestEvent = async (req, res) => {
  try {
    var pid = req.params.pid;
    var partner = await User.findById(pid).exec();
    console.log("entry success ya partner");

    const newEvent = await new Event({
      eventName: req.body.eventName,
      description: req.body.description,
      organizer: partner.name,
      location: req.body.location,
      remainingPlaces: req.body.remainingPlaces,
      speakers: req.body.speakers,
      maximumPlaces: req.body.maximumPlaces,
      topicsCovered: req.body.topicsCovered,
      field: req.body.field,
      registrationPrice: req.body.registrationPrice,
      approvalStatus: "pending",
      applicants: req.body.applicants,
      feedback: req.body.feedback
    }).save();
    console.log(newEvent);
    return res.json("Event has been requested!");
  } catch (error) {
    console.log("Could not request event");
  }
};

//Admin create event
adminCreateEvent = async (req, res) => {
  try {
    var aid = req.params.aid;
    var admin = await User.findById(aid).exec();
    console.log("entry success ya admin");

    const newEvent = await new Event({
      eventName: req.body.eventName,
      description: req.body.description,
      organizer: admin.name,
      location: req.body.location,
      remainingPlaces: req.body.remainingPlaces,
      speakers: req.body.speakers,
      maximumPlaces: req.body.maximumPlaces,
      topicsCovered: req.body.topicsCovered,
      field: req.body.field,
      registrationPrice: req.body.registrationPrice,
      approvalStatus: "approved",
      applicants: req.body.applicants,
      feedback: req.body.feedback
    }).save();
    console.log(newEvent);
    return res.json("Event has been created!");
  } catch (error) {
    console.log("Could not create event");
  }
};
  
      

//calling of Clara's functions
router.get("/", viewApprovedEvents);
router.get("/pending", viewPendingEvents);
router.post("/:eid/users/:cid", bookEvent);
router.post("/:eid/events/:cid", cancelBooking);

//calling of Hagar's functions
router.post('/:pid/requestEvent', requestEvent);
router.post('/:aid/adminCreateEvent', adminCreateEvent);
router.put('/:eid/confirmRequest', confirmRequest);

module.exports = router;
