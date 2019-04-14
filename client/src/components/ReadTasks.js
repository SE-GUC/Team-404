import React, { Component } from "./node_modules/react";
import axios from  "./axiosInstance";
import { Link } from "./node_modules/react-router-dom";
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
        <div className= "event card" key={task.description}>
        <div className="card-content">
        <Link to = {`task/${task.description}`}>
        
        {/* //the name as a link  */}
        <span className="event candidate">{task.description}</span>
           
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

 
