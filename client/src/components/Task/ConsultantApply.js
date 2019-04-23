import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class ConsultingTask extends Component {
  state = {
    tasks: [],
    consultant: "",
    lifeCycleStatus: "Awaiting Approval",
    consultancyRequested: false
  };
  constructor(props) {
    super(props);
    this.handleApply = this.handleApply.bind(this);
  }

  //${JSON.parse(localStorage.getItem('id'))

  componentDidMount() {
    axios
      .get(
        `http://localhost:3001/Routes/api/users/${JSON.parse(
          localStorage.getItem("id")
        )}`
      )
      .then(res => {
        this.state.consultant.setState(res.data.data);
        console.log(this.state.consultant);
      });

    axios
      .get("http://localhost:3001/Routes/api/tasks/consultancyRequested/true")
      .then(res => {
        this.setState({
          tasks: res.data.data
        });
      });
  }

  handleApply(e) {
    const Task = {
      consultant: this.state.consultant,
      lifeCycleStatus: this.state.lifeCycleStatus,
      consultancyRequested: false
    };
    axios.put("http://localhost:3001/Routes/api/tasks/id", Task).then(res => {
      console.log(Task);
      console.log(res);
      console.log(res.data);
    });
  }

  render() {
    const { tasks } = this.state;
    const taskList = tasks.length ? (
      tasks.map(task => {
        return (
          <div className="task card" key={task.title}>
            <div className="task-content">
              <Link to={`Task/${task._id}`}>{task.title}</Link>
              <div className="right">
                <button style={styleButton} onClick={this.handleApply}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">Loading Tasks List</div>
    );
    return <div className="container">{taskList}</div>;
  }
}

const styleButton = {
  background: "#000",
  color: "white",
  padding: "12px 20px",
  textDecoration: "none",
  float: "right"
};

export default ConsultingTask;
