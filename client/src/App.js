import React, { Component } from 'react';
import './App.css';
import './components/Textbox.css';
import Login from './components/Login';

class App extends Component {

  render() {
    return (
      <div className="App" id='background2'>
      <Login/>
      </div>
    );
  }
}

export default App;
