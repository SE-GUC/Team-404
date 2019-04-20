import React from 'react'
import DeleteTask from '../../Task/DeleteTask'
import TaskHeader from '../../Layout/TaskHeader'

function DeleteTasks () {
  return (
    <React.Fragment>
      <TaskHeader />
      <DeleteTask />
    </React.Fragment>
  )
}

export default DeleteTasks
