import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import task from './Components/tasks'
import Tasks from './Components/tasks';
class App extends Component {
  render() {
    return ( 
      <Tasks/>
      //Call hena el task component
    );
  }
}

export default App;
