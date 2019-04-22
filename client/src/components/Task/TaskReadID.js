import React, { Component } from "react";
import axios from "./axiosInstance";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";



class TaskReadID extends Component {
  state = {
    task: []
  };
  componentDidMount() {
    axios.get(`tasks/${this.props.match.params.id}`).then(res => {
      console.log("Response is: ", res);
      this.setState({ task: res.data.data });
      console.log("The state is", this.state);
    });
  }


  render() {
    const { task } = this.state;
    console.log("Task Log Is: ", task);
    const eventJSX =
      task && task._id ? (
        <div className="event card" key={task._id}>
          <div className="card-content">
            <br />
            <br />
            <br />
            Name:
            
            <span className="Task name">{task.title}</span>
            <br />
            Title: {'  '}

            <span className="Task Description">{task.description}</span>
            <br />
            Description: {'  '}

            <span className="Task eta">{task.eta}</span>
            <br />
            eta: {'  '}
            
            <span className="Task levelOfCommitment">{task.levelOfComitment}</span>
            <br />
            level Of Comitment: {'  '}

            <span className="Task partner">{task.partner}</span>
            <br />
            partner: {'  '}
            
            <span className="Task monetaryCompensation">{task.monetaryCompensation}</span>
            <br />
            Monetary Compensation: {'  '}

            <span className="Task skills">{task.skills}</span>
            <br />
            skills: {'  '}

            <span className="Task LifeCycleStatus">{task.lifeCycleStatus}</span>
            <br />
            Life Cycle Status: {'  '}

            <span className="Task experienceNeeded">{task.experienceNeeded}</span>
            <br />
            Experience Needed: {'  '}
            
            <span className="Task consultancyRequested">{task.consultancyRequested}</span>
            <br />
            Consultancy Requested: {'  '}
            
            <span className="Task consultant">{task.consultant}</span>
            <br />
            consultant: {'  '}
            
            <span className="Task applications">{task.applications}</span>
            <br />
            Applications: {'  '}
            
            <br />
            <br />
            
          </div>
        </div>
      ) : (
        <div>Task is loading</div>
      );
    return eventJSX;
  }
}
export default withRouter(TaskReadID);
