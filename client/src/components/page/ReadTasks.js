import React, { Component } from "react";
import axios from  "./axiosInstance";
import { Link } from "react-router-dom";
class ReadTasks extends Component {
    state = {
        tasks: [ ]
    }
    componentDidMount(){
        
        axios.get('http://localhost:3001/Routes/api/tasks/')
        .then(res => {
            console.log(res)
            this.setState({
                tasks: res.data.data
            })
        })
    }
render(){
const { tasks } = this.state;
const taskList = tasks.length ? (
    tasks.map(task => {
    return(
        <div className= "task card" key={task._id}>
        <div className="card-content">
        <Link to = {`task/${task._id}`}>
        
        {/* //the name as a link  */}
        <span className="task candidate">{task.description}</span>
           
        </Link>
        </div>
        </div>
    )
})
) : ( 
<div className="center">Loading Tasks List</div>
)
return(
    <div className="container">
    {taskList}
    </div>
   
)
}

}
export default ReadTasks 

 
