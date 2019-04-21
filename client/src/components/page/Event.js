import React from "react";
import EventRequest from "../Event/EventRequest";
import { Link } from "react-router-dom";
import EventRead from "../Event/EventRead";
import EventReadPending from "../Event/EventReadPending";

function Event() {
  return (
    <React.Fragment>
      <h1>Event</h1>
      <Link to="Event/request">
        <br />
        <br />
        <span STYLE="text-decoration:underline; font-weight:bold">
          Request{" "}
        </span>{" "}
        a new event here
        
      </Link>
      <Link to="Event/create">
        <br />
        <br />
        <span STYLE="text-decoration:underline; font-weight:bold">
          Create{" "}
        </span>{" "}
        a new event here
        <br />
        <br />
      </Link>
      <EventRead />

      <br />
      <br />
      <Link to={`/event/pending`}>
        <span STYLE="text-decoration:underline; font-weight:bold">
          Check Pending Events
        </span>{" "}
      </Link>
      <br />
      <br />
    </React.Fragment>
  );
}

export default Event;
