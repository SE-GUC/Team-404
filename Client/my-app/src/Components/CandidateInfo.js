import React, { Component } from "react";
import Application from "./Application";
import PropTypes from "prop-types";

export class CandidateInfo extends Component {
    
  render() {
      
      //candidateinfo in the parameter is used in everything else in here , references 
      //the one written in the APP
   return this.props.candidateInfo.map((candidateInfo) => (
    <Application key = {candidateInfo.id} candidateInfo = {candidateInfo} delApplication = {this.props.delApplication} />
   )) ;
  }
}



CandidateInfo.propTypes = {
    candidateInfo: PropTypes.array.isRequired
}


export default CandidateInfo;
