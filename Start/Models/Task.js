const mongoose = require('mongoose')
const schema = mongoose.Schema
const ObjectId = schema.Types.ObjectId
const TaskSchema = new schema({
  _id: ObjectId,
  Description: { type: String, required: true },
  eta: { type: Number, required: true },
  levelofcommitment: { type: String, required: true, unique: false },
  partner: { type: String, required: true },
  monetarycompensation: { type: Number, required: true },
  skills: { type: String, required: true },
  lifecyclestatus: { type: String, required: true },
  experienceneeded: { type: String, required: true },
  consultancy: { type: String, required: true }

})

// TaskSchema.index({ Description: 1, eta: 1, levelofcommitment: 1 }, { unique: true })

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
