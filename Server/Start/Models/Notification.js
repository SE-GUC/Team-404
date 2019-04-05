
const mongoose = require('mongoose')
const schema = mongoose.Schema
const ObjectId = schema.Types.ObjectId
const NotificationSchema = new schema({
  _id: ObjectId,
  text: { type: String, required: false, unique: false },
  date: { type: Date, default: Date.now() },
  recipient: { type: String, required: true, unique: false },
  trigger: { type: String, required: true, unique: false }
})

// NotificationSchema.index({ candidate: 1, partner: 1, task: 1 }, { unique: true })

const Notification = mongoose.model('Notification', NotificationSchema)

module.exports = Notification
