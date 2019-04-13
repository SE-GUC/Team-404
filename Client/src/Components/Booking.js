import React, { Component } from "react";
import axios from "./axiosInstance";


class Booking extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      event: "",

      partner: "",

      attendee: "",

      dateofbooking: "",
    };
  }

  handleSubmit = async event => {

    event.preventDefault();

    const booking = {
      event: this.state.event,

      partner: this.state.partner,

      attendee: this.state.attendee,

      dateofbooking: this.state.dateofbooking,

    };

    console.log(booking);

    try {
      let response = await axios.post(
        "http://localhost:3001/api/bookings/",
        booking
      );

      console.log(response);
    } catch (error) {
      console.log(error);
      
    }
    
    
    
  };

  render() {
    return (
      <div>
        <h1>Bookings</h1>
        
          <form onSubmit={this.handleSubmit}>
            <label>
              Event
              <input
                type="text"
                name="event"
                onChange={this.handleChangeevent}
              /> 
            </label>

            <label>
              Partner
              <input type="text" name="partner" onChange={this.handleChangePartner} />
            </label>

            <label>
              Attendee
              <input
                type="text"
                name="attendee"
                onChange={this.handleChangeattendee}
              />
            </label>

            <label>
              Date Of Booking
              <input
                type="text"
                name="dateofbooking"
                onChange={this.handleChangedateofbooking}
              />
            </label>
            <button onClick={this.handleSubmit} type="submit">Create the Booking</button>
          </form>
        
      </div>
    );
  }
}

export default Booking;
