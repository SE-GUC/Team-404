import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class TaskRead extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/Routes/api/tasks/").then(res => {
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
          <div className="event card" key={task.title}>
            <div className="card-content">
              <Link to= {`task/${task._id}`}>
              {task.title}
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">are being retrieved...</div>
    );
    return <div className="container">{taskList}</div>;
  }
}
export default TaskRead;
