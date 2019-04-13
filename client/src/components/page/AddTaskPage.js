import React from "react";
import AddTask from "../Task/AddTask";
import TaskHeader from "../Layout/TaskHeader";
import { BrowserRouter as Router, Route } from "react-router-dom";

function AddTaskPage() {
  return (
    <React.Fragment>
      <TaskHeader />
      <AddTask />
    </React.Fragment>
  );
}

export default AddTaskPage;

/*<React.Fragment>
      <TaskHeader/>
      <Link style={linkStyle} to="/AddTaskPage">
        <ul>
          <br/>
          <br/>
          <br/>
          <li>Add Task</li>
        </ul>
      </Link>
    </React.Fragment>*/