
import React from "react";
import TaskHeader from "../../Layout/TaskHeader";
import ReadTasks from "../../Task/ReadTask";

function Tasks() {
  return (
    <React.Fragment>
      <TaskHeader/>
      <ReadTasks/>
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


