
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FeedbackSchema = new Schema ({
    event:{type:String,required:true,unique:true},
    response:{type:String,required:true,unique:true},
    name:{type:String,required:true,unique:false}
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

module.exports = Feedback;

