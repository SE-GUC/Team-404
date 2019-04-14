import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./components/User/Textbox.css";
import Login from "./components/User/Login";
import Header from "./components/Layout/Header";
import ApplicationInfo from "./components/ApplicationInfo";
import Taskform from "./components/Taskform";
import Partner from "./components/page/Partner";
import EventRead from "./components/EventRead";
import uuid from "uuid";
import Feedback from "./components/Feedback";
import AddFeedback from "./components/AddFeedback";
import AddTask from "./components/AddTask";
import EventPost from "./components/EventPost ";
import EventPut from "./components/EventPut";
import User from "./components/page/User/User";
import UserList from "./components/User/UserList";
import RegisterPartner from "./components/RegisterPartner";
import RegisterCandidate from "./components/RegisterCandidate";


class App extends Component {
  state = {
    applications: [],
    taskform: [
      /*  {
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
      }*/
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
    ],
    feedbacks: [
      {
        id: uuid.v4(),
        event: "dummydata",
        response: "dummydata",
        name: "dummydata"
      },
      {
        id: uuid.v4(),
        event: "dummydata",
        response: "dummydata",
        name: "dummydata"
      },
      {
        id: uuid.v4(),
        event: "dummydata",
        response: "dummydata",
        name: "dummydata"
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
  render() {
    return (
      <Router>
        <div className="App" id="background2">
          <Header />
          <Route
            exact
            path="/RegisterPartner"
            render={props => (
              <React.Fragment>
                <RegisterPartner />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/RegisterCandidate"
            render={props => (
              <React.Fragment>
                <RegisterCandidate />
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
            path="/Taskform"
            render={props => (
              <React.Fragment>
                <Taskform taskform={this.state.taskform} />
                <AddTask />
              </React.Fragment>
            )}
          />

          <Route
            exact
            path="/Feedback"
            render={props => (
              <React.Fragment>
                <AddFeedback addFeedback={this.addFeedback} />
                <Feedback feedbacks={this.state.feedbacks} />{" "}
              </React.Fragment>
            )}
          />

          <Route
            exact
            path="/Event"
            render={props => (
              <React.Fragment>
                <EventRead />
                <br />
                <br />
                <EventPost />
                <br />
                <br />
                <EventPut />
              </React.Fragment>
            )}
          />

          <Route exact path="/User" Component={User} render = {props => (
            <React.Fragment>
              <User/>
            </React.Fragment>
          )} />
          <Route exact path="/UserList" Component={UserList} />
        </div>
      </Router>
    );
  }
}

export default App;
