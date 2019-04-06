import React, { Component } from "react";
import "./App.css";
import Application from "./Components/Application";
import Header from "./Components/Layout/Header";
import CandidateInfo from "./Components/CandidateInfo";
//import CandidateInfo from "./Components/CandidateInfo";

class App extends Component {
  state = {
    candidate: [
      {
        id: 1,
        name: "John Wick"
      },
      {
        id: 2,
        name: "Wick John"
      },
      {
        id: 3,
        name: "Jick Whon"
      }
    ]
  };
  /*todos: [
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
*/
  render() {
    console.log(this.state.candidate);
    return (
      <div>
        <div>
          <Header/>
          <CandidateInfo candidateInfo={this.state.candidate} />
        </div>
      </div>
    );
  }
}

export default App;
