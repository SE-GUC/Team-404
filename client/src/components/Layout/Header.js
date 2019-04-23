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
      <Link id=".App-link" to="/Event">
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
        View User
      </Link>
      |{" "}
      <Link id=".App-link" to="/DeleteAccount">
      Delete Account
      </Link>
      |{" "}
      <Link id=".App-link" to="/User/Partners">
          View Partners
       </Link>
       |{" "}
       <Link id=".App-link" to="/User/Candidates">
          View Candidates
        </Link>
        |{" "}
            <Link id=".App-link" to="/User/Consultants">
           View Consultants
            </Link>
            |{" "}
    
      <Link id=".App-link" to="/updateUser">
        Edit Account
      </Link>
      |{" "}
    </header>
  );
}

export default Header;
