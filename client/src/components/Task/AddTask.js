import React, { Component } from "react";
import axios from "axios";
// import Collapsible from "react-collapsible";

class AddTask extends Component {
  state = {
    description: "",
    eta: "",
    levelOfCommitment: "",
    partner: "",
    monetaryCompensation: "",
    skills: [],
    lifeCycleStatus: "Awaiting Approval",
    experienceNeeded: "",
    consultancyRequested: true,
    consultant: "",
    applications: [],
    tags: []
  };
  constructor(props, context) {
    super(props, context);
    this.handleChangeSkills = this.handleChangeSkills.bind(this);
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
      consultancyRequested: this.state.consultancyRequested,
      lifeCycleStatus: this.state.lifeCycleStatus,
      experienceNeeded: this.state.experienceNeeded,
      consultant: this.state.consultant,
      applications: this.state.applications,
      tags: this.state.skills
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

  handleChangeSkills(e) {
    var options = e.target.options;
    console.log(options);
    this.state.skills = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        console.log(options[i].selected);

        this.state.skills.push(options[i].value);
      }
    }
    console.log(this.state.skills);
  }

  handleChangeDescription = e => this.setState({ description: e.target.value });
  handleChangeEta = e => this.setState({ eta: e.target.value });
  handleChangeLevelofcommitment = e =>
    this.setState({ levelOfCommitment: e.target.value });
  handleChangePartner = e => this.setState({ partner: e.target.value });
  handleChangeMonetarycompensation = e =>
    this.setState({ monetaryCompensation: e.target.value });
  handleChangeExperienceneeed = e =>
    this.setState({ experienceNeeded: e.target.value });

  handleChangeConsultancy = e => {
    if (e.target.id == "yesRadio") {
      this.setState({ consultancyRequested: true });
      this.setState({ lifeCycleStatus: "Awaiting Consultant" });
    } else {
      this.setState({ consultancyRequested: false });
      this.setState({ lifeCycleStatus: "Awaiting Approval" });
    }
  };

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
            <select
              multiple={true}
              skills={this.state.skills}
              onChange={this.handleChangeSkills}
            >
              <option value="CS">CS</option>
              <option value="Design">Design</option>
              <option value="Word">Word</option>
              <option value="Civil">Civil</option>
              <option value="Accounting">Accounting</option>
            </select>
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
              id="noRadio"
              // value={false}
              onChange={this.handleChangeConsultancy}
            />{" "}
            No {"  "}
            <input
              type="radio"
              name="consultancy"
              id="yesRadio"
              // value={true}
              onChange={this.handleChangeConsultancy}
            />{" "}
            Yes <br />
          </label>

          <br />

          <br />
          <button type="submit">Add</button>
        </form>
        {/* </Collapsible> */}
      </div>
    );
  }
}
export default AddTask;
