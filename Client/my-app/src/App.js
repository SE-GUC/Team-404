import React, { Component } from "react";
import "./App.css";
import Todo from "./Components/ToDo";
import Header from './Components/Layout/Header';
import AddTodo  from "./Components/AddTodo";
 

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "do it ",
        completed: true
      },
      {
        id: 3,
        title: "be a man",
        completed: false
      }
    ]
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = (id) => {
    this.setState({todos:[...this.state.todos.filter(todo => todo.id !==id)]})
  }

  render() {
    return (
      <div className="App">
      <Header/>
      <AddTodo/>
        <Todo todo={this.state.todos} delTodo = {this.delTodo} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
