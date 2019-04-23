import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
class TaskDelete extends Component {
  state = {
    _id: ""
  };

  handleChange = task => {
    this.setState({ id: task.target.value });
  };

  handleSubmit = task => {
    task.preventDefault();

    axios.delete(`tasks/${this.props.match.params.id}`).then(res => {
      this.props.history.push("/tasks");
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            task ID:
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

export default withRouter(TaskDelete);