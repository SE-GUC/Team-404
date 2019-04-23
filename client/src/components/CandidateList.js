import React from 'react';
import axios from 'axios';

const textStyle = {
    textAlign: "left",
    padding: "10px",
    fontSize: "3.75mm"
}



export default class CandidateList extends React.Component {
    state = {
        candidates: [ ],

    }
    componentDidMount(){
       
        axios.get('http://localhost:3001/Routes/api/users/candidates')
        .then(res => {
            console.log(res)
            this.setState({
                candidates: res.data.data
            })
        })

    }

    
  render() {
    const candidateList = this.state.candidates.map((User, index) =>
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
            Skills : {User.skills}
            <p></p>
            Interests : {User.interests}
            <p></p>
            Past Events & Tasks : {User.pastEventsAndTasks}
            <p></p>
            Reviews Recieved : {User.reviewsRecieved}
        </li>
    )    
    return( 
         candidateList
         )  
    }

}