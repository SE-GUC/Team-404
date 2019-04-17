import React from "react";
import AddTask from "../../Task/AddTask";
import TaskHeader from "../../Layout/TaskHeader";

function AddTaskPage() {
  return (
    <React.Fragment>
      <TaskHeader />
      <AddTask />
    </React.Fragment>
  );
}

export default AddTaskPage;
