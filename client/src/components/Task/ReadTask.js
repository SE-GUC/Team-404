import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class ReadTasks extends Component {
  state = {
    tasks: [],
    applications: [
      {
        candidate: "",
        status: "Awaiting Acceptance",
        date: Date.now()
      }
    ]
  };

  componentDidMount() {
    axios.get("http://localhost:3001/Routes/api/tasks/").then(res => {
      this.setState({
        tasks: res.data.data
      });
    });
  }

  //supposed to get the id of the task and set its application to the application state here
  // as well as use the candidate id gotten from session
  //for now using a temp candidate id as well as manual task id
  // this is a put not post... check if theres a put working with anyone else
  // there should be another one like this for when consultants apply when consultants requested
  /*handleSubmit = async event => {
    event.preventDefault();

    const application = {
      applications: this.state.applications,
    };

    console.log(application);
    try {
      let response = await axios.put(
        "http://localhost:3001/Routes/api/tasks/:id",
        application
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

*/

  // handleApply = e => this.setState({ applications: e.target.value });

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
              <button style={styleButton} onClick={this.handleApply}>
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
