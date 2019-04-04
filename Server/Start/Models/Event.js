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

