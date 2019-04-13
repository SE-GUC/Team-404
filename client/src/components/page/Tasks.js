
import React from "react";
import AddTaskPage from "./AddTaskPage";
import { Link } from "react-router-dom";
import TaskHeader from "../Layout/TaskHeader";
import AddTask from "../Task/AddTask";

function Tasks() {
  return (
    <React.Fragment>
      
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
  color: "#000",
  textDecoration: "none"
};
export default Tasks;


/*

      <Link style={linkStyle} to="/AddTaskPage">
        <ul>
          <br />
          <br />
          <br />
          <li>Add Task</li>
          
        </ul>
      </Link>
      <AddTask/>
*/