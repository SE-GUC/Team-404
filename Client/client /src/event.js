import React, { Component } from "react";
import axios from "./axiosInstance";
//import Collapsible from "react-collapsible";

class Event extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      eventid: "",
      eventname: "",
      organizer: "",
      location: "",
      description: "",
      remainingplaces: 5,
      speakers: "",
      maximumplaces: 7,
      topicscovered: "",
      field: "",
      registrationprice: 9,
      approvalstaus: ""
    };
  }

  handleChangeEventName = event => {
    this.setEvent({ eventname: event.target.value });
  };

  handleChangeOrganizer = event => {
    this.setEvent({ organizer: event.target.value });
  };

  handleChangeLocation = event => {
    this.setEvent({ location: event.target.value });
  };

  handleChangeDescription = event => {
    this.setEvent({ description: event.target.value });
  };

  handleChangeRemainingPlaces = event => {
    this.setEvent({ remainingplaces: event.target.value });
  };

  handleChangeSpeakers = event => {
    this.setEvent({ speakers: event.target.value });
  };

  handleChangeMaximumPlaces = event => {
    this.setEvent({ maximumplaces: event.target.value });
  };

  handleChangeTopicsCovered = event => {
    this.setEvent({ topicscovered: event.target.value });
  };

  handleChangeField = event => {
    this.setEvent({ field: event.target.value });
  };

  handleRegistrationPrice = event => {
    this.setEvent({ registrationprice: event.target.value });
  };

  handleChangeApprovalStatus = event => {
    this.setEvent({ approvalstatus: event.target.value });
  };

  handeleSubmit = async event => {
    event.preventDefault();

    const Event = {
      eventname: this.state.eventname,
      organizer: this.state.organizer,
      location: this.state.location,
      description: this.state.description,
      remainingplaces: this.state.remainingplaces,
      speakers: this.state.speakers,
      maximumplaces: this.state.maximumplaces,
      topicscovered: this.state.topicscovered,
      field: this.state.field,
      registrationprice: this.state.registrationprice,
      approvalstaus: this.state.approvalstatus
    };

    axios.post('http://localhost:3001/api/events/', Event)
    .then(res => console.log(res.data))
    //console.log(Event);
    
  };

  render() {
    return (
      <div className="Event">
        <h1> Events </h1>
        {/* <Collapsible trigger = "create new event"> */}
        <form onSubmit={this.handleSubmit}>
          <label className="EventName">
            EventName:
            <input type="text" name="eventname" />
          </label>
          <label className="Organizer">
            Organizer:
            <input type="text" name="organizer" />
          </label>
          <label className="Location">
            Location:
            <input type="text" name="location" />
          </label>
          <label className="Description">
            Description:
            <input type="text" name="description" />
          </label>
          <label className="RemainingPlaces">
            RemainingPlaces:
            <input type="text" name="remainingplaces" />
          </label>
          <label className="Speakers">
            Speakers:
            <input type="text" name="speakers" />
          </label>
          <label className="MaximumPlaces">
            MaximumPlaces:
            <input type="text" name="maximumplaces" />
          </label>
          <label className="TopicsCovered">
            TopicsCovered:
            <input type="text" name="topicscovered" />
          </label>
          <label className="Field">
            Field:
            <input type="text" name="field" />
          </label>
          <label className="RegistrationPrice">
            RegistrationPrice:
            <input type="text" name="registrationprice" />
          </label>
          <label className="ApprovalStatus">
            ApprovalStatus:
            <input type="text" name="approvalstatus" />
          </label>
          <button onClick={response} type="submit">
            {" "}
            Create Event{" "}
          </button>
        </form>
        {/* </Collapsible> */}
      </div>
    );
  }

}

fetch("http://localhost:3001/events", {
  method: "POST",
  body: data
}).then(response => {
  response.json(data);
});

export default Event;
