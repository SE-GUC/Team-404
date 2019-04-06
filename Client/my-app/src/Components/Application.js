import React, { Component } from "react";
import Header from "./Layout/Header";
import PropTypes from "prop-types";
import CandidateInfo from "./CandidateInfo";

export class Application extends Component {
  render() {
    return (
      //outputs the names , references
      
        <div style={formFormat} >
                 

          <p>
            Name: {this.props.candidateInfo.name}
            <br />
            <br />
            ID: {this.props.candidateInfo.id}
          </p>
        
      </div>
    );
  }
}

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
