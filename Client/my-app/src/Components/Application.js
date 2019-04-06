import React, { Component } from "react";
import Header from "./Layout/Header";
import PropTypes from "prop-types";
import ApplicationInfo from "./ApplicationInfo";
import TaskInfo from "./TaskInfo";
import Task from "./Task";

export class Application extends Component {
  render() {
    const {
      id,
      candidate,
      partner,
      datetime,
      task,
      status
    } = this.props.applicationInfo;

    return (
      //outputs the names , references

      <div style={formFormat}>
        <p>
          <h3>Application Info</h3>
          <br />
          ID: {id}
          <br />
          <br />
          Candidate: {candidate}
          <br />
          <br />
          Partner: {partner}
          <br />
          <br />
          Date-Time: {datetime}
          <br />
          <br />
          Task: {task}
          <br />
          <br />
          Status: {status}
          <br />
          
          <button
            onClick={this.props.delApplication.bind(this, id)}
            style={btnStyle}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "#f00",
  color: "#fff",
  padding: "10px",
  borderRadius: "50%",
  float: "right",
  marginBottom: "40px"
};

const formFormat = {
  background: "#4F5AF6",
  padding: "5px 10px",
  borderRadius: "5px",
  borderBottom: "1px",
  margin: "5px",
  marginBottom: "20px"
};

//stays the type of the bigger class
Application.propTypes = {
  applicationInfo: PropTypes.object.isRequired
};

const infoFormat = {
  padding: "10px"
};

export default Application;
