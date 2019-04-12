import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import EventPost from "./components/EventPost";
import EventPut from "./components/EventPut";

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1> APP </h1>
       <EventPost/>
       <EventPut/>
      </div>
    );
  }
}

export default App;
