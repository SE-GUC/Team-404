const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookingSchema = new Schema({
  event: { type: String, required: true},
  partner: { type: String, required: true },
  attendee: { type: String, required: true },
  dateofbooking: { type: Date, required: true }
})



module.exports = mongoose.model('bookings', BookingSchema)
