import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class ConsultingTask extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/Routes/api/tasks/consultancyRequested/true")
      .then(res => {
        console.log(res);
        this.setState({
          tasks: res.data.data
        });
      });
  }

  render() {
    const { tasks } = this.state;
    const taskList = tasks.length ? (
      tasks.map(task => {
        return (
          <div className="task card" key={task.title}>
            <div className="task-content">
              <Link to={`task/${task.title}`}>
                {/* //the name as a link  */}
                <span className="task">{task.title}</span>
              </Link>
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
