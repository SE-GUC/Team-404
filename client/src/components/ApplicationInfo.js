import React, { Component } from "react";
import Axios from "axios";
import Application from "./Application";



export class ApplicationInfo extends Component {
  state = {
    applications: []
  };

  componentDidMount = () => {

    Axios.get("http://localhost:3001/Routes/api/applications/").then(res => {
      this.console.log(res.data);
    });

    Axios.get("http://localhost:3001/Routes/api/applications/").then(res =>
      console.log(res.data)
    );

  };

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

export default ApplicationInfo;
