
import React, { Component } from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';
class Feedback extends Component {
  render() {
    return this.props.feedbacks.map((feedback)=>(
       <FeedbackItem key={feedback.id} feedback ={feedback} deleteFeedback={this.props.deleteFeedback}/>
    ));
  }
}

//PropTypes
Feedback.propTypes = {
    feedbacks : PropTypes.array.isRequired
}
export default Feedback;

