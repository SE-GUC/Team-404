import React from 'react';
import Textbox from './User/Textbox';
import axios from 'axios';

/*function checkUserType(userType){
    return userType ==="consultant"
}*/
const textStyle = {
    textAlign: "left",
    padding: "10px",
    fontSize: "5mm"
  };
export default class UserList extends React.Component {
    state = {
        users: [ ]
    }
    componentDidMount(){
       
        axios.get('http://localhost:3001/Routes/api/users/')
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
     {User.name},
     <p></p>
     User ID: {User._id}<p></p>
     User Type : {User.userType} <p></p>
     Email : {User.email}  <p></p>
     Age : {User.age} <p></p>
     Phone Number : {User.phoneNumber}
     </li>)
      
    return( 
         userList
         )
    }

}
