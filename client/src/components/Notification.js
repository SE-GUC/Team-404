import React, { Component } from 'react'
import axios from "axios";

export class Notification extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      sender: "",
      senderEmail: "",
      recipient: "",
      subject: "",
      text: "",
    };
  }
  
  render() {
    return (
      <div className= "Notification">
      <h1>NOTIFCATION</h1>
        
        <form onSubmit= {this.handleSubmit}  >
        <label className = "sender">
        Sender:<input type = "text"></input>
        </label>  <br />
        <label className = "senderemail">
        Sender Email: <input type = "text"></input>
        </label> <br />
        <label className = "recipient">
        Recipient: <input type = "text"></input>
        </label> <br />
        <label className = "subject">
        Subject: <input type = "text"></input>
        </label> <br />
        <label className = "text">
        Text: <input type = "text"></input>
        </label> <br />
        <button type = "submit"> Send Notification </button>
        </form>
        <p>
          <br></br>
          <br></br>
          --------------------------------------------------------------------------------------------------------------------
        </p>
      </div>
    )
  }

  handleSubmit = async Notification =>{
    Notification.prNotificationDefault();

    var notification = {
      sender:       this.setState.sender,
      senderEmail:  this.setState.senderEmail,
      recipient:    this.setState.recipient,
      subject:      this.setState.subject,
      message:      this.setState.message
     };
     console.log("asdasdasdasdasdasdad")
    console.log(notification);
    try {
      let response= await axios.post("http://localhost:3000/api/notifications/send", notification);
      console.log(response);
    } 
    catch(error) {
      console.log(error);
    }
  }
}

export default Notification
