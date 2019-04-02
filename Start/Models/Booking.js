const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookingSchema = new Schema({
  id: Schema.Types.ObjectId,
  event: { type: String, required: true, unique: true },
  partner: { type: String, required: true },
  attendee: { type: String, required: true },
  dateofbooking: { type: Date, required: true }
})

module.exports = mongoose.model('Booking', BookingSchema)
