import React, { Component } from 'react'
import Button from '@mui/material/Button';

export default class Signup extends Component {
    constructor () {
        super();
        this.state = {
            firstNameText: '',
            lastNameText: '',
            emailText: '',
            usernameText: '',
            passwordText: '',
            confirmPasswordText: ''
        }
    }
    
    handleChange = (e) => {
        switch(e.target.id){
            case 'first_name':
                this.setState({firstNameText: e.target.value})
                break
            case 'last_name':
                this.setState({lastNameText: e.target.value})
                break
            case 'email':
                this.setState({emailText: e.target.value})
                break
            case 'username':
                this.setState({usernameText: e.target.value})
                break
            case 'password':
                this.setState({passwordText: e.target.value})
                break
            case 'confirm_password':
                this.setState({confirmPasswordText: e.target.value})
                break           
        }
    }

    render() {
        return (
        <div align="center">
            <div className="signup" align="center">
                <h2>Sign Up</h2>
                <form id= "signup-form" onSubmit={this.handleSubmit}>
                    <input id="first_name"type="text" placeholder="First Name" value={this.state.firstNameText} onChange={this.handleChange}/>
                    <input id="last_name"type="text" placeholder="Last Name" value={this.state.lastNameText} onChange={this.handleChange}/>
                    <input id="email"type="text" placeholder="Email" value={this.state.emailText} onChange={this.handleChange}/>
                    <input id="username"type="text" placeholder="Username" value={this.state.usernameText} onChange={this.handleChange}/>
                    <input id="password"type="text" placeholder="Password" value={this.state.passwordText} onChange={this.handleChange}/>
                    <input id="confirm_password"type="text" placeholder="Confirm Password" value={this.state.confirmPasswordText} onChange={this.handleChange}/>
                    <Button color="success" variant="contained" size="large">Sign Up</Button>
                </form>
            </div>
        </div>
        )
    }
}
