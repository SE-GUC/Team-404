import React, { Component } from "react";
import Header from "./Layout/Header";
import PropTypes from "prop-types";
import CandidateInfo from "./CandidateInfo";

export class Application extends Component {
  render() {
    const { id, name } = this.props.candidateInfo;
    return (
      //outputs the names , references

      <div style={formFormat}>
        <p>
          Name: {name}
          <br />
          <br />
          ID: {id}

          <button onClick={this.props.delApplication.bind(this, id)} style={btnStyle}>
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
    padding: "5px 10px",
    borderRadius: "50%",
    float: "right",
    marginBottom: "40px"
  };
  

const formFormat = {
  background: "#0E4DBA",
  padding: "5px 10px",
  borderRadius: "5px",
  margin: "10px"
};

//stays the type of the bigger class
Application.propTypes = {
  candidateInfo: PropTypes.object.isRequired
};

const infoFormat = {
  padding: "10px"
};

export default Application;
