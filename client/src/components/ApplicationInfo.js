import React, { Component } from "react";
import Application from "./Application";
import PropTypes from "prop-types";

export class ApplicationInfo extends Component {
  render() {
    //ApplicationInfo in the parameter is used in everything else in here , references
    //the one written in the APP
    return this.props.applicationInfo.map(applicationInfo => (
      <Application
        key={applicationInfo.id}
        applicationInfo={applicationInfo}
        delApplication={this.props.delApplication}
      />
    ));
  }
}

ApplicationInfo.propTypes = {
  ApplicationInfo: PropTypes.array.isRequired
};

export default ApplicationInfo;
