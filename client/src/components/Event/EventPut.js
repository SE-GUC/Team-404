import React from 'react';
//import axios from './node_modules/axios';
import axios from "./axiosInstance";

class EventPut extends React.Component{
state={
    eventid: '',
      eventName: '',
      organizer: '',
      location: '',
      description: '',
      remainingPlaces: 5,
      speakers: '',
      maximumPlaces: 7,
      topicsCovered: '',
      field: '',
      registrationPrice: 9,
      approvalstaus: '',
      applicants: [],
      feedbakck: []
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

  handleChangeapprovalStatus = event => {
    this.setState({ approvalStatus: event.target.value });
  };

  handleChangeApplicants = event => {
    this.setState({ applicants: event.target.value });
  };

  handleChangeFeedback = event => {
    this.setState({ feedback: event.target.value });
  };



    handleSubmit = event =>{
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
            registrationPrice: this.state.registrationPrice,
            approvalstaus: this.state.approvalStatus,
            applicants: this.state.applicants,
            feedback: this.state.feedback

          };

          axios.put('http://localhost:3001/api/events/id', {Event})
          .then(res => {
              console.log(res);
              console.log(res.data);
          });
    };

    render() {
        return(
            <form onSubmit = {this.handelSubmit} >
                <label> Events : </label>

          <label className="eventName">
            eventName:
            <input type="text" name="eventName" onChange = {this.handleChangeeventName}/>
          </label>

          <label className="Organizer">
            Organizer:
            <input type="text" name="organizer" onChange = {this.handleChangeOrganizer} />
          </label>

          <label className="Location">
            Location:
            <input type="text" name="location" onChange = {this.handleChangeLocation}/>
          </label>

          <label className="Description">
            Description:
            <input type="text" name="description" onChange = {this.handleChangeDescription} />
          </label>

          <label className="remainingPlaces">
            remainingPlaces:
            <input type="text" name="remainingPlaces" onChange = {this.handleChangeremainingPlaces}/>
          </label>

          <label className="Speakers">
            Speakers:
            <input type="text" name="speakers" onChange = {this.handleChangeSpeakers}/>
          </label>

          <label className="maximumPlaces">
            maximumPlaces:
            <input type="text" name="maximumPlaces" onChange = {this.handleChangemaximumPlaces}/>
          </label>

          <label className="topicsCovered">
            topicsCovered:
            <input type="text" name="topicsCovered" onChange = {this.handleChangetopicsCovered}/>
          </label>

          <label className="Field">
            Field:
            <input type="text" name="field" onChange = {this.handleChangeField}/>
          </label>

          <label className="registrationPrice">
            registrationPrice:
            <input type="text" name="registrationPrice" onChange = {this.handleChangeregistrationPrice}/>
          </label>

          <label className="approvalStatus">
            approvalStatus:
            <input type="text" name="approvalStatus" onChange = {this.handleChangeapprovalStatus}/>
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