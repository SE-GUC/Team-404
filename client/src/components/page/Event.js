import React from "./node_modules/react";
import EventPost from "../EventPost "
import { Link } from "./node_modules/react-router-dom";
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
