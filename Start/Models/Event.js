<<<<<<< HEAD
const mongoose=require('mongoose');
const Schema=mongoose.Schema;



const EventSchema = new Schema({
name:{type:String,required:true},
organizer:{type:String,required:true},
location:{type:String,required:true},
description:{type:String,required:true},
remainingplaces:{type:Number,required:true},
speakers:{type:String,required:true},
maximumplaces:{type:Number,required:true},
topicscovered:{type:String,required:true},
feedbackid:{type:Number,required:false},
field:{type:String,required:true},
approvalstatus:{type:String,required:false}
});

module.exports = mongoose.model('events', EventSchema);

=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  eventname: { type: String, required: true },
  organizer: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  remainingPlaces: { type: Number, required: false },
  speakers: { type: String, required: true },
  maximumPlaces: { type: Number, required: true },
  topicsCovered: { type: String, required: true },
  field: { type: String, required: true },
  registrationPrice: { type: Number, required: true },
  approvalStatus: { type: String, required: false },
  applicants: { type: Array, required: false },
  feedback: { type: Array, required: false }
});

module.exports = Event = mongoose.model("events", EventSchema);
>>>>>>> react_dev
