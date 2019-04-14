import React from "react";
import EventRead from "../Event/EventRead";
import { Link } from "react-router-dom";


function Event() {
  return (
    
    <React.Fragment>
      <h1>Event</h1>
      <Link to = "Event/create">
      <br></br>
      <br></br>
      <span STYLE="text-decoration:underline; font-weight:bold">Create </span> a new event here 
       <br></br>
      <br></br>
      </Link>
      
      <EventRead></EventRead>
    </React.Fragment>
    
  );
}

export default Event;
