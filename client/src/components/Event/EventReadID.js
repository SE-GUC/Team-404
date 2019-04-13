import React, { Component } from "react";
import axios from "./axiosInstance";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";


class EventReadID extends Component {
  state = {
    events: []
  };
  componentDidMount() {
    axios.get(`events/${this.props.match.params.id}`).then(res => {
      console.log("Response is: ", res);
      this.setState({ event: res.data.data });
      console.log("The state is", this.state);
    });
  }

  onDelete = () => {
    axios.delete(`events/${this.props.match.params.id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.props.history.push('/Event');
    })
  }



  render() {
    const { event } = this.state;
    console.log("Event Log Is: ", event);
    const eventJSX =
      event && event._id ? (
        <div className="event card" key={event._id}>
          <div className="card-content">
            <br />
            <br />
            <br />
            <span className="event candidate">{event.eventName}</span>
            <br />
            <br />
            <span className="event candidate">{event.organizer}</span>
            <br />
            <br />
            <span className="event candidate">{event.location}</span>
            <br />
            <br />
            <span className="event candidate">{event.description}</span>
            <br />
            <br />
            <span className="event candidate">{event.remainingPlaces}</span>
            <br />
            <br />
            <span className="event candidate">{event.speakers}</span>
            <br />
            <br />
            <span className="event candidate">{event.maximumPlaces}</span>
            <br />
            <br />
            <span className="event candidate">{event.topicsCovered}</span>
            <br />
            <br />
            <span className="event candidate">{event.field}</span>
            <br />
            <br />
            <span className="event candidate">{event.registrationPrice}</span>
            <br />
            <br />
            <Link to="/Event/update">UPDATE</Link>
            <br />
            <br />
            <button className="btn btn-primay" onClick={this.onDelete}>Delete</button>
            <br />
            <br />
          </div>
        </div>
      ) : (
        <div>Event is loading</div>
      );
    return eventJSX;
  }
}
export default withRouter(EventReadID);
