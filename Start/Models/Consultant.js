const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConsultantSchema = new Schema({
    _id: schema.Types.ObjectId,

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    board: {
        type: String,
        required: true
    },

    pastEvents: {
        type: String,
        required: true
    },

    reports: {
        type: String,
        required: true
    }
    
})

ApplicationSchema.index({ candidate: 1, partner: 1, task: 1 }, { unique: true })


module.exports = Consultant = mongoose.model('consultants', ConsultantSchema)
module.exports = Application