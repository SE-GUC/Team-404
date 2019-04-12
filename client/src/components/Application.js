import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Application.css";
export class Application extends Component {
  render() {
    return (
      //outputs the names , references

      <div >
        <p />
      </div>
    );
  }
}


//stays the type of the bigger class
Application.propTypes = {
  applicationInfo: PropTypes.object.isRequired
};

export default Application;
