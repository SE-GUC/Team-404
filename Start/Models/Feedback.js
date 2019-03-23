const mongoose = require('mongoose')

const FeedbackSchema =new Schema ({
id : mongoose.Types.ObjectId(),
    event :{type:String,required:true,unique:true},
    response:{type:String,required:true,unique:true},
    name:{type:String,required:true,unique:true}

})
   
const Feedback = mongoose.model('Feedback',FeedbackSchema)
module.exports= Feedback;


