const Booking= required('Booking');
const Bid= required('Bid');

class Booking{
    constructor(event,partner,attendee,dateofbooking){
    this.event=event;
    this.partner=partner;
    this.attendee=attendee;
    this.dateofbooking=dateofbooking;
    this.id=Bid.v4();
    }

}