import React, { Component } from "react";
import axios from "axios";

class User extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: "",
      email: "",
      password: "",
      age: "",
      username: "",
      phoneNumber: "",
      userType: "Candidate",
      location: "",
      skills: "",
      interests: "",
      // pastEventsAndTasks: "",
      reviewsRecieved: ""
    };
  }
  handleChangeName = user => {
    this.setState({ name: user.target.value });
  };

  handleChangeEmail = user => {
    this.setState({ email: user.target.value });
  };

  handleChangePassword = user => {
    this.setState({ password: user.target.value });
  };

  handleChangeAge = user => {
    this.setState({ age: user.target.value });
  };

  handleChangeUserName = user => {
    this.setState({ username: user.target.value });
  };

  handleChangePhoneNumber = user => {
    this.setState({ phoneNumber: user.target.value });
  };

  handleChangeUserType = user => {
    this.setState({ userType: user.target.value });
  };

  handleChangeLocation = user => {
    this.setState({ location: user.target.value });
  };
  handleChangeBoard = user => {
    this.setState({ board: user.target.value });
  };

  handleChangePastEvents = user => {
    this.setState({ pastEvents: user.target.value });
  };

  // handleChangePastEventsAndTasks = user => {
  //   this.setState({ pastEventsAndTasks: user.target.value });
  // };

  handleChangeReports = user => {
    this.setState({ reports: user.target.value });
  };
  handleSubmit = async event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      age: this.state.age,
      username: this.state.username,
      phoneNumber: this.state.phoneNumber,
      userType: this.state.userType,
      location: this.state.location,
      board: this.state.board,
      pastEvents: this.state.pastEvents,
      reports: this.state.reports
    };
    console.log(user);
    try {
      let response = await axios.post("http://localhost:3001/Routes/api/users/register", user);
      console.log(response);
    }
    catch (error) {
      console.log(error);
    }
  };
  render() {
    return (

      <div className="user">
        <h1> users </h1>
        <form onSubmit={this.handleSubmit}>
          <label className="name">
            name:
        <input
              onChange={this.handleChangeName}
              type="text"
              name="name"
            />
          </label>
          <label className="email">
            email:
          <input
              onChange={this.handleChangeEmail}
              type="text"
              name="email"
            />
          </label>
          <label className="password ">
            password:
          <input
              onChange={this.handleChangePassword}
              type="text"
              name="password"
            />
          </label>
          <label className="age">
            age:
          <input
              onChange={this.handleChangeAge}
              type="number"
              name="age"
            />
          </label>
          <label className="username">
            username:
          <input
              onChange={this.handleChangeUserName}
              type="text"
              name="username"
            />
          </label>
          <label className="phoneNumber">
            phoneNumber:
          <input
              onChange={this.handleChangePhoneNumber}
              type="number"
              name="phoneNumber"
            />
          </label>
        
          <label className="location">
            location:
          <input
              onChange={this.handleChangeLocation}
              type="text"
              name="location"
            />
            
          </label>
          <label className="board">
            board:
          <input
              onChange={this.handleChangeBoard}
              type="text"
              name="Board"
            />

          </label>
          <label className="pastEvents">
            pastEvents:
          <input
              onChange={this.handleChangePastEvents}
              type="text"
              name="PastEvents"
            />

          </label>
          <label className="reports">
            reports:
          <input
              onChange={this.handleChangeReports}
              type="text"
              name="Reports"
            />

          </label>
          <button type="submit" onClick={this.handleSubmit}> Create user </button>
        </form>


      </div>
    );

  }
}
export default User;