import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./components/Textbox.css";
import Login from "./components/Login";
import Header from "./components/Layout/Header";
import ApplicationInfo from "./components/ApplicationInfo";
import Taskform from "./components/Taskform";
import Partner from "./components/page/Partner";
import EventRead from './EventRead';
class App extends Component {
  state = {
    applications: [],
    taskform: [
      {
        id: 1,
        description: "Fix Cars",
        eta: "1 month",
        levelofcommitment: "High",
        partner: "Toyota",
        monetarycompensation: 3000,
        skills: "xxx",
        lifecyclestatus: "pending",
        experienceneeded: "3 years",
        consultancy: "Consultant"
      },

      {
        id: 2,
        description: "Fix Cars",
        eta: "1 month",
        levelofcommitment: "High",
        partner: "Toyota",
        monetarycompensation: 3000,
        skills: "xxx",
        lifecyclestatus: "pending",
        experienceneeded: "3 years",
        consultancy: "Consultant"
      }
    ],
    partner: [
      {
        id: 1,
        organisationname: "p1-OrganisationName",
        partners: "p1-Partners",
        boardmembers: "p1-BoardMembers",
        eventsorganized: "p1-EventsOrganized",
        fieldofwork: "p1-FieldOfWork",
        projecthistory: "p1-ProjectHistory",
        feedbackform: "p1-FeedBackForm"
      },
      {
        id: 2,
        organisationname: "p2-OrganisationName",
        partners: "p2-Partners",
        boardmembers: "p2-BoardMembers",
        eventsorganized: "p2-EventsOrganized",
        fieldofwork: "p2-FieldOfWork",
        projecthistory: "p2-ProjectHistory",
        feedbackform: "p2-FeedBackForm"
      },
      {
        id: 3,
        organisationname: "p3-OrganisationName",
        partners: "p3-Partners",
        boardmembers: "p3-BoardMembers",
        eventsorganized: "p3-EventsOrganized",
        fieldofwork: "p3-FieldOfWork",
        projecthistory: "p-3ProjectHistory",
        feedbackform: "p-3FeedBackForm"
      }
    ]
  };


  delApplication = id => {
    this.setState({
      application: [
        ...this.state.application.filter(application => application.id !== id)
      ]
    });
  };

  /* <div style={together}>
            <Header />
            <li>
              <Link to="/Applications">View Applications</Link>
            </li>
            <Route path="/Applications" component={ApplicationInfo} />
          </div>
*/
  render() {
    return (
      <Router>
        <div className="App" id="background2">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <p style={textStyle}>Welcome To Lirten Hub</p>
              </React.Fragment>
            )}
          />

          <Route
            exact
            path="/Partner"
            render={props => (
              <React.Fragment>
                <Partner />
              </React.Fragment>
            )}
          />

          <Route
            exact
            path="/Application"
            render={props => (
              <React.Fragment>
                <ApplicationInfo />
              </React.Fragment>
            )}
          />

          <Route
            exact
            path="/Login"
            render={props => (
              <React.Fragment>
                <Login />
              </React.Fragment>
            )}
          />

          <Route
            exact
            path="/Event"
            render={props => (
              <React.Fragment>
                <EventRead/>
              </React.Fragment>
            )}
          />

          <Route
            exact
            path="/Taskform"
            render={props => (
              <React.Fragment>
                <Taskform taskform={this.state.taskform} />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

const textStyle = {
  textAlign: "left",
  padding: "10px",
  fontSize: "5mm"
};

export default App;
