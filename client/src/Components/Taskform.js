import React, { Component } from './node_modules/react';
import Taskitem from './Taskitem'

class Taskform extends Component {
  render() {
    return this.props.taskform.map( (taskform) => (
< Taskitem key={taskform.id} taskform={taskform} />      

     

    ));
  }
}

export default  Taskform;
