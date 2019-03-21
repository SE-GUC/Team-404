
const mongoose = require('mongoose')
const schema = mongoose.Schema

const ApplicationSchema = new schema({
  _id: schema.Types.ObjectId,
  candidate: { type: String, required: true, unique: false },
  partner: { type: String, required: true, unique: false },
  datetime: { type: Date, required: true, unique: true },
  task: { type: String, required: true, unique: false },
  status: { type: String, required: false, unique: false }
})

ApplicationSchema.index({ candidate: 1, partner: 1, task: 1 }, { unique: true })

const Application = mongoose.model('Application', ApplicationSchema)

module.exports = Application
