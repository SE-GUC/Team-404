import React, { Component } from "./node_modules/react";
import axios from  "./axiosInstance";

class EventRead extends Component {
    state = {
        events: [ ]
    }
    componentDidMount(){
        
        axios.get('http://localhost:3001/api/applications/')
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
        <span className="event candidate">{event.candidate}</span>
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