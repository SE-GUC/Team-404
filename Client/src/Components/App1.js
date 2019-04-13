import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PartnerHeader from './PartnerHeader';
//import Search from './components/Search';
//import Partner from './components/Partner';
//import Table from './components/Table';
import PartnerPage from './components/PartnerPage';


class App extends Component {
  state = {
    partner : [
      {
      id : 1,
      organisationname: 'p1-OrganisationName',
      partners:'p1-Partners',
      boardmembers: 'p1-BoardMembers',
      eventsorganized:'p1-EventsOrganized',
      fieldofwork: 'p1-FieldOfWork',
      projecthistory:'p1-ProjectHistory',
      feedbackform: 'p1-FeedBackForm'
      },
      {
        id : 2,
        organisationname: 'p2-OrganisationName',
        partners:'p2-Partners',
        boardmembers: 'p2-BoardMembers',
        eventsorganized:'p2-EventsOrganized',
        fieldofwork: 'p2-FieldOfWork',
        projecthistory:'p2-ProjectHistory',
        feedbackform: 'p2-FeedBackForm'
        },
        {
          id : 3,
          organisationname: 'p3-OrganisationName',
          partners:'p3-Partners',
          boardmembers: 'p3-BoardMembers',
          eventsorganized:'p3-EventsOrganized',
          fieldofwork: 'p3-FieldOfWork',
          projecthistory:'p-3ProjectHistory',
          feedbackform: 'p-3FeedBackForm'
          }
    ]
  }
 
  render() {
    return (
      <Router>
        <div className="App" /*style = {this.getStyle()}*/>
          <div className="container">
            <Route exact path="/" render={props => (
              <React.Fragment>
                <PartnerHeader/>
                <p style ={textStyle}>Welcome To Lirten Hub</p>
              </React.Fragment>
            )}/>
            <Route path="/page" component={PartnerPage}/>
          </div>
        </div>
      </Router>
    );
  }
}
const textStyle ={
  textAlign: 'left',
  padding: '10px',
  fontSize: '5mm'

}

console.log('This is a simple display of viewing the Partner entity by using dummy data, as well as a basic homepage.')
export default App;
