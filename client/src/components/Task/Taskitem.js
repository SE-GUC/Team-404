import React, { Component } from 'react'
class Taskitem extends Component {
  render () {
    return (
      <div>
        <p>
          {this.props.taskform.id} . Description:{' '}
          {this.props.taskform.description}{' '}
        </p>
        <p> Eta: {this.props.taskform.eta} </p>
        <p> Skills Required: {this.props.taskform.skills} </p>
        <p> Level Of Committement: {this.props.taskform.levelofcommitment} </p>
        <p> Partner: {this.props.taskform.partner} </p>
        <p>Monetary Compensation: {this.props.taskform.monetarycompensation}</p>
        <p> Consultant: {this.props.taskform.consultancy} </p>
        <p> Lifecycle Status: {this.props.taskform.lifecyclestatus} </p>

        <p> . </p>
        <p> . </p>
        <p> . </p>
      </div>
    )
  }
}

export default Taskitem
