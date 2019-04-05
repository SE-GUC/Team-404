
const mongoose=require('mongoose');
const Schema=mongoose.Schema;



const EventSchema = new Schema({
eventid:{type:String,required:true}, 
eventname:{type:String,required:true},
organizer:{type:String,required:true},
location:{type:String,required:true},
description:{type:String,required:true},
remainingplaces:{type:Number,required:false},
speakers:{type:String,required:true},
maximumplaces:{type:Number,required:true},
topicscovered:{type:String,required:true},
feedbackid:{type:Number,required:false}, //how to link it with feedback entity 
field:{type:String,required:true},
registrationprice:{type:Number,required:true},
approvalstaus:{type:String,required:false},
});

module.exports = Event = mongoose.model('events', EventSchema);


