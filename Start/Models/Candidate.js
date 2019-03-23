<<<<<<< HEAD

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
=======
const uuid = require('uuid/v4')
class Candidate {
  constructor (age, skills, interests, pasteventsandtasks, reviewsrecieved) {
    this.age = age
    this.skills = skills
    this.interests = interests
    this.pasteventsandtasks = pasteventsandtasks
    this.reviewsrecieved = reviewsrecieved
    this.id = uuid()
  };
};
module.exports = Candidate
>>>>>>> 213f44757b9eb47678359b51dad2f85672a18469
