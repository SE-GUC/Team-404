//const Booking= required('Booking');
//const Bid= required('Bid');
const uuidv1 = require('uuid/v1')

class Booking{
    constructor(event,partner,attendee,dateofbooking){
    this.event=event;
    this.partner=partner;
    this.attendee=attendee;
    this.dateofbooking=dateofbooking;
    this.id=uuidv1();
    };

};

module.exports =Booking 