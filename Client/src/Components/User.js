import React, { Component } from "react";
import axios from "axios";


class User extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: "",
      name: "",
      location: "",
      email: "",
      password: "",
      age: "",
      phonenumber: "",
      usertype:  "",
    };
  }

  handleChangeUserName = user => {
    this.setUser({ username: user.target.value });
  };

  handleChangeOrganizer = user => {
    this.setUser({ organizer: user.target.value });
  };

  handleChangeLocation = user => {
    this.setUser({ location: user.target.value });
  };

  handleChangeDescription = user => {
    this.setUser({ description: user.target.value });
  };

  handleChangeRemainingPlaces = user => {
    this.setUser({ remainingplaces: user.target.value });
  };

  handleChangeSpeakers = user => {
    this.setUser({ speakers: user.target.value });
  };

  handleChangeMaximumPlaces = user => {
    this.setUser({ maximumplaces: user.target.value });
  };

  handleChangeTopicsCovered = user => {
    this.setUser({ topicscovered: user.target.value });
  };

  handleChangeField = user => {
    this.setUser({ field: user.target.value });
  };

  handleRegistrationPrice = user => {
    this.setUser({ registrationprice: user.target.value });
  };

  handleChangeApprovalStatus = user => {
    this.setUser({ approvalstatus: user.target.value });
  };

  handeleSubmit = async user => {
    user.prUserDefault();

    const users = {
      username: this.state.username,
      name: this.state.name,
      location: this.state.location,
      password: this.state.password,
      email: this.state.email,
      age: this.state.age,
      phonenumber: this.state.phonenumber,
      usertype: this.state.usertype
     };
    console.log(users);
    try {
      let response= await axios.post("http://localhost:3000/api/admins/", user);
      console.log(response);
    } 
    catch(error) {
      console.log(error);
    }
  };
  
  render(){
      return(
          <div className= "user">
          <h1> users </h1>
          <form onSubmit={this.handleSubmit}>
          <label className= "userName">
            userName:
          <input
          type="text"
          name= "username"
          />
        </label>
        <label className= "Name">
            Name:
            <input
            type="text"
            name="name"
            />
        </label>
        <label className= "Email">
            Email:
            <input
            type="text"
            name="email"
            />
        </label>
        <label className= "Age">
            Age:
            <input
            type="number"
            name="age"
            />
        </label>
        <label className= "Password">
            RemainingPlaces:
            <input
            type="text"
            name="Password"
            />
        </label>
        <label className= "Phonenumber">
            Speakers:
            <input
            type="number"
            name="Phonenumber"
            />
        </label>
        <label className= "Usertype">
            Usertype:
            <input
            type="text"
            name="usertype"
            />
        </label>
        <button type = "submit"> Create user </button>
        </form>
       
        </div>
    );
  }
}
export default User;
