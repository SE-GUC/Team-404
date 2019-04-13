import React, { Component } from "react";
import axios from "axios";
// import Collapsible from "react-collapsible";

class addTask extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      description: "",
      eta: "",
      levelOfCommitment: "",
      partner: "",
      monetaryCompensation: "",
      skills: "",
      lifeCycleStatus: "",
      experiencNeeded: "",
      consultancyRequested: false,
      consultant: "",
      applications: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/Routes/api/tasks/")
      .then(res => {
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const task = {
      description: this.state.description,
      eta: this.state.eta,
      levelOfCommitment: this.state.levelOfCommitment,
      partner: this.state.partner,
      monetaryCompensation: this.state.monetaryCompensation,
      skills: this.state.skills,
      lifeCycleStatus: this.state.lifeCycleStatus,
      experiencNeeded: this.state.experiencNeeded,
      consultancyRequested: this.state.consultancyRequested,
      consultant: this.state.consultant,
      applications: this.state.applications
    };
    console.log(task);
    try {
      let response = await axios.post(
        "http://localhost:3001/Routes/api/tasks/",
        task
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  handleChangeDescription = e => this.setState({ description: e.target.value });
  handleChangeEta = e => this.setState({ eta: e.target.value });
  handleChangeLevelofcommitment = e =>
    this.setState({ levelOfCommitment: e.target.value });
  handleChangePartner = e => this.setState({ partner: e.target.value });
  handleChangeMonetarycompensation = e =>
    this.setState({ monetaryCompensation: e.target.value });
  handleChangeSkills = e => this.setState({ skills: e.target.value });
  handleChangeLifecyclestatus = e =>
    this.setState({ lifeCycleStatus: e.target.value });
  handleChangeExperienceneeed = e =>
    this.setState({ experiencNeeded: e.target.value });
  handleChangeConsultancy = e =>
    this.setState({ consultancyRequested: e.target.value });

  render() {
    return (
      <div>
        {/* <Collapsible trigger="Create new task"> */}
        <br />
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Description
            <input
              type="text"
              name="Description"
              onChange={this.handleChangeDescription}
            />
          </label>
          <br />
          <br />
          <label>
            Eta
            <input type="text" name="eta" onChange={this.handleChangeEta} />
          </label>
          <br />
          <br />
          <label>
            Level of Commitment
            <input
              type="text"
              name="levelofcommitment"
              onChange={this.handleChangeLevelofcommitment}
            />
          </label>
          <br />
          <br />
          <label>
            Partner
            <input
              type="text"
              name="partner"
              onChange={this.handleChangePartner}
            />
          </label>
          <br />
          <br />
          <label>
            Monetary Compensation
            <input
              type="text"
              name="monetarycompensation"
              onChange={this.handleChangeMonetarycompensation}
            />
          </label>
          <br />
          <br />
          <label>
            Skills
            <input
              type="text"
              name="skills"
              onChange={this.handleChangeSkills}
            />
          </label>
          <br />
          <br />
          <label>
            Life Cycle Status
            <input
              type="text"
              name="lifecyclestatus"
              onChange={this.handleChangeLifecyclestatus}
            />
          </label>
          <br />
          <br />
          <label>
            Experience Needed
            <input
              type="text"
              name="experienceneeded"
              onChange={this.handleChangeExperienceneeed}
            />
          </label>
          <br />
          <br />
          <label>
            Consultancy {"  "}
            <input
              type="radio"
              name="consultancy"
              value="No"
              checked
              onChange={this.handleChangeConsultancy}
            />{" "}
            No {"  "}
           <input
            type="radio"
            name="consultancy"
            value="Yes"
            checked
            onChange={this.handleChangeConsultancy}
          />{" "}
          Yes <br />

          </label>
          <br />
          <button type="submit">Add</button>
        </form>
        {/* </Collapsible> */}
      </div>
    );
  }
}
export default addTask;
