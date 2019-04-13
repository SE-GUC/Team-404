import React from "react";
import EventRead from "../Event/EventRead";
import { Link } from "react-router-dom";


function Event() {
  return (
    
    <React.Fragment>
      <h1>Event</h1>
      <Link to = "/Event/create">
       Create 
      </Link>
      
      <EventRead></EventRead>
    </React.Fragment>
    
  );
}

export default Event;
