import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import EventRequest from "./components/Event/EventRequest";
import EventCreate from "./components/Event/EventCreate";
import EventPut from "./components/Event/EventPut";
import EventDelete from "./components/Event/EventDelete";
import "./components/User/Textbox.css";
import Login from "./components/User/Login";
import Header from "./components/Layout/Header";
import ApplicationInfo from "./components/ApplicationInfo";
import Taskform from "./components/Task/Taskform";
import Partner from "./components/page/Partner";
import Event from "./components/page/Event";
import uuid from "uuid";
import Feedback from "./components/Feedback";
import User from "./components/User";
import ReadTasks from "./components/ReadTasks";
import DeleteTask from "./components/Task/DeleteTask";
import AddTask from "./components/page/Tasks/AddTask";
import ConsultingTasks from "./components/page/Tasks/ConsultingTasks";
import DeleteTasks from "./components/page/Tasks/DeleteTasks";
import ReadTaskID from "./components/ReadTaskID";
import UpdateTask from "./components/Task/UpdateTask";
import TaskHeader from "./components/Layout/TaskHeader";
import AddFeedback from "./components/AddFeedback";
import RegisterCandidate from "./components/RegisterCandidate";
import RegisterConsultant from "./components/RegisterConsultant";
import RegisterPartner from "./components/RegisterPartner";
import EventReadID from "./components/Event/EventReadID";
import UserList from "./components/UserList"
import PartnerList from "./components/PartnerList";
import ConsultantList from "./components/ConsultantList";
import CandidateList from "./components/CandidateList";
import updateUser from "./components/page/User/updateUser";
import Register from "./components/page/User/Register";
import EventReadIDPending from "./components/Event/EventReadIDPending";
import EventReadPending from "./components/Event/EventReadPending";
import DeleteAccount from "./components/page/User/DeleteAccount";



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
        <div className="App" id=".App-header" >
          <Header/>
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
            path="/Partner"
            render={props => (
              <React.Fragment >
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
            path="/DeleteTask"
            render={props => (
              <React.Fragment>
                <DeleteTask />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/Tasks"
            render={props => (
              <React.Fragment>
                <TaskHeader />
                <Taskform taskform={this.state.taskform} />
                <ReadTasks />
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
                <br></br>
                <br></br>
                <br></br>
                <UserList />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/User/Partners"
            render={props => (
              <React.Fragment>
                <br></br>
                <br></br>
                <br></br>
                <PartnerList />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/User/Candidates"
            render={props => (
              <React.Fragment>
                <br></br>
                <br></br>
                <br></br>
                <CandidateList />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/User/Consultants"
            render={props => (
              <React.Fragment>
                <br></br>
                <br></br>
                <br></br>
                <ConsultantList />
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
          <Route
            exact
            path="/Event/request"
            render={props => (
              <React.Fragment>
                <EventRequest />
              </React.Fragment>
            )}
          />
           <Route
            exact
            path="/Event/:id/create"
            render={props => (
              <React.Fragment>
                <EventCreate />
              </React.Fragment>
            )}
          />
          {/* {" "}
          <Route
            exact
            path="Event/update"
            render={props => (
              <React.Fragment>
                <EventPut />
              </React.Fragment>
            )}
          />{" "} */}

          <Route
            exact
            path="/Event/delete"
            render={props => (
              <React.Fragment>
                <EventDelete />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/event/:id/User/:uid"
            render={props => (
              <React.Fragment>
                <EventReadID />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/event/:id/pending"
            render={props => (
              <React.Fragment>
                <EventReadIDPending />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/event/pending"
            render={props => (
              <React.Fragment>
                <EventReadPending />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/:id/update"
            render={props => (
              <React.Fragment>
                {/* <EventReadID></EventReadID> */}
                <EventPut />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/DeleteAccount"
            render={props => (
              <React.Fragment>
                {/* <EventReadID></EventReadID> */}
                <DeleteAccount />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/updateUser"
            render={props => (
              <React.Fragment>
                {/* <EventReadID></EventReadID> */}
                <updateUser />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/RegisterCandidate"
            component={RegisterCandidate}
          />
           <Route exact path="/PartnerList" component={PartnerList} />
           <Route exact path="/CandidateList" component={CandidateList} />
           <Route exact path="/ConsultantList" component={ConsultantList} />
           
          <Route exact path="/updateUser" component={updateUser} />
          <Route exact path="/RegisterConsultant" component={RegisterConsultant} />
          <Route exact path="/RegisterPartner" component={RegisterPartner} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/AddTask" component={AddTask} />
          <Route exact path="/ConsultingTasks" component={ConsultingTasks} />
          <Route exact path="/DeleteTasks" component={DeleteTasks} />
          <Route exact path="/UpdateTask" component={UpdateTask} />
          <Route exact path="/Partner" component={Partner} />
          <Route exact path="/Application" component={ApplicationInfo} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/UserList" component={UserList} />
          <Route exact path="/DeleteAccount" component={DeleteAccount} />
        </div>
      </Router>
    );
  }
}

export default App;
