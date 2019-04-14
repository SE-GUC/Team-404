import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class ReadTasks extends Component {
  state = {
    tasks: [],
    applications: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/Routes/api/tasks/").then(res => {
      console.log(res);
      this.setState({
        tasks: res.data.data
      });
    });
  }

  handleApply = e => this.setState({ applications: e.target.value });

  render() {
    const { tasks } = this.state;
    const taskList = tasks.length ? (
      tasks.map(task => {
        return (
          <div className="event card" key={task.title}>
            <div className="card-content">
              <Link to={`task/${task.title}`}>
                {/* //the name as a link  */}
                <span className="event candidate">{task.title}</span>
              </Link>
              <button style={styleButton} onChange={this.handleApply}>
                Apply
              </button>
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
  background: " rgba(110, 3, 3, 0.712)",
  color: "white",
  padding: "12px 20px",
  textDecoration: "none",
  float: "right"
};
export default ReadTasks;
