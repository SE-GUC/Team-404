import React from 'react';
import axios from 'axios';

const textStyle = {
    textAlign: "left",
    padding: "10px",
    fontSize: "3.75mm"
}



export default class UserList extends React.Component {
    state = {
        users: [ ],

    }
    componentDidMount(){
       
        axios.get('http://localhost:3001/Routes/api/users')
        .then(res => {
            console.log(res)
            this.setState({
                users: res.data.data
            })
        })

    }

    
  render() {
    const userList = this.state.users.map((User, index) =>
        <li  style ={textStyle} key ={index}>
            {User.name}
            <p></p> 
            User Type : {User.userType}
            <p></p> 
            Email : {User.email}  
            <p></p>
            Age : {User.age}
            <p></p> 
            Phone Number : {User.phoneNumber}
            <p></p>
            Location : {User.location}
            <p></p>
            Skills : {User.skills}
            <p></p>
            Interests : {User.Interests}
            <p></p>
            Past Events & Tasks : {User.pastEventsAndTasks}
            <p></p>
            Reviews Recieved : {User.reviewsRecieved}
            <p></p>
            Board : {User.board}
            <p></p>
            Reports : {User.Reports}
            <p></p>
            Organisation Name : {User.organisationName}
            <p></p>
            Business Partners : {User.businessPartners}
            <p></p>
            Events Organized : {User.eventsOrganized}
            <p></p>
            Field of Work : {User.fieldOfWork}
            <p></p>
            Project History : {User.projectHistory}
        </li>
    )    
    return( 
         userList
         )  
    }

}