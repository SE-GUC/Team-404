import React from "react";
import EventPost from "../Event/EventPost"
import { Link } from "react-router-dom";
import EventRead from "../Event/EventRead";
import EventReadPending from "../Event/EventReadPending";


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

      
      <br></br>
      <br></br>
      <span STYLE="text-decoration:underline; font-weight:bold">Pending Events </span> 
       <br></br>
       <EventReadPending></EventReadPending>
      <br></br>
      
    </React.Fragment>
    
  );
}

export default Event;
