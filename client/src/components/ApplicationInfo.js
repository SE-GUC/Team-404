import React, { Component } from "react";
//import Application from "./Application";
import Axios from "axios";
import PropTypes from "prop-types";

class ApplicationInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applications: [
        
      ]
    };
  }

  componentDidMount = () => {
    Axios.get("http://localhost:3001/Routes/api/applications/")
      .then(res => {
        this.setState({ applications: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <ApplicationList applications={this.state.applications} />
      </div>
    );
  }
}

function ApplicationList({ applications }) {
  return (
    <ul>
      {applications.map(application => (
        <li key={application.id}>{application.name}</li>
      ))}
    </ul>
  );
}

ApplicationInfo.propTypes = {
  applications: PropTypes.array.isRequired
};

export default ApplicationInfo;
