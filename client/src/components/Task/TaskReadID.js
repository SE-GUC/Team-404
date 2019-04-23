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
  onDelete = () => {
    axios.delete(`tasks/${this.props.match.params.id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.props.history.push('/Event');
    })
  }


  render() {
    const { task } = this.state;
    console.log("Task Log Is: ", task);
    const taskJSX =
      task && task._id ? (
        <div className="event card" key={task._id}>
          <div className="card-content">
            <br />
            <br />
            <br />
            Title: {'  '}

            <span className="Task name">{task.title}</span>
            <br />
            Description: {'  '}

            <span className="Task Description">{task.description}</span>
            <br />
            eta: {'  '}

            <span className="Task eta">{task.eta}</span>
            <br />
            level Of Comitment: {'  '}

            <span className="Task levelOfCommitment">{task.levelOfCommitment}</span>
            <br />
            partner: {'  '}

            <span className="Task partner">{task.partner}</span>
            <br />
            Monetary Compensation: {'  '}

            <span className="Task monetaryCompensation">{task.monetaryCompensation}</span>
            <br />
            skills: {'  '}

            <span className="Task skills">{task.skills}</span>
            <br />
            Life Cycle Status: {'  '}

            <span className="Task LifeCycleStatus">{task.lifeCycleStatus}</span>
            <br />
            Experience Needed: {'  '}

            <span className="Task experienceNeeded">{task.experienceNeeded}</span>
            <br />
            Consultancy Requested: {'  '}

            <span className="Task consultancyRequested">{task.consultancyRequested}</span>
            <br />
            consultant: {'  '}

            <span className="Task consultant">{task.consultant}</span>
            <br />
            Applications: {'  '}

            <span className="Task applications">{task.applications}</span>
            <br />
            
            <br />
            <br />
            <Link to={`${task._id}/update`}><span STYLE="text-decoration:underline; font-weight:bold">UPDATE</span> </Link>
            <br />


          </div>
        </div>
      ) : (
        <div>Task is loading</div>
      );
    return taskJSX;
  }
}
export default withRouter(TaskReadID);
