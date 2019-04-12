import React, { Component } from "react";
import Header from "./Layout/Header";
import PropTypes from "prop-types";
import ApplicationInfo from "./ApplicationInfo";
import "./Application.css";
export class Application extends Component {
  render() {
    const { id } = this.props.applicationInfo;

    return (
      //outputs the names , references

      <div style={formFormat}>
        <p>
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
