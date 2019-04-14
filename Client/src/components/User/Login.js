import React, { Component } from 'react';
import Textbox from './Textbox';
import "./Textbox.css";
class Login extends Component {    
  render() {
    return (
      <div id="background2">
       <h1>Login page</h1>

       <Textbox/>
      </div>
    );
  }
}
export default Login;
