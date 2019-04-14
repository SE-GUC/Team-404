import React, { Component } from "react";
<<<<<<< HEAD:client/src/components/EventRead.js
import axios from "axios";
=======
import axios from "./axiosInstance";
import { Link } from "react-router-dom";
>>>>>>> 0b8b5e77256b2e802d6b7214f7bcdb309c8b092d:client/src/components/Event/EventRead.js
class EventRead extends Component {
    state = {
        events: [ ]
    }
    componentDidMount(){
        
        axios.get('http://localhost:3001/Routes/api/events/')
        .then(res => {
            console.log(res)
            this.setState({
                events: res.data.data
            })
        })
    }
render(){
const { events } = this.state;
const eventList = events.length ? (
    events.map(event => {
    return(
        <div className= "event card" key={event._id}>
        <div className="card-content">
        <Link to = {`event/${event._id}`}>
        
        {/* //the name as a link  */}
        <span className="event candidate">{event.eventName}</span>
           
        </Link>
        </div>
        </div>
    )
})
) : ( 
<div className="center">No events yet</div>
)
return(
    <div className="container">
    {eventList}
    </div>
   
)
}

}
export default EventRead