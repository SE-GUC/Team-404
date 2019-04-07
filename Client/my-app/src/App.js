import React, { Component } from "../node_modules/react";
import "./App.css";
import Notifications from "./components/Notifications";
import axios from "axios";

class App extends Component {
  state = {
    Notifications: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/notifications")
      .then(res => {
        // window.print(err)
        this.setState({ Notifications: res.data.data });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>
          <Notifications notifications={this.state.Notifications} />
        </h1>
      </div>
    );
  }
}

export default App;
