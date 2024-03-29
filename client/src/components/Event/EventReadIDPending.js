import React, { Component } from "react";
import axios from "./axiosInstance";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";


class EventReadIDPending extends Component {
  state = {
    events: []
  };
  componentDidMount() {
    axios.get(`events/getE/${this.props.match.params.id}`).then(res => {
      console.log("Response is: ", res);
      this.setState({ event: res.data.data });
      console.log("The state is", this.state);
    });
  }

  onConfirm = () => {
    axios.put(`events/${this.props.match.params.id}/confirmRequest`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.props.history.push('/Event');
    })
  }

  onReject = () => {
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
            Name:
            
            <span className="event name">{event.eventName}</span>
            <br />
            Organizer: {'  '}
            
            <span className="event organizer">{event.organizer}</span>
            <br />
            Location: {'  '}
            
            <span className="event location">{event.location}</span>
            <br />
            Description: {'  '}
            
            <span className="event description">{event.description}</span>
            <br />
            Remaining Places: {'  '}
            
            <span className="event remaining places">{event.remainingPlaces}</span>
            <br />
            Speakers: {'  '}
            
            <span className="event speakers">{event.speakers}</span>
            <br />
            Maximum Places: {'  '}
            
            <span className="event maximum places">{event.maximumPlaces}</span>
            <br />
            Topics Covered: {'  '}
            
            <span className="event's topics covered">{event.topicsCovered}</span>
            <br />
            Field: {'  '}
            
            <span className="event field">{event.field}</span>
            <br />
            Registration Price: {'  '}
            
            <span className="event registration price">{event.registrationPrice}</span>
            <br />
            <br />
            <button className="btn btn-primay" onClick={this.onConfirm}>Confirm this event</button>
            <br />
            <br />
            <button className="btn btn-primay" onClick={this.onReject}>Reject this event</button>
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
export default withRouter(EventReadIDPending);
