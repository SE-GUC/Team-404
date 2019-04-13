import React, { Component } from "react";
import axios from "./axiosInstance";

class EventDelete extends Component {
  state = {
    _id: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://localhost:3001/Routes/api/events/${this.state._id}`)
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
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <br/>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}

export default EventDelete