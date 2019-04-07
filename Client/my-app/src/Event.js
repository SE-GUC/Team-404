import React, { Component } from "react";
import axios from "../../axiosInstance";
import Collapsible from "react-collapsible";

class Event extends Component {
  constructor(props, context) {
    super(props, context);

    this.event = {
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

  handelSubmit = async event => {
    event.preventDefault();

    const Event = {
      eventname: this.event.eventname,
      organizer: this.event.organizer,
      location: this.event.location,
      description: this.event.description,
      remainingplaces: this.event.remainingplaces,
      speakers: this.event.speakers,
      maximumplaces: this.event.maximumplaces,
      topicscovered: this.event.topicscovered,
      field: this.event.field,
      registrationprice: this.event.registrationprice,
      approvalstaus: this.event.eventname
    };
    console.log(Event);
    try {
      await axios.post("events/", Event);
    } catch (error) {
      console.log(error);
    }
  };
  
  render(){
      return(
          <div className= "Event">
          <h1> Events </h1>
          <Collapsible trigger = "create new event">
          <form onSubmit={this.handleSubmit}>
          <label className= "EventName">
            EventName:
          <input
          type="text"
          name= "eventname"
          />
        </label>
        <label className= "Organizer">
            Organizer:
            <input
            type="text"
            name="organizer"
            />
        </label>
        <label className= "Location">
            Location:
            <input
            type="text"
            name="location"
            />
        </label>
        <label className= "Description">
            Description:
            <input
            type="text"
            name="description"
            />
        </label>
        <label className= "RemainingPlaces">
            RemainingPlaces:
            <input
            type="text"
            name="remainingplaces"
            />
        </label>
        <label className= "Speakers">
            Speakers:
            <input
            type="text"
            name="speakers"
            />
        </label>
        <label className= "MaximumPlaces">
            MaximumPlaces:
            <input
            type="text"
            name="maximumplaces"
            />
        </label>
        <label className= "TopicsCovered">
            TopicsCovered:
            <input
            type="text"
            name="topicscovered"
            />
        </label>
        <label className= "Field">
            Field:
            <input
            type="text"
            name="field"
            />
        </label>
        <label className= "RegistrationPrice">
            RegistrationPrice:
            <input
            type="text"
            name="registrationprice"
            />
        </label>
        <label className= "ApprovalStatus">
            ApprovalStatus:
            <input
            type="text"
            name="approvalstatus"
            />
        </label>
        <button type = "submit"> Add </button>
        </form>
        </Collapsible>
        </div>
    );
  }
}
export default Event;