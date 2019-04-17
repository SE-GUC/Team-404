import React, { Component } from "react";
import axios from  "./axiosInstance";
import User from "./page/User";

class getUser extends Component {
    state = {
        users: [ ]
    }
    componentDidMount(){
       
        axios.get('http://localhost:3001/api/users/')
        .then(res => {
            console.log(res)
            this.setState({
                users: res.data.data
            })
        })
    }
render(){
const { users } = this.state;
const userList = users.length ? (
    users.map(User => {
    return(
        <div className= "User Info" key={User._id}>
        <div className="card-content">
        <span className="User">{User.candidate}</span>
        </div>
        </div>
    )
})
) : (
<div className="center">No users yet</div>
)
return(
    <div className="container">
    {eventList}
    </div>
   
)
}

}
export default getUser
