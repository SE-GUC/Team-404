import React, { Component } from "react";
import axios from "axios";

class userDelete extends Component {
  state = {
    _id: ''
  }

  handleChange = user => {
    this.setState({ id: usr.target.value });
  }

  handleSubmit = usr => {
    user.preventDefault();

    axios.delete(`users/${this.state._id}`)
      .then(res => {
        this.props.history.push('/users');
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

export default withRouter(userDelete)