import React, { Component } from "react";
import axios from "axios";

class EventPost extends Component {
  state = {
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
    approvalstaus: "",
    applicants: [],
    feedbakck: []
  };

  handleSubmit = async event => {
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
      approvalstaus: this.state.approvalstatus,
      applicants: this.state.applicants,
      feedback: this.state.feedback
    };
    try {
      let response = await axios.post(
        "http://localhost:3001/Routes/api/tasks/",
        Event
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  handleChangeEventName = event => {
    this.setState({ eventname: event.target.value });
  };

  handleChangeOrganizer = event => {
    this.setState({ organizer: event.target.value });
  };

  handleChangeLocation = event => {
    this.setState({ location: event.target.value });
  };

  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
  };

  handleChangeRemainingPlaces = event => {
    this.setState({ remainingplaces: event.target.value });
  };

  handleChangeSpeakers = event => {
    this.setState({ speakers: event.target.value });
  };

  handleChangeMaximumPlaces = event => {
    this.setState({ maximumplaces: event.target.value });
  };

  handleChangeTopicsCovered = event => {
    this.setState({ topicscovered: event.target.value });
  };

  handleChangeField = event => {
    this.setState({ field: event.target.value });
  };

  handleChangeRegistrationPrice = event => {
    this.setState({ registrationprice: event.target.value });
  };

  handleChangeApprovalStatus = event => {
    this.setState({ approvalstatus: event.target.value });
  };

  handleChangeApplicants = event => {
    this.setState({ applicants: event.target.value });
  };

  handleChangeFeedback = event => {
    this.setState({ feedback: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  /* axios.post("http://localhost:3001/api/events/", { Event }).then(res => {
      //console.log(res);
      console.log(res.data);
    });s
  */

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <label> Events : </label>

        <label className="EventName">
          EventName:
          <input
            type="text"
            name="eventname"
            onChange={this.handleChangeEventName}
          />
        </label>

        <label className="Organizer">
          Organizer:
          <input
            type="text"
            name="organizer"
            onChange={this.handleChangeOrganizer}
          />
        </label>

        <label className="Location">
          Location:
          <input
            type="text"
            name="location"
            onChange={this.handleChangeLocation}
          />
        </label>

        <label className="Description">
          Description:
          <input
            type="text"
            name="description"
            onChange={this.handleChangeDescription}
          />
        </label>

        <label className="RemainingPlaces">
          RemainingPlaces:
          <input
            type="text"
            name="remainingplaces"
            onChange={this.handleChangeRemainingPlaces}
          />
        </label>

        <label className="Speakers">
          Speakers:
          <input
            type="text"
            name="speakers"
            onChange={this.handleChangeSpeakers}
          />
        </label>

        <label className="MaximumPlaces">
          MaximumPlaces:
          <input
            type="text"
            name="maximumplaces"
            onChange={this.handleChangeMaximumPlaces}
          />
        </label>

        <label className="TopicsCovered">
          TopicsCovered:
          <input
            type="text"
            name="topicscovered"
            onChange={this.handleChangeTopicsCovered}
          />
        </label>

        <label className="Field">
          Field:
          <input type="text" name="field" onChange={this.handleChangeField} />
        </label>

        <label className="RegistrationPrice">
          RegistrationPrice:
          <input
            type="text"
            name="registrationprice"
            onChange={this.handleChangeRegistrationPrice}
          />
        </label>

        <label className="ApprovalStatus">
          ApprovalStatus:
          <input
            type="text"
            name="approvalstatus"
            onChange={this.handleChangeApprovalStatus}
          />
        </label>

        <label className="Applicants">
          Applicants:
          <input
            type="text"
            name="appliccants"
            onChange={this.handleChangeApplicants}
          />
        </label>

        <label className="Feedback">
          Feedback:
          <input
            type="text"
            name="feedback"
            onChange={this.handleChangeFeedback}
          />
        </label>
        <button type="submit"> ADD </button>
      </form>
    );
  }
}

export default EventPost;
