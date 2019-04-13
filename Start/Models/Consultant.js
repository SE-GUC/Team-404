
const mongoose = require('mongoose')
const schema = mongoose.Schema

const ConsultantSchema = new schema({
    _id: schema.Types.ObjectId,
    name: {type: String,required: true},
    email: {type: String,required: true},
    password: {type: String,required: true},
    board: {type: [String],required: true},
    pastEvents: {type: [String],required: true},
    reports: { type: [String],required: true}
    
})
const Consultant = mongoose.model('Consultant', ConsultantSchema)

module.exports = Consultant