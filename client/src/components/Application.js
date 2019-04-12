import React, { Component } from "react";
import Header from "./Layout/Header";
import ApplicationInfo from "./ApplicationInfo";
import "./Application.css";
export class Application extends Component {
  render() {
    const { id } = this.props.applicationInfo;

    return (
      //outputs the names , references

      <div style={formFormat}>
        <p>
          <table>
            <tr>
              
            </tr>
          </table>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "#f00",
  color: "#fff",
  padding: "10px",
  borderRadius: "50%",
  float: "right",
  marginBottom: "40px"
};

const formFormat = {
  background: "#4F5AF6",
  padding: "5px 10px",
  borderRadius: "5px",
  borderBottom: "1px",
  margin: "5px",
  marginBottom: "20px"
};

//stays the type of the bigger class


export default Application;
