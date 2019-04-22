import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";


class ReadTaskID extends Component {
  state = {
    tasks: []
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
    const taskJSX =
      task && task.id ? (
        <div className="task card" key={task.id}>
          <div className="card-content">
            <br />
            <br />
            <br />
            <span className="task candidate">{task.description}</span>
            <br />
            <br />
            <span className="task candidate">{task.eta}</span>
            <br />
            <br />
            <span className="task candidate">{task.levelOfCommitment}</span>
            <br />
            <br />
            <span className="task candidate">{task.partner}</span>
            <br />
            <br />
            <span className="task candidate">{task.monetaryCompensation}</span>
            <br />
            <br />
            <span className="task candidate">{task.skills}</span>
            <br />
            <br />
            <span className="task candidate">{task.lifeCycleStatus}</span>
            <br />
            <br />
            <span className="task candidate">{task.experienceNeeded}</span>
            <br />
            <br />
            <span className="task candidate">{task.consultancyRequested}</span>
            <br />
            <br />
        
            {/* <Link to="/Event/update">UPDATE</Link>
            <br />
            <br /> */}
            {/* <button className="btn btn-primay" onClick={this.onDelete}>Delete</button>
            <br />
            <br /> */}
          </div>
        </div>
      ) : (
        <div>Task you searched for is loading</div>
      );
    return taskJSX;
  }
} 
export default withRouter(ReadTaskID);