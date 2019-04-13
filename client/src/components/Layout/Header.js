import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Lirten Hub</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/Partner">
        View Partners
      </Link>
      |{" "}
      <Link style={linkStyle} to="/Application">
        Applications
      </Link>
      |{" "}
      <Link style={linkStyle} to="/Event">
        Events
      </Link>
      |{" "}
      <Link style={linkStyle} to="/Taskform">
        Tasks
      </Link>
      |{" "}
      <Link style={linkStyle} to="/Login">
        Login
      </Link>
      |{" "}  <Link style={linkStyle} to="/RegisterCandidate">
        RegisterCandidate
      </Link>
      | |{" "}  <Link style={linkStyle} to="/RegisterPartner">
        RegisterPartner
      </Link>
      | |{" "}  <Link style={linkStyle} to="/RegisterContributor">
        RegisterContributor
      </Link>
    </header>
  );
}

const headerStyle = {
  color: "#fff",
  textAlign: "left",
  padding: "10px"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};

export default Header;
