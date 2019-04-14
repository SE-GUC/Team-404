import React, { Component } from "react";
import Taskitem from "./Taskitem";
import Axios from "axios";
import PropTypes from "prop-types";
class Taskform extends Component {
  state = {
    taskform: []
  };
  componentDidMount = () => {
    Axios.get("http://localhost:3001/Routes/api/tasks/")
      .then(res => {
        this.setState({ taskform: res.data });
        console.log(res)
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return this.props.taskform.map(taskform => (
      <Taskitem key={taskform.id} taskform={taskform} />
    ));
  }
}
Taskform.propTypes = {
  taskform: PropTypes.array.isRequired
};
export default Taskform;
