import React, { Component } from "react";
import "./App.css";
import Application from "./Components/Application";
import Header from "./Components/Layout/Header";
import ApplicationInfo from "./Components/ApplicationInfo";
//import TaskInfo from "./Components/TaskInfo";
//import Task from "./Components/TaskInfo";

class App extends Component {
  state = {
    application: [
      {
        id: 1,
        candidate: "asd",
        partner: "asdasd",
        datetime: "qqq",
        status: "333",
        task: [
          {
            Description: "{ type: String, required: true }",
            eta: "{ type: Number, required: true }",
            levelofcommitment:
              "{ type: String, required: true, unique: false }",
            monetarycompensation: "{ type: Number, required: true }",
            skills: "{ type: String, required: true }",
            lifecyclestatus: "{ type: String, required: true }",
            experienceneeded: "{ type: String, required: true }",
            consultancy: "{ type: String, required: true }"
          }
        ]
      },
      {
        id: 2,
        candidate: "asd",
        partner: "asdasd",
        datetime: "qqq",
        task: [
          {
            Description: "{ type: String, required: true }",
            eta: "{ type: Number, required: true }",
            levelofcommitment:
              "{ type: String, required: true, unique: false }",
            monetarycompensation: "{ type: Number, required: true }",
            skills: "{ type: String, required: true }",
            lifecyclestatus: "{ type: String, required: true }",
            experienceneeded: "{ type: String, required: true }",
            consultancy: "{ type: String, required: true }"
          }
        ],
        status: "333"
      }
    ],

    //canddiate should have name and stuff like that , user data..
    candidate: [],
    partner: [],
    task: [
      {
        Description: "{ type: String, required: true }",
        eta: "{ type: Number, required: true }",
        levelofcommitment: "{ type: String, required: true, unique: false }",
        partner: "{ type: String, required: true }",
        monetarycompensation: "{ type: Number, required: true }",
        skills: "{ type: String, required: true }",
        lifecyclestatus: "{ type: String, required: true }",
        experienceneeded: "{ type: String, required: true }",
        consultancy: "{ type: String, required: true }"
      },
      {
        Description: "{ type: String, required: true }",
        eta: "{ type: Number, required: true }",
        levelofcommitment: "{ type: String, required: true, unique: false }",
        partner: "{ type: String, required: true }",
        monetarycompensation: "{ type: Number, required: true }",
        skills: "{ type: String, required: true }",
        lifecyclestatus: "{ type: String, required: true }",
        experienceneeded: "{ type: String, required: true }",
        consultancy: "{ type: String, required: true }"
      }
    ]
  };

  /* application information
  attempt to put each information in an array and display all of em
  supposed to display the skills required only in task not from candidate
*/

  componentDidMount() {
    fetch("http://localhost:3000/api/Applications")
      .then(partner => partner.json())
      .then(res => this.setState({ partner: res.partner }));
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
