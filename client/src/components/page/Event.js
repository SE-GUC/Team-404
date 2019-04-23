import React from "react";
import EventRequest from "../Event/EventRequest";
import { Link } from "react-router-dom";
import EventRead from "../Event/EventRead";
import EventReadPending from "../Event/EventReadPending";

function Event() {
  return (
    <React.Fragment>
      <h1>Events</h1>
      <Link to="Event/request">
        <br />
        <br />
        <span STYLE="text-decoration:underline; font-weight:bold">
          Request{" "}
        </span>{" "}
        a new event as a partner
        
      </Link>
      <Link to={`/Event/${JSON.parse(localStorage.getItem('id'))}/create`}>
        <br />
        <br />
        <span STYLE="text-decoration:underline; font-weight:bold">
          Create{" "}
        </span>{" "}
        a new event as an admin
        <br />
        <br />
      </Link>
      <Link to={`/event/pending`}>
      
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
      <br />
      
    </React.Fragment>
  );
}

export default Event
