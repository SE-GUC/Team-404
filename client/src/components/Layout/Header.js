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
      <Link style={linkStyle} to="/Tasks">
        Tasks
      </Link>
      |{" "}
      <Link style={linkStyle} to="/Login">
        Login
      </Link>
      |{" "}
      <Link style={linkStyle} to="/Feedback">
        Feedback
      </Link>
      
    </header>
  );
}

const headerStyle = {
  //  background : '#333',
  color: "#fff",
  textAlign: " center",
  padding: "5px",
  borderRadius: "5px"
};

const linkStyle = {
  color:"#fff",
  textDecoration: "none"
}
export default Header;
