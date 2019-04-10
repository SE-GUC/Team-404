import React, { Component } from 'react';
import Header from './components/layout/Header';
import Feedback from './components/Feedback';
import AddFeedback from './components/AddFeedback';
import './App.css';
import uuid, { v4 } from 'uuid';

class App extends Component {
state = {
    feedbacks: [
        {
            id: uuid.v4(),
            event:'dummydata' ,
            response :'dummydata',
            name :'dummydata' ,
        },
        {
            id: uuid.v4(),
            event:'dummydata' ,
            response :'dummydata',
            name :'dummydata' ,
        },
        {
            id: uuid.v4(),
            event:'dummydata' ,
            response :'dummydata',
            name :'dummydata' ,
        }
        
    ]
}
// add feedback
addFeedback = (name) => {
  const newFeedback = 
  {
    id:uuid.v4(),
    name,
    
  }
  this.setState({feedbacks:[...this.state.feedbacks,newFeedback] });
}
  render() {
      console.log(this.state.feedbacks)
    return (
      <div className="App">
      
      <div className ="container">
      <Header />
      <AddFeedback addFeedback={this.addFeedback}/>
    <Feedback feedbacks={this.state.feedbacks}/>
      </div>
      </div>
    );
  }
}

export default App;
