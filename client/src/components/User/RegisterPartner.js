import React, { Component } from "react";
import axios from "axios";

class User extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            name: "",
            email: "",
            password: "",
            age: "",
            username: "",
            phoneNumber: "",
            userType: "Partner",
            location: "",
            organisationName: "",
            businessPartners: "",
            eventsOrganized: "",
            fieldOfWork: "",
            projectHistory: ""
        };
    }
    handleChangeName = user => {
        this.setState({ name: user.target.value });
    };

    handleChangeEmail = user => {
        this.setState({ email: user.target.value });
    };

    handleChangePassword = user => {
        this.setState({ password: user.target.value });
    };

    handleChangeAge = user => {
        this.setState({ age: user.target.value });
    };

    handleChangeUserName = user => {
        this.setState({ username: user.target.value });
    };

    handleChangePhoneNumber = user => {
        this.setState({ phoneNumber: user.target.value });
    };

    handleChangeUserType = user => {
        this.setState({ userType: user.target.value });
    };

    handleChangeLocation = user => {
        this.setState({ location: user.target.value });
    };
    handleChangeOrganisationName = user => {
        this.setState({ organisationName: user.target.value });
    };

    handleChangeBusinessPartners = user => {
        this.setState({ businessPartners: user.target.value });
    };

    handleChangeEventsOrganized = user => {
        this.setState({ eventsOrganized: user.target.value });
    };

    handleChangeFieldOfWork = user => {
        this.setState({ fieldOfWork: user.target.value });
    };
    handleChangeProjectHistory = user => {
        this.setState({ projectHistory: user.target.value });
    };
    handleSubmit = async event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            age: this.state.age,
            username: this.state.username,
            phoneNumber: this.state.phoneNumber,
            userType: this.state.userType,
            location: this.state.location,
            organisationName:this.state.organisationName,
            businessPartners: this.state.businessPartners,
            eventsOrganized: this.state.eventsOrganized,
            fieldOfWork: this.state.fieldOfWork,
            projectHistory: this.state.projectHistory
        };
        console.log(user);
        try {
            let response = await axios.post("http://localhost:3001/Routes/api/users/register", user);
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    };
    render() {
        return (

            <div className="user">
                <h1> users </h1>
                <form onSubmit={this.handleSubmit}>
                    <label className="name">
                        name:
            <input
                            onChange={this.handleChangeName}
                            type="text"
                            name="name"
                        />
                    </label>
                    <br />
                    <label className="email">
                        email:
              <input
                            onChange={this.handleChangeEmail}
                            type="text"
                            name="email"
                        />
                    </label>
                    <br />
                    <label className="password ">
                        password:
              <input
                            onChange={this.handleChangePassword}
                            type="text"
                            name="password"
                        />
                    </label>
                    <br />
                    <label className="age">
                        age:
              <input
                            onChange={this.handleChangeAge}
                            type="number"
                            name="age"
                        />
                    </label>
                    <br />
                    <label className="username">
                        username:
              <input
                            onChange={this.handleChangeUserName}
                            type="text"
                            name="username"
                        />
                    </label>
                    <br />
                    <label className="phoneNumber">
                        phoneNumber:
              <input
                            onChange={this.handleChangePhoneNumber}
                            type="number"
                            name="phoneNumber"
                        />
                    </label>
                    <br />
                    <label className="location">
                        location:
              <input
                            onChange={this.handleChangeLocation}
                            type="text"
                            name="location"
                        />

                    </label>
                    <br />
                    <label className="organisationName">
                        organisationName:
              <input
                            onChange={this.handleChangeOrganisationName}
                            type="text"
                            name="organisationName"
                        />

                    </label>
                    <br />
                    <label className="businessPartners">
                    businessPartners:
              <input
                            onChange={this.handleChangeBusinessPartners}
                            type="text"
                            name="businessPartners"
                        />

                    </label>
                    <br />
                    <label className="eventsOrganized">
                        eventsOrganized:
              <input
                            onChange={this.handleChangeEventsOrganized}
                            type="text"
                            name="eventsOrganized"
                        />

                    </label>
                    <br />
                    <label className="fieldOfWork">
                        fieldOfWork:
              <input
                            onChange={this.handleChangeFieldOfWork}
                            type="text"
                            name="fieldOfWork"
                        />

                    </label>
                    <br />
                    <label className="projectHistory">
                    projectHistory:
              <input
                            onChange={this.handleChangeProjectHistory}
                            type="text"
                            name="projectHistory"
                        />

                    </label>
                    <br />
                    <button type="submit" onClick={this.handleSubmit}> submit </button>
                </form>
                <br />

            </div>
        );

    }
}
export default User;