import React, { Component } from "react";
import Application from "./Application";
import PropTypes from "prop-types";
import Axios from 'axios'
export class ApplicationInfo extends Component {
  state={
    applications: []
  }

  componentDidMount = () =>{
    Axios.get("http://localhost:3001/Routes/api/applications/" )
    .then(res =>{
     this.setState({applicaions : res.data})
    })
  }

  render() {
    //ApplicationInfo in the parameter is used in everything else in here , references
    //the one written in the APP
    return this.state.applications.map(applicationInfo => (
      <Application
        key={applicationInfo.id}
        applicationInfo={applicationInfo}
        delApplication={this.props.delApplication}
      />
    ));
  }
}

// ApplicationInfo.propTypes = {
//   ApplicationInfo: PropTypes.array.isRequired
// };

export default ApplicationInfo;
