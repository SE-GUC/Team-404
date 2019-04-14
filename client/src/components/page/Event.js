import React from "react";
import EventPost from "../EventPost "
import { Link } from "react-router-dom";
function Event() {
  return (
    <React.Fragment>
      <h1>Event</h1>
      <Link  to="\client\src\components\EventPost">
        Post Event
      </Link>
    </React.Fragment>
    
  );
}

export default Event;
