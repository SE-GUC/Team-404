import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class EventPost extends Component {
  state = {
    eventName: "",
    organizer: "",
    location: "",
    description: "",
    remainingPlaces: 0,
    speakers: "",
    maximumPlaces: 0,
    topicsCovered: "",
    field: "",
    registrationPrice: 0
  };

  handleSubmit = async event => {
    event.preventDefault();
   // console.log(`The state is : ${this.state}`);
    const Event = {
      eventName: this.state.eventName,
      organizer: this.state.organizer,
      location: this.state.location,
      description: this.state.description,
      remainingPlaces: this.state.remainingPlaces,
      speakers: this.state.speakers,
      maximumPlaces: this.state.maximumPlaces,
      topicsCovered: this.state.topicsCovered,
      field: this.state.field,
      registrationPrice: this.state.registrationPrice
    };
    try {
      let response = await axios.post(
        "http://localhost:3001/Routes/api/events/",
        Event
      );
      //console.log(response);
    } catch (error) {
      console.log(error);
    }
    this.props.history.push('/Event');
  };

  handleChangeEventName = event => {
    this.setState({ eventName: event.target.value });
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
    this.setState({ remainingPlaces: event.target.value });
  };

  handleChangeSpeakers = event => {
    this.setState({ speakers: event.target.value });
  };

  handleChangeMaximumPlaces = event => {
    this.setState({ maximumPlaces: event.target.value });
  };

  handleChangeTopicsCovered = event => {
    this.setState({ topicsCovered: event.target.value });
  };

  handleChangeField = event => {
    this.setState({ field: event.target.value });
  };

  handleChangeRegistrationPrice = event => {
    this.setState({ registrationPrice: event.target.value });
  };

  /* axios.post("http://localhost:3001/api/events/", { Event }).then(res => {
      //console.log(res);
      console.log(res.data);
    });s
  */

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <br />
        <br />
        <br />
        <br />
        <label> Events : </label>
        <br/>
        <label className="EventName">
          EventName:
          <input
            type="text"
            name="eventName"
            onChange={this.handleChangeEventName}
          />
        </label>
        <br />
        <label className="Organizer">
          Organizer:
          <input
            type="text"
            name="organizer"
            onChange={this.handleChangeOrganizer}
          />
        </label><br/>

        <label className="Location">
          Location:
          <input
            type="text"
            name="location"
            onChange={this.handleChangeLocation}
          />
        </label><br/>

        <label className="Description">
          Description:
          <input
            type="text"
            name="description"
            onChange={this.handleChangeDescription}
          />
        </label><br/>

        <label className="RemainingPlaces">
          RemainingPlaces:
          <input
            type="text"
            name="remainingPlaces"
            onChange={this.handleChangeRemainingPlaces}
          />
        </label><br/>

        <label className="Speakers">
          Speakers:
          <input
            type="text"
            name="speakers"
            onChange={this.handleChangeSpeakers}
          />
        </label>
        <br />
        <label className="maximumPlaces">
          maximumPlaces:
          <input
            type="text"
            name="maximumPlaces"
            onChange={this.handleChangeMaximumPlaces}
          />
        </label>
        <br />
        <label className="topicsCovered">
          topicsCovered:
          <input
            type="text"
            name="topicsCovered"
            onChange={this.handleChangeTopicsCovered}
          />
        </label>
        <br />
        <label className="Field">
          Field:
          <input type="text" name="field" onChange={this.handleChangeField} />
        </label>
        <br />
        <label className="registrationPrice">
          registrationPrice:
          <input
            type="text"
            name="registrationPrice"
            onChange={this.handleChangeRegistrationPrice}
          />
        </label><br/>

        <label className="ApprovalStatus">
          ApprovalStatus:
          <input
            type="text"
            name="approvalStatus"
            onChange={this.handleChangeApprovalStatus}
          />
        </label><br/>

        <label className="Applicants">
          Applicants:
          <input
            type="text"
            name="appliccants"
            onChange={this.handleChangeApplicants}
          />
        </label><br/>

        <label className="Feedback">
          Feedback:
          <input
            type="text"
            name="feedback"
            onChange={this.handleChangeFeedback}
          />
        </label><br/>
        <button type="submit"> ADD </button>
      </form>
    );
  }
}

export default withRouter(EventPost);
