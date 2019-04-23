import React, { Component } from 'react';
import axios from "axios";
import { withRouter} from 'react-router-dom';
import '../../User/Textbox.css';
class DeleteAccount extends Component {
  deactivate = async event => {
        event.preventDefault();
          let response = await 
          axios.delete(`http://localhost:3001/Routes/api/users/${JSON.parse(localStorage.getItem('id'))}`);
         this.props.history.push("/")
    };

    render(){
        return (
           <div>

           <input type="submit" name="Deactivate" id='i3'
           
           onClick={this.deactivate.bind(this)}/>
           </div> 
            
         );
        
    }
}

export default withRouter(DeleteAccount);