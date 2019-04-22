import React from "react";
import EventPost from "../Event/EventPost"
import { Link } from "react-router-dom";
import EventRead from "../Event/EventRead";


function Event() {
  return (
    
    <React.Fragment>
      <h1>Event</h1>
      <Link to = "Event/create">
      <br></br>
      <br></br>
       Create a new event here ! 
       <br></br>
      <br></br>
      </Link>
      
      <EventRead></EventRead>
    </React.Fragment>
    
  );
}

export default Event;
