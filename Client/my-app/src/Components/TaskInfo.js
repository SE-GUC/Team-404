import React, { Component } from "react";
import PropTypes from "prop-types";
import Task from "./Task";

export class TaskInfo extends Component {
  render() {
    return this.props.taskInfo.map(taskInfo => (
      <Task
        key={taskInfo.id}
        taskInfo={taskInfo}
        
      />
    ));
  }
}
TaskInfo.propTypes = {
  TaskInfo: PropTypes.array.isRequired
};
export default TaskInfo;
