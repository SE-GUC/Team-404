import React from 'react'
import TaskHeader from '../../Layout/TaskHeader'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function ConsultingTasks () {
  return (
    <React.Fragment>
      <TaskHeader />

    </React.Fragment>
  )
}

// this is gonna hold the tasks that are yes on consultancy and will then be available for admin review
// need to make another view for the tasks that are accepted cuz atm we're showing all tasks w 5alas
export default ConsultingTasks
