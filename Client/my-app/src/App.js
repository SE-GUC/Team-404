import React, { Component } from "react";
import "./App.css";
import Application from "./Components/Application";
import Header from "./Components/Layout/Header";
import ApplicationInfo from "./Components/ApplicationInfo";

class App extends Component {
  state = {
    application: []
      /*{
        skills: null,
        interests: null,
        pasteventsandtasks: null,
        reviewsrecieved: null
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
  }; */
    
  };

  getDataFromDb = () => {
    fetch("http://localhost:3001/api/Applications")
      .then(application => application.json())
      .then(res => this.setState({ application: res.application }));
  }
  /*
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
*/

  delApplication = id => {
    this.setState({
      application: [
        ...this.state.application.filter(application => application.id !== id)
      ]
    });
  };

  render() {
    console.log(this.state.application);
    return (
      <div>
        <div style={together}>
          <Header />
          <ApplicationInfo
            applicationInfo={this.state.application}
            delApplication={this.delApplication}
          />
        </div>
      </div>
    );
  }
}

const together = {
  border: "10px",
  borderRadius: "10px",
  background: "#9D9FB9",
  margin: "auto",
  paddingBottom: "1px"
};

export default App;
