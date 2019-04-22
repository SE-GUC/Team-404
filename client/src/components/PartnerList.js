import React from 'react';
import axios from 'axios';

const textStyle = {
    textAlign: "left",
    padding: "10px",
    fontSize: "3.75mm"
}



export default class PartnerList extends React.Component {
    state = {
        partners: [ ],

    }
    componentDidMount(){
       
        axios.get('http://localhost:3001/Routes/api/users/partners')
        .then(res => {
            console.log(res)
            this.setState({
                partners: res.data.data
            })
        })

    }

    
  render() {
    const partnerList = this.state.partners.map((User, index) =>
        <li  style ={textStyle} key ={index}>
            {User.name}
            <p></p> 
            Email : {User.email}  
            <p></p>
            Age : {User.age}
            <p></p> 
            Phone Number : {User.phoneNumber}
            <p></p>
            Location : {User.location}
            <p></p>
            Past Events : {User.pastEvents}
            <p></p>
            Field of Work : {User.fieldOfWork}
            <p></p>
            Organisation Name : {User.organisationName}
            <p></p>
            Business Partners : {User.businessPartners}
            <p></p>
            Events Organized : {User.eventsOrganized}
            <p></p>
            Project History : {User.projectHistory}
        </li>
    )    
    return( 
         partnerList
         )  
    }

}