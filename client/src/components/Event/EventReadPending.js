import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EventReadPending extends Component {
  state = {
    events: []
  };
  componentDidMount() {
    axios.get("http://localhost:3001/Routes/api/events/pending").then(res => {
      console.log(res);
      this.setState({
        events: res.data.data
      });
    });
  }
  render() {
    const { events } = this.state;
    const eventList = events.length ? (
      events.map(event => {
        return (
          <div className="event card" key={event._id}>
            <div className="card-content">
              <Link to={`/event/${event._id}/pending`}>

                {/* //the name as a link  */}
                <br /> 
                <span STYLE="text-decoration:underline; font-weight:bold">
                  {event.eventName}
                </span>
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">Retrievinng pending events</div>
    );
    return <div className="container">{eventList}</div>;
  }
}
export default EventReadPending;
