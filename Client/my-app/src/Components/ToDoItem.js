import React, { Component } from "react";
import PropTypes from "prop-types";

export class ToDoItem extends Component {
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        borderBottom: "1px #ccc dotted",
        padding: "10px",
        textDecoration: this.props.todo.completed ? "line-through" : "none"
      };
    }
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  background: "#f00",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "50%",
  float: "right"
};

export default ToDoItem;
