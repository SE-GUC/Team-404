import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
class EventDelete extends Component {
  state = {
    _id: ""
  };

  handleChange = event => {
    this.setState({ id: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`events/${this.props.match.params.id}`).then(res => {
      this.props.history.push("/events");
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <br />
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <br />
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}

export default withRouter(EventDelete);
