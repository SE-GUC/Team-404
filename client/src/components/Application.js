import React, { Component } from "react";
import { connect } from "react-redux";
import { getApplications } from "../globalState/actions/applicationActions";
import PropTypes from "prop-types";

export class Application extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getApplications();
  };

  render() {
    const applicationItems = this.props.applications.map((applications, id));
    return (
      <div key={id}>
        <h3>Hello {applications.id}</h3>
      </div>
    );
  }
}

ApplicationInfo.propTypes = {
  getApplications: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  applications: state.applications.applications
});
export default connect(mapStateToProps,{getApplications})(Application);
