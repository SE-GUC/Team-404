import React from "react";
//import axios from './node_modules/axios';
import axios from "axios";
import { withRouter } from "react-router-dom";
import { number } from "prop-types";
import '../../User/Textbox.css';

class updateUser extends React.Component {
  state = {
    
    name: "",
    email: "",
    password: "",
    age: number,
    username: "",
    phoneNumber: number,
    userType: "",
    location: "",
    skills: "",
    interests: "",
    pastEventsAndTasks:"",
    reviewsRecieved:"",
    board: "",
    pastEvents: "",
    reports: "",
    organisationName: "",
    businessPartners: "",
    eventsOrganized: "",
    fieldOfWork: "",
    projectHistory:""

  };
  componentDidMount() {
    axios.get(`http://localhost:3001/Routes/api/users/${JSON.parse(localStorage.getItem('id'))}`).then(res => {
      this.setState(res.data.data);
      
    });
  }
  handleChangename = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeemail = event => {
    this.setState({ email: event.target.value });
  };

  handleChangepassword = event => {
    this.setState({ password: event.target.value });
  };

  handleChangeage = event => {
    this.setState({ age: event.target.value });
  };

  handleChangeusernames = event => {
    this.setState({ username: event.target.value });
  };

  handleChangephoneNumber = event => {
    this.setState({ phoneNumber: event.target.value });
  };

  handleChangeuserType = event => {
    this.setState({ userType: event.target.value });
  };

  handleChangelocation = event => {
    this.setState({ location: event.target.value });
  };

  handleChangeskills = event => {
    this.setState({ skills: event.target.value });
  };

  handleChangeinterests = event => {
    this.setState({ interests: event.target.value });
  };
  handleChangepastEventsAndTasks = event => {
    this.setState({ pastEventsAndTasks: event.target.value });
  };
  handleChangereviewsRecieved = event => {
    this.setState({ reviewsRecieved: event.target.value });
  };
  handleChangepastEvents = event => {
    this.setState({ pastEvents: event.target.value });
  };
  handleChangereports = event => {
    this.setState({ reports: event.target.value });
  };
  handleChangeorganisationName = event => {
    this.setState({ organisationName: event.target.value });
  };
  handleChangebusinessPartners = event => {
    this.setState({ businessPartners: event.target.value });
  };
  handleChangeeventsOrganized = event => {
    this.setState({ eventsOrganized: event.target.value });
  };
  handleChangefieldOfWork = event => {
    this.setState({ fieldOfWork: event.target.value });
  };
  handleChangeprojectHistory = event => {
    this.setState({ projectHistory: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const User = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        age: this.state.age,
        username: this.state.username,
        phoneNumber: this.state.phoneNumber,
        userType: this.state.userType,
        location: this.state.location,
        skills: this.state.skills,
        interests: this.state.interests,
        pastEventsAndTasks: this.state.pastEventsAndTasks,
        reviewsRecieved: this.state.reviewsRecieved,
        board: this.state.board,
        reports: this.state.reports,
        organisationName: this.state.organisationName,
        businessPartners: this.state.businessPartners,
        eventsOrganized: this.state.eventsOrganized,
        fieldOfWork: this.state.fieldOfWork,
        projectHistory: this.state.projectHistory,

    };


    try {
      let response = axios.put(
          ` http://localhost:3001/Routes/api/users/${JSON.parse(localStorage.getItem('id'))}`,
        User
      ).then ( res => {
      console.log(response)}
      )
    } catch (error) {
      console.log(error);
    }
    //this.props.history.push('/Event');
  }

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        
        <h1>Edit Account</h1>
        <br />
        <br />
        <label> Your details : </label>
        <br />
        <br />
        <label className="name">
        name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChangename}
          />
        </label>
        <br />
        

        <label className="email">
        email:
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChangeemail}
          />
        </label>
        <br />
        <label className="password">
        password:
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChangepassword}
          />
        </label>
        <br />
        <label className="age">
        age:
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChangeage}
          />
        </label>
        <br />
        
        <label className="username">
        username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChangeusername}
          />
        </label>
        <br />
        <label className="phoneNumber">
        phoneNumber:
          <input
            type="text"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChangephoneNumber}
          />
        </label>
        <br />
        
        <label className="userType">
        userType:
          <input
            type="text"
            name="userType"
            value={this.state.userType}
            onChange={this.handleChangeuserType}
          />
        </label>
        <br />
        <label className="location">
        location:
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChangelocation}
          />
        </label>
        <br />
        
        <label className="skills">
        skills:
          <input
            type="text"
            name="skills"
            value={this.state.skills}
            onChange={this.handleChangeskills}
          />
        </label>
        <br />
        <label className="interests">
        interests:
          <input
            type="text"
            name="interests"
            value={this.state.interests}
            onChange={this.handleChangeinterests}
          />
        </label>
        <br />
       
        <label className="pastEventsAndTasks">
        pastEventsAndTasks:
          <input
            type="text"
            name="pastEventsAndTasks"
            value={this.state.pastEventsAndTasks}
            onChange={this.handleChangepastEventsAndTasks}
          />
        </label>
        <br />
        <label className="reviewsRecieved">
        reviewsRecieved:
          <input
            type="text"
            name="reviewsRecieved"
            value={this.state.reviewsRecieved}
            onChange={this.handleChangereviewsRecieved}
          />
        </label>
        <br />
        <label className="board">
        board:
          <input
            type="text"
            name="board"
            value={this.state.board}
            onChange={this.handleChangeboard}
          />
        </label>
        <br />
        <label className="reports">
        reports:
          <input
            type="text"
            name="reports"
            value={this.state.reports}
            onChange={this.handleChangereports}
          />
        </label>
        <br />
        <label className="organisationName">
        organisationName:
          <input
            type="text"
            name="organisationName"
            value={this.state.organisationName}
            onChange={this.handleChangeorganisationName}
          />
        </label>
        <br /> 
        <label className="businessPartners">
        businessPartners:
          <input
            type="text"
            name="businessPartners"
            value={this.state.businessPartners}
            onChange={this.handleChangebusinessPartners}
          />
        </label>
        <br />
        <label className="eventsOrganized">
        eventsOrganized:
          <input
            type="text"
            name="eventsOrganized"
            value={this.state.eventsOrganized}
            onChange={this.handleChangeeventsOrganized}
          />
        </label>
        <br />
        <label className="fieldOfWork">
        fieldOfWork:
          <input
            type="text"
            name="fieldOfWork"
            value={this.state.fieldOfWork}
            onChange={this.handleChangefieldOfWork}
          />
        </label>
        <br />
        <label className="projectHistory">
        projectHistory:
          <input
            type="text"
            name="projectHistory"
            value={this.state.projectHistory}
            onChange={this.handleChangeprojectHistory}
          />
        </label>
        <br />


        <button type="submit" className="text-center" id="i3" onClick={this.handleSubmit}>
         
          UPDATE
        </button>
      </form>
    );
  }
}

export default withRouter(updateUser);