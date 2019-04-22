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
    this.setState({ username: user.target.value });
  };

  handleChangeName = user => {
    this.setState({ name: user.target.value });
  };

  handleChangeLocation = user => {
    this.setState({ location: user.target.value });
  };

  handleChangeEmail = user => {
    this.setState({ email: user.target.value });
  };

  handleChangePassword  = user => {
    this.setState({ password: user.target.value });
  };

  handleChangeAge = user => {
    this.setState({ age: user.target.value });
  };

  handleChangePhoneNumber = user => {
    this.setState({ phonenumber: user.target.value });
  };

  handleChangeUserType = user => {
    this.setState({ usertype: user.target.value });
  };

 
  handleSubmit = async event => {
    event.preventDefault();

    const user = {
      username: this.state.username,
      name: this.state.name,
      location: this.state.location,
      password: this.state.password,
      email: this.state.email,
      age: this.state.age,
      phonenumber: this.state.phonenumber,
      usertype: this.state.usertype
     };
    console.log(user);
    try {
      let response= await axios.post("http://localhost:3001/Routes/api/users/", user);
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
          onChange ={this.handleChangeUserName}
          type="text"
          name= "username"
          />
        </label>
        <label className= "Name">
            Name:
            <input
            onChange = {this.handleChangeName}
            type="text"
            name="name"
            />
        </label>
        <label className= "Email">
            Email:
            <input
            onChange={this.handleChangeEmail}
            type="text"
            name="email"
            />
        </label>
        <label className= "Age">
            Age:
            <input
            onChange = {this.handleChangeAge}
            type="number"
            name="age"
            />
        </label>
        <label className= "Password">
            Password:
            <input
            onChange = {this.handleChangePassword}
            type="text"
            name="Password"
            />
        </label>
        <label className= "Phonenumber">
            Phonenumber:
            <input
            onChange = {this.handleChangePhoneNumber}
            type="number"
            name="Phonenumber"
            />
        </label>
        <label className= "Usertype">
            Usertype:
            <input
            onChange ={this.handleChangeUserType}
            type="text"
            name="usertype"
            />
        </label>
        <label className= "location">
            location:
            <input
            onChange={this.handleChangeLocation}
            type="text"
            name="location"
            />
        </label>
        <button type = "submit" onClick={this.handleSubmit}> Create user </button>
        </form>
       
        </div>
    );
 }
}
export default User;
