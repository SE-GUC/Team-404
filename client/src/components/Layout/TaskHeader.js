import React from "react";
import { BrowserRouter as Router, Route , Link} from "react-router-dom";
import AddTaskPage from '../page/AddTaskPage'
function TaskHeader() {
  return (
    <header style={headerStyle}>
    <br/>
    <br/>
    <br/>
      <h1>Task Header</h1>
      <Link style={linkStyle} to="/Tasks">
        Tasks 
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/AddTaskPage">
        Add Task Page
      </Link>
      <Route path="AddTaskPage" component={AddTaskPage} />
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
  color: "#fff",
  textDecoration: "none"
};
export default TaskHeader;
