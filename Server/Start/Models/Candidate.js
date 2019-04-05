<<<<<<< HEAD:Start/Models/Candidate.js
=======

>>>>>>> cdc5ac7b5a5ba68c28d1188c880faf963cb6dd1c:Server/Start/Models/Candidate.js

const mongoose=require('mongoose');
const schema=mongoose.Schema;

const CandidateSchema = new schema({
    age:{type:Number,required:true,unique:false},
    skills:{type:String,required:true,unique:false},
    interests:{type:String,required:true,unique:false},
    pasteventsandtasks:{type:String,required:true,unique:false},
    reviewsrecieved:{type:String,required:true,unique:false},
});

const Candidate = mongoose.model('Candidate', CandidateSchema);

module.exports = Candidate;
<<<<<<< HEAD:Start/Models/Candidate.js
=======

>>>>>>> cdc5ac7b5a5ba68c28d1188c880faf963cb6dd1c:Server/Start/Models/Candidate.js
