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


