import React from "react";
//import axios from './node_modules/axios';
import axios from "./axiosInstance";
import { withRouter } from "react-router-dom";

class EventPut extends React.Component {
  state = {
    
    eventName: "",
    organizer: "",
    location: "",
    description: "",
    remainingPlaces: 5,
    speakers: "",
    maximumPlaces: 7,
    topicsCovered: "",
    field: "",
    registrationPrice: 9
  };
  componentDidMount() {
    axios.get(`events/getE/${this.props.match.params.id}`).then(res => {
      this.setState(res.data.data);
    });
  }
  handleChangeeventName = event => {
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

  handleChangeremainingPlaces = event => {
    this.setState({ remainingPlaces: event.target.value });
  };

  handleChangeSpeakers = event => {
    this.setState({ speakers: event.target.value });
  };

  handleChangemaximumPlaces = event => {
    this.setState({ maximumPlaces: event.target.value });
  };

  handleChangetopicsCovered = event => {
    this.setState({ topicsCovered: event.target.value });
  };

  handleChangeField = event => {
    this.setState({ field: event.target.value });
  };

  handleChangeregistrationPrice = event => {
    this.setState({ registrationPrice: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

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
      let response = axios.put(
          `events/${this.props.match.params.id}`,
        Event
      ).then ( res => {
      console.log(response)}
      )
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        
        <h1>Edit Event</h1>
        <br />
        <br />
        <label> Events details : </label>
        <br />
        <br />
        <label className="eventName">
          eventName:
          <input
            type="text"
            name="eventName"
            value={this.state.eventName}
            onChange={this.handleChangeeventName}
          />
        </label>
        <br />
        <label className="Organizer">
          Organizer:
          <input
            type="text"
            name="organizer"
            value={this.state.organizer}
            onChange={this.handleChangeOrganizer}
          />
        </label>
        <br />
        <label className="Location">
          Location:
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChangeLocation}
          />
        </label>
        <br />
        <label className="Description">
          Description:
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChangeDescription}
          />
        </label>
        <br />
        <label className="remainingPlaces">
          remainingPlaces:
          <input
            type="text"
            name="remainingPlaces"
            value={this.state.remainingPlaces}
            onChange={this.handleChangeremainingPlaces}
          />
        </label>
        <br />
        <label className="Speakers">
          Speakers:
          <input
            type="text"
            name="speakers"
            value={this.state.speakers}
            onChange={this.handleChangeSpeakers}
          />
        </label>
        <br />
        <label className="maximumPlaces">
          maximumPlaces:
          <input
            type="text"
            name="maximumPlaces"
            value={this.state.maximumPlcaes}
            onChange={this.handleChangemaximumPlaces}
          />
        </label>
        <br />
        <label className="topicsCovered">
          topicsCovered:
          <input
            type="text"
            name="topicsCovered"
            value={this.state.topicsCovered}
            onChange={this.handleChangetopicsCovered}
          />
        </label>
        <br />
        <label className="Field">
          Field:
          <input
            type="text"
            name="field"
            value={this.state.field}
            onChange={this.handleChangeField}
          />
        </label>
        <br />
        <label className="registrationPrice">
          registrationPrice:
          <input
            type="text"
            name="registrationPrice"
            value={this.state.registrationPrice}
            onChange={this.handleChangeregistrationPrice}
          />
        </label>
        <br />

        <button type="submit" className="text-center" onClick={this.handleSubmit}>
          {" "}<br /> {" "} {" "}<br />
          UPDATE{" "} <br />{" "} {" "}<br />
        </button>
      </form>
    );
  }
}

export default withRouter(EventPut);
