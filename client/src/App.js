import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./components/Textbox.css";
import Login from "./components/Login";
import Header from "./components/Layout/Header";
import ApplicationInfo from "./components/ApplicationInfo";
import Taskform from "./components/Task/Taskform";
import Tasks from "./components/page/Tasks/Tasks";
import Partner from "./components/page/Partner";
import EventRead from "./components/EventRead";
import uuid from "uuid";
import Feedback from "./components/Feedback";
import User from "./components/User";
import AddFeedback from "./components/AddFeedback";
import EventPost from "./components/EventPost ";
import EventPut from "./components/EventPut";
import Event from "./components/page/Event";
import AddTask from "./components/page/Tasks/AddTask";
import ConsultingTasks from "./components/page/Tasks/ConsultingTasks";
import DeleteTasks from "./components/page/Tasks/DeleteTasks";
import UpdateTask from "./components/Task/UpdateTask";
//import UpdateTask from "./components/page/Tasks/UpdateTask"

class App extends Component {
  state = {
    applications: [],
    taskform: [],
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
                <p>Welcome To Lirten Hub</p>
              </React.Fragment>
            )}
          />

          <Route
            exact
            path="/Tasks"
            render={props => (
              <React.Fragment>
                <Taskform taskform={this.state.taskform} />
                <Tasks />
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
            path="/User"
            render={props => (
              <React.Fragment>
                <User />
              </React.Fragment>
            )}
          />

          <Route
            exact
            path="/Event"
            render={props => (
              <React.Fragment>
                <Event />
              </React.Fragment>
            )}
          />

          <Route exact path="/AddTask" component={AddTask} />
          <Route exact path="/ConsultingTasks" component={ConsultingTasks} />
          <Route exact path="/DeleteTasks" component={DeleteTasks} />
          <Route exact path="/UpdateTask" component={UpdateTask} />
          <Route exact path="/Partner" component={Partner} />
          <Route exact path="/Application" component={ApplicationInfo} />
          <Route exact path="/Login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
