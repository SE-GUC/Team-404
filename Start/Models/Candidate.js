const mongoose=require('mongoose');
const schema=mongoose.Schema;

const CandidateSchema = new schema({
    skills: {type:String,required:true,unique:false},
    interests: {type:String,required:true,unique:false},
    pastEvents: [{
type:String
    }],
    pastTasks: {type: Array , required:true,unique:false},
    reviewsreceived: {type:String,required:true,unique:false},
    certificatesAndMasterclass: {type:String,required:true,unique:false}
});

const Candidate = mongoose.model('Candidate', CandidateSchema);

module.exports = Candidate;