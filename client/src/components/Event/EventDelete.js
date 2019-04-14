import React, { Component } from "react";
<<<<<<< HEAD:client/src/components/EventDelete.js
import axios from  "./axiosInstance";

=======
import axios from "./axiosInstance";
import { withRouter } from "react-router-dom";
>>>>>>> 0b8b5e77256b2e802d6b7214f7bcdb309c8b092d:client/src/components/Event/EventDelete.js
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
