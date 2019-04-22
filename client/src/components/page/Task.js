import React from "react";
import { Link } from "react-router-dom";
import TaskRead from "../Task/TaskRead";

function Task() {
  return (
    <React.Fragment>
      <h1>Tasks</h1>
      <Link to="Task/create">
        <br />
        <br />
        <span STYLE="text-decoration:underline; font-weight:bold">
          Request{" "}
        </span>{" "}
        a new event 
      </Link>
      
        Tasks
      <TaskRead />

      <br />
      <br />
      
    </React.Fragment>
  );
}

export default Task