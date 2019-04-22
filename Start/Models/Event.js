const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
  eventName: { type: String, required: true },
  organizer: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  remainingPlaces: { type: Number, required: false },
  speakers: { type: String, required: true },
  maximumPlaces: { type: Number, required: true },
  topicsCovered: { type: String, required: true },
  field: { type: String, required: true },
  registrationPrice: { type: Number, required: true },
  approvalStatus: { type: String, required: false },
  applicants: { type: Array, required: false },
  feedback: { type: Array, required: false }
})

module.exports = Event = mongoose.model('events', EventSchema)
