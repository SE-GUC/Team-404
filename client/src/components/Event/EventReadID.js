import React, { Component } from "react";
import axios from "./axiosInstance";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class EventReadID extends Component {
  state = {
    events: [],
    displaybook: true
  };
  componentDidMount() {
    axios.get(`events/getE/${this.props.match.params.id}`).then(res => {
      console.log("Response is: ", res);
      this.setState({ event: res.data.data });
      console.log("The state is", this.state.displaybook);
    });
  }

  onDelete = () => {
    axios.delete(`events/${this.props.match.params.id}`).then(res => {
      console.log(res);
      console.log(res.data);
      this.props.history.push("/Event");
    });
  };

  onBook = () => {
    axios
      .post(
        `events/${this.props.match.params.id}/users/${
          this.props.match.params.uid
        }`
      )
      .then(res => {
        this.setState({ displaybook: !this.state.displaybook });
        console.log(this.state.displaybook);
        console.log(res);
        console.log(res.data);

        //this.props.history.push("/Event");
      });
  };

  onCancel = () => {
    axios
      .post(
        `events/${this.props.match.params.id}/events/${
          this.props.match.params.uid
        }`
      )
      .then(res => {
        this.setState({ displaybook: this.state.displaybook });
        console.log(res);
        console.log(res.data);

        //this.props.history.push("/Event");
      });
  };

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
            Name:
            <span className="event name">{event.eventName}</span>
            <br />
            Organizer: {"  "}
            <span className="event organizer">{event.organizer}</span>
            <br />
            Location: {"  "}
            <span className="event location">{event.location}</span>
            <br />
            Description: {"  "}
            <span className="event description">{event.description}</span>
            <br />
            Remaining Places: {"  "}
            <span className="event remaining places">
              {event.remainingPlaces}
            </span>
            <br />
            Speakers: {"  "}
            <span className="event speakers">{event.speakers}</span>
            <br />
            Maximum Places: {"  "}
            <span className="event maximum places">{event.maximumPlaces}</span>
            <br />
            Topics Covered: {"  "}
            <span className="event's topics covered">
              {event.topicsCovered}
            </span>
            <br />
            Field: {"  "}
            <span className="event field">{event.field}</span>
            <br />
            Registration Price: {"  "}
            <span className="event registration price">
              {event.registrationPrice}
            </span>
            <br />
            <br />
            <Link to={`/${event._id}/update`}>
              <span STYLE="text-decoration:underline; font-weight:bold">
                UPDATE
              </span>{" "}
            </Link>
            <br />
            <br />
            <button className="btn btn-primay" onClick={this.onDelete}>
              Delete this event
            </button>
            <br />
            <br />
          </div>
        </div>
      ) : (
        <div>Event is loading</div>
      );

    const boolean =
      this.state.displaybook == true ? (
        <button className="btn btn-primay"  onClick={this.onBook}>
          Book this event
        </button>
      ) : (
        <button className="btn btn-primay"  onClick={this.onCancel}>
          {" "}
          Cancel Booking For this event
        </button>
      );
    return [eventJSX, boolean];
  }
}
export default withRouter(EventReadID);
