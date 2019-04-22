import React from "react";
import axios from "axios";

class UpdateTask extends React.Component {
  state = {
    //id: "",
    title: "",
    description: "",
    eta: 1,
    levelOfCommitment: "",
    partner: "",
    monetaryCompensation: 2,
    skills: "",
    lifeCycleStatus: "",
    experienceNeeded: "",
    consultancyRequested: false,
    consultant: "",
    applications: [""]
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  componentDidMount() {
    axios.get("http://localhost:3001/Routes/api/tasks/id").then(res => {
      this.setState(res.data.data);
      console.log(res.data.data)
    });
  }

  handleChangeTitle = task => {
    this.setState({ title: task.target.value });
  };

  handleChangeDescription = task => {
    this.setState({ description: task.target.value });
  };

  handleChangeEta = task => {
    this.setState({ eta: task.target.value });
  };

  handleChangeLevelOfCommitment = task => {
    this.setState({ levelOfCommitment: task.target.value });
  };

  handleChangePartner = task => {
    this.setState({ partner: task.target.value });
  };

  handleChangeMonetaryCompensation = task => {
    this.setState({ monetaryCompensation: task.target.value });
  };

  handleChangeSkills = task => {
    this.setState({ skills: task.target.value });
  };

  handleChangeLifeCycleStatus = task => {
    this.setState({ lifeCycleStatus: task.target.value });
  };

  handleChangeExperienceNeeded = task => {
    this.setState({ experienceNeeded: task.target.value });
  };

  handleConsultancyRequested = task => {
    this.setState({ consultancyRequested: task.target.value });
  };

  handleChangeConsultant = task => {
    this.setState({ consultant: task.target.value });
  };

  handleChangeApplications = task => {
    this.setState({ applications: task.target.value });
  };

  handleSubmit = task => {
    task.preventDefault();
 
    const Task = {
      //id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      eta: this.state.eta,
      levelOfCommitment: this.state.levelOfCommitment,
      partner: this.state.partner,
      monetaryCompensation: this.state.monetaryCompensation,
      skills: this.state.skills,
      lifeCycleStatus: this.state.lifeCycleStatus,
      experienceNeeded: this.state.experienceNeeded,
      consultancyRequested: this.state.consultancyRequested,
      consultant: this.state.consultant,
      applications: this.state.applications
    };

    axios.put("http://localhost:3001/api/tasks/id", { Task }).then(res => {
      console.log(res);
      console.log(res.data);
    });

    try {
      let response = axios
        .put("http://localhost:3000/Routes/api/tasks/${tasks._id}", Task)
        .then(res => {
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(Task)
  //sessionStorage.setItem("id", this.state.id);
  //let id = sessionStorage.getItem("id");

  //axios.put(`http://localhost:3001/Routes/api/tasks/` + id, Task).then(res => {
  // console.log(res);
  // console.log(res.data);
  // });
  //};

  render() {
    return (
      <form>
        <br />
        <br />
        <br />
        <label className="Title">
          Title:
          <input
            type="text"
            name="Title"
            value={this.state.title}
            onChange={this.handleChangeTitle}
          />
        </label>
        <br />
        <label className="Description">
          Description:
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChangeDescription}
          />
        </label>
        <br />
        <label className="Eta">
          Eta:
          <input
            type="text"
            name="eta"
            value={this.state.eta}
            onChange={this.handleChangeEta}
          />
        </label>
        <br />
        <label className="LevelOfCommitment">
          LevelOfCommitment:
          <input
            type="text"
            name="levelOfCommitment"
            value={this.state.levelOfCommitment}
            onChange={this.handleChangeLevelOfCommitment}
          />
        </label>{" "}
        <br />
        <label className="Partner">
          Partner:
          <input
            type="text"
            name="partner"
            value={this.state.partner}
            onChange={this.handleChangePartner}
          />
        </label>{" "}
        <br />
        <label className="MonetaryCompensation">
          MonetaryCompensation:
          <input
            type="text"
            name="monetaryCompensation"
            value={this.state.monetaryCompensation}
            onChange={this.handleChangeMonetaryCompensation}
          />
        </label>{" "}
        <br />
        <label className="Skills">
          skills:
          <input
            type="text"
            name="skills"
            value={this.state.skills}
            onChange={this.handleChangeSkills}
          />
        </label>{" "}
        <br />
        <label className="LifeCycleStatus">
          LifeCycleStatus:
          <input
            type="text"
            name="lifeCycleStatus"
            value={this.state.lifeCycleStatus}
            onChange={this.handleChangeLifeCycleStatus}
          />
        </label>{" "}
        <br />
        <label className="ExperienceNeeded">
          ExperienceNeeded:
          <input
            type="text"
            name="experienceNeeded"
            value={this.state.experienceNeeded}
            onChange={this.handleChangeExperienceNeeded}
          />
        </label>{" "}
        <br />
        <label className="ConsultancyRequested">
          Con:
          <input
            type="text"
            name="consultancyRequested"
            value={this.state.consultancyRequested}
            onChange={this.handleConsultancyRequested}
          />
        </label>{" "}
        <br />
        <label className="Consultant">
          Consultant:
          <input
            type="text"
            name="consultant"
            value={this.state.consultant}
            onChange={this.handleChangeConsultant}
          />
        </label>{" "}
        <br />
        <label className="Applications">
          Applications:
          <input
            type="text"
            name="appications"
            value={this.state.applications}
            onChange={this.handleChangeApplications}
          />
        </label>{" "}
        <br />
        <button type="button" onClick={this.handleSubmit}>
          {" "}
          Change{" "}
        </button>
      </form>
    );
  }
}

export default UpdateTask;
