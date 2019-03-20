// const Booking= required('Booking');
// const Bid= required('Bid');
const uuid = require('uuid/v4')

class Booking {
  constructor (event, partner, attendee) {
    var today = new Date()
    var date = today.getFullYear() + ''
    var time = today.getHours() + ''
    var dateTime = date + time
    this.event = event
    this.partner = partner
    this.attendee = attendee
    this.dateofbooking = dateTime
    this.id = uuid()
  };
};

module.exports = Booking
