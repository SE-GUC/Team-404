//const Booking= required('Booking');
//const Bid= required('Bid');
const uuidv1 = require('uuid/v1')

class Booking{
    constructor(event,partner,attendee){
        var today       = new Date();
        var date        = today.getFullYear() + '';
        var time        = today.getHours() + '';    
        var dateTime    = date + time;
    this.event=event;
    this.partner=partner;
    this.attendee=attendee;
    this.dateofbooking=dateofbooking;
    this.id=uuidv1();
    this.dateofbooking = dateTime
    };

};

module.exports =Booking 