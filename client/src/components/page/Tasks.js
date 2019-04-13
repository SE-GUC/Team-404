import React from "react";
import AddTask from "./AddTask";
import { Link } from 'react-router-dom'
function Taskform() {
  return (
    <React.Fragment>
      <header style={headerStyle}>
        {" "}
        <Link style={linkStyle} to="/AddTask">
          <AddTask />{" "}
        </Link>
      </header>
    </React.Fragment>
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
  color: "#fff",
  textDecoration: "none"
};
export default Taskform;
