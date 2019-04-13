import React, {Component} from "react";
import axios from "axios";
// import Collapsible from "react-collapsible";

class addTask extends Component {

    constructor(props, context){
        super(props,context);
        this.state ={
            Description: "",
            eta: "",
            levelofcommitment: "",
            partner: "",
            monetarycompensation: "",
            skills: "",
            lifecyclestatus: "",
            experienceneeded: "",
            consultancy: ""
        };
    }
   
    handleSubmit = async event =>{
        event.preventDefault();

        const task = {
            Description: this.state.Description,
            eta: this.state.eta,
            levelofcommitment: this.state.levelofcommitment,
            partner:this.state.partner ,
            monetarycompensation: this.state.monetarycompensation,
            skills: this.state.skills,
            lifecyclestatus: this.state.lifecyclestatus,
            experienceneeded: this.state.experienceneeded,
            consultancy: this.state.consultancy
        };
        console.log(task);
        try {
        let response=await axios.post('http://localhost:3000/api/tasks/viewTaskStatus' , task);
         console.log(response)
        } catch (error) {
            console.log(error);
        }
        };
        render() {
            return(
                <div>
                <h1>tasks</h1>
               {/* <Collapsible trigger="Create new task"> */}
                <form onSubmit={this.handleSubmit}>
                <label>
                Description
                <input
                type="text"
                name="Description"
                onChange={this.handleChangeDescription}
                />
                </label>
                <label>
                Eta
                <input
                type="text"
                name="eta"
                onChange={this.handleChangeEta}
                />
                </label>
                <label>
                Level of Commitment
                <input
                type="text"
                name="levelofcommitment"
                onChange={this.handleChangeLevelofcommitment}
                />
                </label>
                <label>
                Partner
                <input
                type="text"
                name="partner"
                onChange={this.handleChangePartner}
                />
                </label>
                <label>
                Monetary Compensation
                <input
                type="text"
                name="monetarycompensation"
                onChange={this.handleChangeMonetarycompensation}
                />
                </label>
                <label>
                Skills
                <input
                type="text"
                name="skills"
                onChange={this.handleChangeSkills}
                />
                </label>
                <label>
                Life Cycle Status
                <input
                type="text"
                name="lifecyclestatus"
                onChange={this.handleChangeLifecyclestatus}
                />
                </label>
                <label>
                Experience Needed
                <input
                type="text"
                name="experienceneeded"
                onChange={this.handleChangeExperienceneeed}
                />
                </label>
                <label>
                Consultancy
                <input
                type="text"
                name="consultancy"
                onChange={this.handleChangeConsultancy}
                />
                </label>
                <button type="submit">Add</button>
                </form>
                {/* </Collapsible> */}
                </div>
            );
            }
        }
        export default addTask;
        
    
