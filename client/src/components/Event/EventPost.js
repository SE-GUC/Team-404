<<<<<<< HEAD:client/src/components/EventPost .js
import React, { Component } from "react";
import axios from "axios";
=======
import React from "react";
import axios from "./axiosInstance";
import { withRouter } from "react-router-dom";
>>>>>>> 0b8b5e77256b2e802d6b7214f7bcdb309c8b092d:client/src/components/Event/EventPost.js

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
<<<<<<< HEAD:client/src/components/EventPost .js
        <br/>
        <label className="EventName">
          EventName:
=======
        <br />
        <label className="eventName">
          eventName:
>>>>>>> 0b8b5e77256b2e802d6b7214f7bcdb309c8b092d:client/src/components/Event/EventPost.js
          <input
            type="text"
            name="eventName"
            onChange={this.handleChangeEventName}
          />
<<<<<<< HEAD:client/src/components/EventPost .js
        </label><br/>

=======
        </label>
        <br />
>>>>>>> 0b8b5e77256b2e802d6b7214f7bcdb309c8b092d:client/src/components/Event/EventPost.js
        <label className="Organizer">
          Organizer:
          <input
            type="text"
            name="organizer"
            onChange={this.handleChangeOrganizer}
          />
<<<<<<< HEAD:client/src/components/EventPost .js
        </label><br/>

=======
        </label>
        <br />
>>>>>>> 0b8b5e77256b2e802d6b7214f7bcdb309c8b092d:client/src/components/Event/EventPost.js
        <label className="Location">
          Location:
          <input
            type="text"
            name="location"
            onChange={this.handleChangeLocation}
          />
<<<<<<< HEAD:client/src/components/EventPost .js
        </label><br/>

=======
        </label>
        <br />
>>>>>>> 0b8b5e77256b2e802d6b7214f7bcdb309c8b092d:client/src/components/Event/EventPost.js
        <label className="Description">
          Description:
          <input
            type="text"
            name="description"
            onChange={this.handleChangeDescription}
          />
<<<<<<< HEAD:client/src/components/EventPost .js
        </label><br/>

        <label className="RemainingPlaces">
          RemainingPlaces:
=======
        </label>
        <br />
        <label className="remainingPlaces">
          remainingPlaces:
>>>>>>> 0b8b5e77256b2e802d6b7214f7bcdb309c8b092d:client/src/components/Event/EventPost.js
          <input
            type="text"
            name="remainingPlaces"
            onChange={this.handleChangeRemainingPlaces}
          />
<<<<<<< HEAD:client/src/components/EventPost .js
        </label><br/>

=======
        </label>
        <br />
>>>>>>> 0b8b5e77256b2e802d6b7214f7bcdb309c8b092d:client/src/components/Event/EventPost.js
        <label className="Speakers">
          Speakers:
          <input
            type="text"
            name="speakers"
            onChange={this.handleChangeSpeakers}
          />
<<<<<<< HEAD:client/src/components/EventPost .js
        </label><br/>

        <label className="MaximumPlaces">
          MaximumPlaces:
=======
        </label>
        <br />
        <label className="maximumPlaces">
          maximumPlaces:
>>>>>>> 0b8b5e77256b2e802d6b7214f7bcdb309c8b092d:client/src/components/Event/EventPost.js
          <input
            type="text"
            name="maximumPlaces"
            onChange={this.handleChangeMaximumPlaces}
          />
<<<<<<< HEAD:client/src/components/EventPost .js
        </label><br/>

        <label className="TopicsCovered">
          TopicsCovered:
=======
        </label>
        <br />
        <label className="topicsCovered">
          topicsCovered:
>>>>>>> 0b8b5e77256b2e802d6b7214f7bcdb309c8b092d:client/src/components/Event/EventPost.js
          <input
            type="text"
            name="topicsCovered"
            onChange={this.handleChangeTopicsCovered}
          />
<<<<<<< HEAD:client/src/components/EventPost .js
        </label><br/>

        <label className="Field">
          Field:
          <input type="text" name="field" onChange={this.handleChangeField} />
        </label><br/>

        <label className="RegistrationPrice">
          RegistrationPrice:
=======
        </label>
        <br />
        <label className="Field">
          Field:
          <input type="text" name="field" onChange={this.handleChangeField} />
        </label>
        <br />
        <label className="registrationPrice">
          registrationPrice:
>>>>>>> 0b8b5e77256b2e802d6b7214f7bcdb309c8b092d:client/src/components/Event/EventPost.js
          <input
            type="text"
            name="registrationPrice"
            onChange={this.handleChangeRegistrationPrice}
          />
<<<<<<< HEAD:client/src/components/EventPost .js
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
=======
        </label>
        <br />
        <button type="submit" onClick={this.handleSubmit}>
          {" "}
          Create{" "}
        </button>
        <br />
>>>>>>> 0b8b5e77256b2e802d6b7214f7bcdb309c8b092d:client/src/components/Event/EventPost.js
      </form>
    );
  }
}

export default withRouter(EventPost);
