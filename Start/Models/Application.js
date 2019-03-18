const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ApplicationSchema = new Schema ({
    candidate:{type:String,required:true,unique:false},
    partner:{type:String,required:true,unique:false},
    datetime:{type:String,required:true,unique:true},
    task:{type:String,required:true,unique:true},
    status:{type:String,required:true,unique:false},
    account_no:{type:String,required:true,unique:true},
   
    });

const Application = mongoose.model('Account', ApplicationSchema);

module.exports = Application
