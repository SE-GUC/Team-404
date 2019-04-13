import React, { Component } from "react";
import axios from "axios";


class Consultant extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: "",
      email: "",
      password: "",
      board: "",
      pastEvents: "",
      reports:  "",
    };
  }

  handleChangeName = consultant => {
    this.setConsultant({ name: consultant.target.value });
  };

  handleChangeEmail = consultant => {
    this.setConsultant({ email: consultant.target.value });
  };

  handleChangePassword = consultant => {
    this.setConsultant({ password: consultant.target.value });
  };

  handleChangeBoard = consultant => {
    this.setConsultant({ board: consultant.target.value });
  };

  handleChangePastEvents = consultant => {
    this.setConsultant({ pastEvents: consultant.target.value });
  };

  handleChangeReports = consultant => {
    this.setConsultant({ reports: consultant.target.value });
  };


  handeleSubmit = async consultant => {
    consultant.prConsultantDefault();

    const consultants = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      board: this.state.board,
      pastEvents: this.state.pastEvents,
      reports: this.state.reports
     };
    console.log(consultants);
    try {
      let response= await axios.post("http://localhost:3000/api/consultants/", consultant);
      console.log(response);
    } 
    catch(error) {
      console.log(error);
    }
  };
  
  render(){
      return(
          <div className= "consultant">
          <h1> consultants </h1>
          <form onSubmit={this.handleSubmit}>
        <label className= "Name">
            Name:
            <input
            type="text"
            name="name"
            />
        </label>
        <label className= "Email">
            Email:
            <input
            type="text"
            name="email"
            />
        </label>
        <label className= "Password">
            RemainingPlaces:
            <input
            type="text"
            name="Password"
            />
        </label>
        <label className= "Board">
            Board:
            <input
            type="text"
            name="Board"
            />
        </label>
        <label className= "Past Events">
            PastEvents:
            <input
            type="text"
            name="Past Events"
            />
        </label>
        <label className= "Reports">
            Reports:
            <input
            type="text"
            name="Reports"
            />
        </label>
        <button type = "submit"> Create consultant </button>
        </form>
       
        </div>
    );
  }
}
export default Consultant;
