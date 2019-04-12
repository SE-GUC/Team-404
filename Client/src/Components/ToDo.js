import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";

class ToDo extends Component {
  render() {
    return this.props.todo.map(todooo => (
      <ToDoItem key={todooo.id} todo={todooo} delTodo = {this.props.delTodo} markComplete = {this.props.markComplete} />
    ));
  }
}

ToDo.propTypes = {
    todo:PropTypes.array.isRequired
}


export default ToDo;
