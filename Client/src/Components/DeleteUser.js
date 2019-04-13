import React, { Component } from "react";
import axios from "./axiosInstance";
import User from "./Register";

class UserDelete extends Component {
  state = {
    _id: ""
  }

  handleChange = user => {
    this.setState({ id: user.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://localhost:3001/Routes/api/users/${this.state._id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <br/>
            <input type="text" name="_id" onChange={this.handleChange} />
          </label>
          <br/>
          <button type="submit" onSubmit={this.handleSubmit}>Delete</button>
        </form>
      </div>
    )
  }
}

export default UserDelete