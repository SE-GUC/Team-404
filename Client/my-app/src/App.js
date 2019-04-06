import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Textbox from './components/Textbox';
class App extends Component {

  render() {
    return (
      <div className="App">
      <Login/>
      </div>
    );
  }
}

export default App;
