import React, { Component } from 'react';
import './App.css';
import './components/Textbox.css';
import Login from './components/Login';
import Application from "./components/Application";
import Header from "./components/Layout/Header";
import ApplicationInfo from "./components/ApplicationInfo";
import Axios from "axios";
class App extends Component {
  state = {
    application: []
  };
  
  delApplication = id => {
    this.setState({
      application: [
        ...this.state.application.filter(application => application.id !== id)
      ]
    });
  };

  render() {
    return (
      
          <div className="App" id='background2'>
      <Login/>
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
