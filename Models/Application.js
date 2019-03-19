//const uuid = require('uuid/v4');
const mongoose=require('mongoose');
const schema=mongoose.Schema;

const ApplicationSchema = new schema ({
        candidate:{type: String ,required: true , unique: true},
        partner:{type: String ,required: true , unique: true},
        datetime:{type: Date ,required: false , unique: true},
        task:{type: String ,required: true , unique: true},
        status:{type: Boolean ,required: true , unique: true},

       // id=uuid(v)   
    
});

const Application = mongoose.model('Application', ApplicationSchema);


module.exports = Application
