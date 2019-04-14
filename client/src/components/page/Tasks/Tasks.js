
import React from "react";
import AddTaskPage from "./AddTask";
import { Link } from "react-router-dom";
import TaskHeader from "../../Layout/TaskHeader";
import AddTask from "../../Task/AddTask";

function Tasks() {
  return (
    <React.Fragment>
      <TaskHeader/>
    </React.Fragment>
  );
}
const headerStyle = {
  //  background : '#333',
  color: "#fff",
  textAlign: " center",
  padding: "5px",
  borderRadius: "5px"
};

const linkStyle = {
  color: "#000",
  textDecoration: "none"
};
export default Tasks;


