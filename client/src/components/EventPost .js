import React from "./node_modules/react";
//import axios from "axios";
import axios from "./node_modules/axios";

class EventPost extends React.Component {
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
        <br/>
        <label className="EventName">
          EventName:
          <input
            type="text"
            name="eventname"
            onChange={this.handleChangeEventName}
          />
        </label><br/>

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
            name="remainingplaces"
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
        </label><br/>

        <label className="MaximumPlaces">
          MaximumPlaces:
          <input
            type="text"
            name="maximumplaces"
            onChange={this.handleChangeMaximumPlaces}
          />
        </label><br/>

        <label className="TopicsCovered">
          TopicsCovered:
          <input
            type="text"
            name="topicscovered"
            onChange={this.handleChangeTopicsCovered}
          />
        </label><br/>

        <label className="Field">
          Field:
          <input type="text" name="field" onChange={this.handleChangeField} />
        </label><br/>

        <label className="RegistrationPrice">
          RegistrationPrice:
          <input
            type="text"
            name="registrationprice"
            onChange={this.handleChangeRegistrationPrice}
          />
        </label><br/>

        <label className="ApprovalStatus">
          ApprovalStatus:
          <input
            type="text"
            name="approvalstatus"
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

export default EventPost;
