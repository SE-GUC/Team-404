
const mongoose = require('mongoose')
const schema = mongoose.Schema

const ConsultantSchema = new schema({
    name: {type: String,required: true},
    email: {type: String,required: true},
    password: {type: String,required: true},
    //age: {type: Number,required: true},
    username: {type: String,required: true},
    phonenumber: {type: Number,required: true},
    usertype: {type: String,required: true},
    location: {type: String,required: true},
    board: {type: [String],required: true},
    pastEvents: {type: [String],required: true},
    reports: { type: [String],required: true},
    notif: {type: []}
})
const Consultant = mongoose.model('Consultant', ConsultantSchema)

module.exports = Consultant