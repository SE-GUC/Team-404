import React from "react";
import { Link } from "react-router-dom";
import TaskRead from "../Task/TaskRead";
import TaskCreate from "../Task/TaskCreate"

function Task() {
  return (
    <React.Fragment>
      <h1>Tasks</h1>
      <Link to="TaskCreate">
        <br />
        <br />
        <span STYLE="text-decoration:underline; font-weight:bold">
          Create{" "}
        </span>{" "}
        a new task 
        <br />
        <br />
      </Link>
      
        Tasks
      <TaskRead />

      <br />
      <br />
      
    </React.Fragment>
  );
}

export default Task
