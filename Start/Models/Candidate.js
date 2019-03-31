const mongoose=require('mongoose');
const schema=mongoose.Schema;

const CandidateSchema = new schema({
    name: {type: String,required: true},
    email: {type: String,required: true},
    password: {type: String,required: true},
    age: {type: Number,required: true},
    username: {type: String,required: true},
    phonenumber: {type: Number,required: true},
    usertype: {type: String,required: true},
    location: {type: String,required: true},
    skills:{type:String,required:true,unique:false},
    interests:{type:String,required:true,unique:false},
    pasteventsandtasks:{type:String,required:true,unique:false},
    reviewsrecieved:{type:String,required:true,unique:false},
    notif: {type: []}
});

const Candidate = mongoose.model('Candidate', CandidateSchema);

module.exports = Candidate;


