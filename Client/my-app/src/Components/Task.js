import React, { Component } from "react";
import Header from "./Layout/Header";
import PropTypes from "prop-types";
import ApplicationInfo from "./ApplicationInfo";
import TaskInfo from "./TaskInfo";

export class Task extends Component {
  render() {
    const {
      Description,
      eta,
      levelofcommitment,
      monetarycompensation,
      lifecyclestatus,
      experienceneeded,
      consultancy
    } = this.props.taskInfo;

    return (
      <div style={formFormat}>
        <p>
          <h3>Task Info</h3>
          <br />
          Description: {Description}
          <br />
          <br />
          eta: {eta}
          <br />
          <br /> levelofcommitment:
          {levelofcommitment}
          <br />
          <br />
          monetarycompensation: {monetarycompensation}
          <br />
          <br />
          lifecyclestatus: {lifecyclestatus}
          <br />
          <br />
          experienceneeded: {experienceneeded}
          <br />
          <br />
          consultancy: {consultancy}
         
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
Task.propTypes = {
  taskInfo: PropTypes.object.isRequired
};

export default Task;
