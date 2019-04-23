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
  handleChangeSkills = user => {
    this.setState({ skills: user.target.value });
  };

  handleChangeIntrests = user => {
    this.setState({ interests: user.target.value });
  };

  // handleChangePastEventsAndTasks = user => {
  //   this.setState({ pastEventsAndTasks: user.target.value });
  // };

  handleChangeReviewsRecived = user => {
    this.setState({ reviewsRecieved: user.target.value });
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
      skills: this.state.skills,
      interests: this.state.interests,
      pastEventsAndTasks: this.state.pastEventsAndTasks,
      reviewsRecieved: this.state.reviewsRecieved
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
          <br />
          <label className="email">
            email:
          <input
              onChange={this.handleChangeEmail}
              type="text"
              name="email"
            />
          </label>
          <br />
          <label className="password ">
            password:
          <input
              onChange={this.handleChangePassword}
              type="text"
              name="password"
            />
          </label>
          <br />
          <label className="age">
            age:
          <input
              onChange={this.handleChangeAge}
              type="number"
              name="age"
            />
          </label>
          <br />
          <label className="username">
            username:
          <input
              onChange={this.handleChangeUserName}
              type="text"
              name="username"
            />
          </label>
          <br />
          <label className="phoneNumber">
            phoneNumber:
          <input
              onChange={this.handleChangePhoneNumber}
              type="number"
              name="phoneNumber"
            />
          </label>
          <br />
          <label className="location">
            location:
          <input
              onChange={this.handleChangeLocation}
              type="text"
              name="location"
            />
            
          </label>
          <br />
          <label className="Skills">
            Skills:
          <input
              onChange={this.handleChangeSkills}
              type="text"
              name="Skills"
            />

          </label>
          <br />
          <label className="Intresets">
            Interests:
          <input
              onChange={this.handleChangeIntrests}
              type="text"
              name="Intresets"
            />

          </label>
          <br />
          <label className="PastEventsAndTasks">
            PastEventsAndTasks:
          <input
              onChange={this.handleChangePastEventsAndTasks}
              type="text"
              name="PastEventsAndTasks"
            />

          </label>
          <br />
          <label className="ReviewesRecived">
            ReviewesRecived:
          <input
              onChange={this.handleChangeReviewsRecived}
              type="text"
              name="ReviewesRecived"
            />

          </label>
          <br />
          <button type="submit" onClick={this.handleSubmit}> Create user </button>
        </form>
        <br />


      </div>
    );

  }
}
export default User;