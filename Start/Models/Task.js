const mongoose = require('mongoose')
const schema = mongoose.Schema
const ObjectId = schema.Types.ObjectId
const TaskSchema = new schema({
  _id:                    ObjectId,
  Description:            { type: String, required: true},
  eta:                    { type: Number, required: true, unique: false},
  levelofcommitment:      { type: String, required: true},
  partner:                { type: String, required: true},
  monetarycompensation:   { type: Number, required: true},
  skills:                 { type: String, required: true},
  lifecyclestatus:        { type: String, required: true},
  experienceneeded:       { type: String, required: true},
  consultancy:            { type: String, required: true}

})

//TaskSchema.index({ candidate: 1, partner: 1, task: 1 }, { unique: true })

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task