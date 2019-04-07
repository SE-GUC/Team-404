import React, { Component } from "react";
import Header from "./Layout/Header";
import PropTypes from "prop-types";
import ApplicationInfo from "./ApplicationInfo";
import "./Application.css";
export class Application extends Component {
  render() {
    const {
      id,
      candidate,
      partner,
      datetime,
      status,
      task: [
        {
          Description,
          eta,
          levelofcommitment,
          monetarycompensation,
          skills,
          lifecyclestatus,
          experienceneeded,
          consultancy
        }
      ]
    } = this.props.applicationInfo;

    return (
      //outputs the names , references

      <div style={formFormat}>
        <p>
          <table>
            <th colSpan="2">
              <h3>Application Info</h3>
            </th>
            <th colSpan="2">
              <h3>Task Info</h3>
            </th>
            <tr>
              <td>ID</td>
              <td> {id}</td>
              <td> Description </td>
              <td> {Description}</td>
            </tr>
            <tr>
              <td>Candidate</td>
              <td>{candidate}</td>
              <td> eta </td>
              <td> {eta}</td>
            </tr>
            <tr>
              <td> Partner</td>
              <td> {partner}</td>
              <td> levelofcommitment </td>
              <td> {levelofcommitment}</td>
            </tr>
            <tr>
              <td> Date-Time</td>
              <td> {datetime}</td>
              <td> Skills </td>
              <td> {skills}</td>
            </tr>
            <tr>
              <td>Status </td>
              <td> {status}</td>
              <td> monetarycompensation </td>
              <td> {monetarycompensation}</td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> lifecyclestatus </td>
              <td> {lifecyclestatus}</td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> experienceneeded </td>
              <td>{experienceneeded}</td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> consultancy </td>
              <td> {consultancy}</td>
            </tr>
          </table>
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

export default Application;
