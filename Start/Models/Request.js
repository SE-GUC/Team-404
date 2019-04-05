const mongoose=require('mongoose');
const Schema=mongoose.Schema;



const RequestSchema = new Schema({
requestid:{type:String,required:true},
partnerid:{type:String,required:true},
eventname:{type:String,required:true},
organizer:{type:String,required:true},
location:{type:String,required:true},
description:{type:String,required:true},
remainingplaces:{type:Number,required:false},
speakers:{type:String,required:true},
maximumplaces:{type:Number,required:true},
topicscovered:{type:String,required:true},
field:{type:String,required:true},
registrationprice:{type:Number,required:true},
approvalstatus:{type:String,required:false},
});

module.exports = Request = mongoose.model('requests', RequestSchema);
