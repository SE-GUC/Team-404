import React from "react";
<<<<<<< HEAD
import EventPost from "../EventPost "
import { Link } from "react-router-dom";
=======
import EventRead from "../Event/EventRead";
import { Link } from "react-router-dom";


>>>>>>> 0b8b5e77256b2e802d6b7214f7bcdb309c8b092d
function Event() {
  return (
    
    <React.Fragment>
      <h1>Event</h1>
<<<<<<< HEAD
      <Link  to="\client\src\components\EventPost">
        Post Event
      </Link>
=======
      <Link to = "Event/create">
      <br></br>
      <br></br>
       Create a new event here ! 
       <br></br>
      <br></br>
      </Link>
      
      <EventRead></EventRead>
>>>>>>> 0b8b5e77256b2e802d6b7214f7bcdb309c8b092d
    </React.Fragment>
    
  );
}

export default Event;
