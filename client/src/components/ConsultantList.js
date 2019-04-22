import React from 'react';
import axios from 'axios';

const textStyle = {
    textAlign: "left",
    padding: "10px",
    fontSize: "3.75mm"
}



export default class ConsultantList extends React.Component {
    state = {
        consultants: [ ],

    }
    componentDidMount(){
       
        axios.get('http://localhost:3001/Routes/api/users/consultants')
        .then(res => {
            console.log(res)
            this.setState({
                consultants: res.data.data
            })
        })

    }

    
  render() {
    const consultantList = this.state.consultants.map((User, index) =>
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
            Reports : {User.reports}
            <p></p>
            Board : {User.board}
        </li>
    )    
    return( 
         consultantList
         )  
    }

}