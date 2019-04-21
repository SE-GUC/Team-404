
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class FeedbackItem extends Component {
  render() {
      const {title} = this.props.feedback;
    return (
      <div >
        <p>
       
        { this.props.feedback.name }
        {title}
        <button style={btnStyle}> x</button>
        </p>
      </div>
    )
  }
}

//PropTypes
FeedbackItem.propTypes = {
    feedback : PropTypes.object.isRequired
}

const btnStyle ={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    paddings:'20px 30px',
    borderRadius: '50%',
    cursor:'pointer',
    float:'right'
}

export default FeedbackItem
