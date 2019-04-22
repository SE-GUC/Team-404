import React from "react";
import axios from "./axiosInstance";
import { withRouter } from "react-router-dom";

<<<<<<< HEAD
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
=======
class EventPut extends React.Component{
state={
    eventid: '',
      eventname: '',
      organizer: '',
      location: '',
      description: '',
      remainingplaces: 5,
      speakers: '',
      maximumplaces: 7,
      topicscovered: '',
      field: '',
      registrationprice: 9,
      approvalstaus: '',
      applicants: [],
      feedback: []
}
handleChangeEventName = event => {
    this.setState({ eventname: event.target.value });
>>>>>>> 0e9e4d16eccf9ddc0141a5367c2d8353384fbbce
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

<<<<<<< HEAD
    axios.put("http://localhost:3001/api/events/id", { Event }).then(res => {
      console.log(res);
      console.log(res.data);
    });

    try {
      let response = axios
        .put(`events/${this.props.match.params.id}`, Event)
        .then(res => {
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
    //this.props.history.push('/Event');
  };

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

        <button
          type="submit"
          className="text-center"
          onClick={this.handleSubmit}
        >
          {" "}
          <br /> <br />
          UPDATE <br /> <br />
        </button>
      </form>
    );
  }
}

export default withRouter(EventPut);
=======
    render() {
        return(
            <form onSubmit = {this.handelSubmit} >
                <label> Events : </label>

          <label className="EventName">
            EventName:
            <input type="text" name="eventname" onChange = {this.handleChangeEventName}/>
          </label><b/>

          <label className="Organizer">
            Organizer:
            <input type="text" name="organizer" onChange = {this.handleChangeOrganizer} />
          </label><b/>

          <label className="Location">
            Location:
            <input type="text" name="location" onChange = {this.handleChangeLocation}/>
          </label>

          <label className="Description">
            Description:
            <input type="text" name="description" onChange = {this.handleChangeDescription} />
          </label>

          <label className="RemainingPlaces">
            RemainingPlaces:
            <input type="text" name="remainingplaces" onChange = {this.handleChangeRemainingPlaces}/>
          </label>

          <label className="Speakers">
            Speakers:
            <input type="text" name="speakers" onChange = {this.handleChangeSpeakers}/>
          </label>

          <label className="MaximumPlaces">
            MaximumPlaces:
            <input type="text" name="maximumplaces" onChange = {this.handleChangeMaximumPlaces}/>
          </label>

          <label className="TopicsCovered">
            TopicsCovered:
            <input type="text" name="topicscovered" onChange = {this.handleChangeTopicsCovered}/>
          </label>

          <label className="Field">
            Field:
            <input type="text" name="field" onChange = {this.handleChangeField}/>
          </label>

          <label className="RegistrationPrice">
            RegistrationPrice:
            <input type="text" name="registrationprice" onChange = {this.handleChangeRegistrationPrice}/>
          </label>

          <label className="ApprovalStatus">
            ApprovalStatus:
            <input type="text" name="approvalstatus" onChange = {this.handleChangeApprovalStatus}/>
          </label>

          <label className="Applicants">
            Applicants:
            <input type="text" name="appliccants" onChange = {this.handleChangeApplicants}/>
          </label>

          <label className="Feedback">
            Feedback:
            <input type="text" name="feedback" onChange = {this.handleChangeFeedback}/>
          </label>
          <button type = "submit"> ADD </button>
            </form>
        )
    }
}

export default EventPut;
>>>>>>> 0e9e4d16eccf9ddc0141a5367c2d8353384fbbce
