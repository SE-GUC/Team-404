import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class TaskCreate extends React.Component {
  state = {
    title: "",
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
    applicants: [],
    tags: []
  };

  constructor(props, context) {
    super(props, context);
    this.handleChangeSkills = this.handleChangeSkills.bind(this);
  }

  handleSubmit = async task => {
    task.preventDefault();
    console.log(`The state is : ${this.state}`);
    const Task = {
      title: this.state.title,
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

    if (this.state.consultancyRequested) {
    }
    try {
      let response = await axios.post(
        "http://localhost:3001/Routes/api/tasks/",
        Task
      );
      console.log(response);
      this.props.history.push("/Task");
    } catch (error) {
      console.log(error);
    }
  };

  handleChangeSkills(e) {
    var options = e.target.options;
    this.state.skills = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        this.state.skills.push(options[i].value);
      }
    }
  }
  handleChangeTitle = e => this.setState({ title: e.target.value });
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
      <form onSubmit={this.handelSubmit}>
        <h1>Create a Task</h1>
        <label> Task details : </label>
        <br />
        <label className="Title">
          Title
          <input type="text" name="title" onChange={this.handleChangeTitle} />
        </label>
        <br />
        <label className="Description">
          Description:
          <input
            type="text"
            name="description"
            onChange={this.handleChangeDescription}
          />
        </label>
        <br />

        <label className="Eta">
          Eta:
          <input type="text" name="eta" onChange={this.handleChangeEta} />
        </label>
        <br />

        <label className="Level of Commitment">
        Level of Commitment:
          <input
            type="text"
            name="levelOfCommitment"
            onChange={this.handleChangeLevelofcommitment}
          />
        </label>
        <br />

        <label className="Partner">
          Partner:
          <input
            type="text"
            name="partner"
            onChange={this.handleChangePartner}
          />
        </label>
        <br />

        <label className="MonetaryCompensation">
          Monetary Compensation:
          <input
            type="text"
            name="monetaryCompensation"
            onChange={this.handleChangeMonetarycompensation}
          />
        </label>
        <br />
        <label className="Skills">
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
        <label className="experienceNeeded">
          Experience Needed:
          <input
            type="text"
            name="experienceNeeded"
            onChange={this.handleChangeExperienceneeed}
          />
        </label>
        <br />
        <label className="Consultancy">
          Consultancy
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

        <button type="submit" onClick={this.handleSubmit}>
          {" "}
          CREATE{" "}
        </button>
      </form>
    );
  }
}

export default withRouter(TaskCreate);
