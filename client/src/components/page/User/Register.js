import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegisterCandidate from '../../User/RegisterCandidate';
import RegisterPartner from '../../User/RegisterPartner';
import RegisterConsultant from '../../RegisterConsultant';
class Register extends Component {  
    render() {
      return (
        <div >
        <header>
        <Link id=".App-link" to="/RegisterCandidate">
        RegisterCandidate
        </Link>
        |{" "}
       <Link id=".App-link" to="/RegisterPartner">
       RegisterPartner
      </Link>
      |{" "}
      <Link id=".App-link" to="/RegisterConsultant">
      RegisterConsultant
      </Link>
      |{" "}
      
      </header>
        <Router>
        <Route 
        exact
        path="/RegisterCandidate"
        render={props => (
          <React.Fragment >
           <RegisterCandidate />
          </React.Fragment>
        )}
      />
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
        path="/RegisterConsultant"
        render={props => (
          <React.Fragment>
            <RegisterConsultant/>
          </React.Fragment>
        )}
      />
      </Router>
      </div>
    );
    }
  }
  export default Register;