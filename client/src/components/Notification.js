import React, { Component } from "react";

import axios from "./axiosInstance";

//import Collapsible from "react-collapsible";


class Notification extends Component {

  constructor(props, context) {

    super(props, context);


    this.Notification = {

      text: "",

      recipient: "",

      trigger: "",

    };

  }


  handleChangeNotificationText = Notification=> {

    this.setNotification({ text: Notification.target.value });

  };


  handleChangeRecipient = Notification=> {

    this.setNotification({ recipient: Notification.target.value });

  };


  handleChangeNotification = Notification=> {

    this.setNotification({ trigger: Notification.target.value });

  };

handeleSubmit = async event => {

    event.preventDefault();


    const Event = {

      eventname: this.state.eventname,

      text: this.state.text,

      recipient: this.state.recipient,

      trigger: this.state.recipient,

    };

    console.log(Event);

    try {

      let response= await axios.post("http://localhost:3001/api/notifications/", Notification);

      console.log(response);

    } 

    catch(error) {

      console.log(error);

    }

  };

  render(){

    return(

        <div className= "Notifications">

        <h1> Notifications </h1>

        {/* <Collapsible trigger = "create new event"> */}

        <form onSubmit={this.handleSubmit}>

        <label className= "NotificationText">

          NotificationText:

        <input

        type="text"

        name= "notificationtext"

        />

      </label>

      <label className= "recipient">

          Organizer:

          <input

          type="text"

          name="recipient"

          />

      </label>
      <label className= "trigger">

        Location:

        <input

        type="text"

        name="trigger"

        />

        </label>
<button type = "submit">Add</button>
</form>
</div>

    );
  }
}
export default Notification;

