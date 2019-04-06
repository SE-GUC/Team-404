import React, { Component } from 'react';
import floatinglabel from 'react';
class Textbox extends Component {
    state ={ 
     email:"",
     pass:"",
      }
    loginVal=(event) =>{
        if((this.state.pass!="")&& (this.state.email!="")){
         alert('Logging you in ' + this.state.email);
         event.preventDefault();
    }else{
        alert('Enter missing feilds');
    }
    
}
check2=(event)=>{
    this.setState({pass: event.target.value})

}
check1=(event)=> {
        this.setState({email: event.target.value});
 }
      render(){
        return (
           <div>
               <label>Enter E.mail</label>
               <input
               type="text"
               name="email"
               value={this.state.email}
            onChange={this.check1}
               />
               <label>Enter Password</label>
        <input
        type="text"
        name="pass"
        value={this.state.pass}
        onChange={this.check2}
        />
           <input type="submit"
           onClick={this.loginVal.bind(this)}
           />
    
           </div> 
            
         );
        
    }
}
  
export default Textbox;
