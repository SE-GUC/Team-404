import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
class DeleteTask extends Component {
  state = {
    _id: ''
  }

  handleChange = task => {
    this.setState({ id: task.target.value });
  }

  handleSubmit = task => {
    task.preventDefault();

    axios.delete(`tasks/${this.props.match.params.id}`)
      .then(res => {
        this.props.history.push('/tasks');
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task ID:
            <br/>
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <br/>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}

export default withRouter(DeleteTask)




// import React, { Component } from 'react'
// import axios from 'axios'

// export class DeleteTask extends Component {
//     state = {
//         _id: ''
//       }
    
//       handleChange = event => {
//         this.setState({ id: event.target.value });
//       }
    
//       handleSubmit = event => {
//         event.preventDefault();
    
//         axios.delete(`http://localhost:3001/api/tasks/${this.state._id}`)
//           .then(res => {
//             console.log(res);
//             console.log(res.data);
//           })
//       }
    
//       render() {
//         return (
//           <div>
//             <form onSubmit={this.handleSubmit}>
//               <label>
//                 Task ID:
//                 <br/>
//                 <input type="text" name="id" onChange={this.handleChange} />
//               </label>
//               <br/>
//               <button type="Submit">Delete</button>
//             </form>
//           </div>
//         )
//       }
// }

// export default DeleteTask
