import React from "react";
import "../../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1 id="body">Lirten Hub</h1>
      <Link id=".App-link" to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link id=".App-link" to="/Application">
        Applications
      </Link>
      |{" "}
      
      <Link id=".App-link" to="/Register">
        Register
      </Link>
      |{" "}
<<<<<<< HEAD
      <Link style={linkStyle} to="/RegisterCandidate">
        RegisterCandidate
      </Link>
      |{" "}
      <Link style={linkStyle} to="/RegisterConsultant">
        RegisterConsultant
      </Link>
      |{" "}
      <Link style={linkStyle} to="/Event">
=======
      <Link id=".App-link" to="/Event">
>>>>>>> ed495cf4fdc22f141b59e62d959fabc94a1db169
        Events
      </Link>
      |{" "}
      <Link id=".App-link" to="/Tasks">
        Tasks
      </Link>
     |{" "}
      <Link id=".App-link" to="/Login">
        Login
      </Link>
      |{" "}
      <Link id=".App-link" to="/Feedback">
        Feedback
      </Link>
      |{" "}
      <Link id=".App-link" to="/User">
        User
      </Link>
    </header>
  );
}

export default Header;
