import React, { Component } from "react";
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";
import "./App.css";
import "./components/Textbox.css";
import Login from "./components/Login";
import Header from "./components/Layout/Header";
import ApplicationInfo from "./components/ApplicationInfo";
import Taskform from "./components/Taskform";
import Consultant from "./components/consultant";
import PartnerHeader from "./components/PartnerHeader";
import PartnerPage from "./components/page/PartnerPage";

class App extends Component {
  state = {
    application: [],
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

  render() {
    return (
      <Router>
        <div className="App" id="background2">
          <Login />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <PartnerHeader />
                <p style={textStyle}>Welcome To Lirten Hub</p>
              </React.Fragment>
            )}
          />
          <Route path="/page" component={PartnerPage} />
          
         
          <Taskform taskform={this.state.taskform} />
          <div style={together}>
            <Header />
            <li>
              <Link to = "/Applications">View Applications</Link>
            </li>
              <Route path="/Applications" component={ApplicationInfo}/>
            <li>
              <Link to = "/TaskForms">View TaskForms</Link>
            </li>
            <Route path="/TaskForms" component={Taskform}/>
          </div>
        </div>
      </Router>
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

const textStyle = {
  textAlign: "left",
  padding: "10px",
  fontSize: "5mm"
};

export default App;
