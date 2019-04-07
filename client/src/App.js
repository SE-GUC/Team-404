import React, { Component } from "react";
import "./App.css";
import Application from "./components/Application";
import Header from "./components/Layout/Header";
import ApplicationInfo from "./components/ApplicationInfo";
import Axios from "axios";

class App extends Component {
  state = {
    application: []
  };

  /* application information
  attempt to put each information in an array and display all of em
  supposed to display the skills required only in task not from candidate
*/
/*
  componentDidMount() {
    Axios.get("http://localhost:3001/api/applications").then(res =>
      console.log(res.data)
    );
    // .then(res => this.setState({ application: res.application }));
  }
*/
  delApplication = id => {
    this.setState({
      application: [
        ...this.state.application.filter(application => application.id !== id)
      ]
    });
  };

  render() {
    return (
      <div>
        <div style={together}>
          <Header />
          <ApplicationInfo
            applicationInfo={this.state.application}
            delApplication={this.delApplication}
          />
        </div>
      </div>
    );
  }
}

const together = {
  border: "10px",
  borderRadius: "10px",
  background: "#9D9FB9",
  margin: "auto",
  paddingBottom: "1px"
};

export default App;
