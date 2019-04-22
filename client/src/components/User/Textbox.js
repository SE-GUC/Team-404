import React, { Component } from 'react';
import axios from "axios";
import jwt_decode from 'jwt-decode';
import { withRouter} from 'react-router-dom';
import './Textbox.css';
class Textbox extends Component {
    state ={ 
     email:"",
     pass:"",
     userinfo: ""
        }

      loginVal = async event => {
        event.preventDefault();
    
        const user = {
          email: this.state.email,
          password: this.state.pass,
    
        };
        //console.log(user);
        try {
          let response = await axios.post(
            "http://localhost:3001/Routes/api/users/login/",
            user
          );
          axios.defaults.headers.common['Authorization'] = response.data.token;  
         var decoded = jwt_decode(response.data.token, {complete: true});
         this.setState({userinfo: decoded})
         this.props.history.push("/")
          console.log(this.state.userinfo);
          console.log(response);
          
        } catch (error) {
          console.log(error);
        }
  
    };
  
check2=(event)=>{
    this.setState({pass: event.target.value})

}
check1=(event)=> {
        this.setState({email: event.target.value});
 }
      render(){
        return (
           <div>
               <label>
               Enter E.mail</label>
               <input id='i1'
               type="text"
               name="email"
               value={this.state.email}
            onChange={this.check1}
               />
<br></br>
               <label>Enter Password</label>

        <input id='i2'
        type="text"
        name="pass"
        value={this.state.pass}
        onChange={this.check2}
        />
<br></br>
<br></br>  
           <input type="submit" name="submit" id='i3'
           
           onClick={this.loginVal.bind(this)}/>
            
    
           </div> 
            
         );
        
    }
}

export default withRouter(Textbox);
