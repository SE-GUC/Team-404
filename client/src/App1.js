import React, { Component } from 'react';
import Taskform from './components/Taskform';
import './App.css';

class App extends Component {

state= {
  taskform: [
    {
      id: 1,
      description: 'Fix Cars',
      eta: '1 month',
     levelofcommitment: 'High',
      partner: 'Toyota',
      monetarycompensation: 3000,
      skills: 'xxx',
      lifecyclestatus: 'pending',
      experienceneeded: '3 years',
      consultancy: 'Consultant',

    },

    {
       id: 2,
       description: 'Fix Cars',
       eta: '1 month',
     levelofcommitment: 'High',
      partner: 'Toyota',
      monetarycompensation: 3000,
      skills: 'xxx',
      lifecyclestatus: 'pending',
      experienceneeded: '3 years',
      consultancy: 'Consultant',

    }

    // {
    //   id: 3,
    //   description: 'Fix Cars',
    //   eta: '1 month',
    //  levelofcommitment: 'High',
    //   partner: 'Toyota',
    //   monetarycompensation: 3000,
    //   skills: 'xxx',
    //   lifecyclestatus: 'pending',
    //   experienceneeded: '3 years',
    //   consultancy: 'Consultant',

    // },

    // {
    //   id: 4,
    //   description: 'Fix Cars',
    //   eta: '1 month',
    //  levelofcommitment: 'High',
    //   partner: 'Toyota',
    //   monetarycompensation: 3000,
    //   skills: 'xxx',
    //   lifecyclestatus: 'pending',
    //   experienceneeded: '3 years',
    //   consultancy: 'Consultant',

    // }





  ]
}



  render() {

    return (
     <div className="App">
     <Taskform taskform = {this.state.taskform}/>
     </div>
    );
  }
}

export default App;
 

// class HelloMessage extends React.Component {
//   render() {
//     return (
//       <div>
//         Hello {this.props.name}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <HelloMessage name="Taylor" />,
//   document.getElementById('hello-example')
// );