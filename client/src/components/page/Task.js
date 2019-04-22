import React from "react";
//import EventRequest from "../Event/EventRequest";
import { Link } from "react-router-dom";
import TaskRead from "../Task/TaskRead";
//import EventReadPending from "../Event/EventReadPending";

function Event() {
  return (
    <React.Fragment>
      {/* <h1>Tasks</h1>
      <Link to="Event/request">
        <br />
        <br />
        <span STYLE="text-decoration:underline; font-weight:bold">
          Request{" "}
        </span>{" "}
        a new event  */}
        
      {/* </Link> */}
      <Link to="Task/create">
        <br />
        <br />
        <span STYLE="text-decoration:underline; font-weight:bold">
          Create{" "}
        </span>{" "}
        a new task 
        <br />
        <br />
      </Link>
      {/* <Link to={`/event/pending`}>
      
        <span STYLE="text-decoration:underline; font-weight:bold">
          Check{" "}
        </span>{" "}
        pending events
        <br />
        <br />
      </Link>
      
      The Live Events
      <EventRead />

      <br />
      <br /> */}
      Tasks
      <TaskRead/>


    </React.Fragment>
  );
}

export default Task;
