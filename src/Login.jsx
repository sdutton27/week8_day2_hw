import React, { Component } from 'react'
import Button from '@mui/material/Button';

export default class Login extends Component {
    constructor () {
        super();
        this.state = {
            usernameText: '',
            passwordText: ''
        }
    }
    
    handleChange = (e) => {
        switch(e.target.id){
            case 'username':
                this.setState({usernameText: e.target.value})
                break
            case 'password':
                this.setState({passwordText: e.target.value})
                break    
        }
    }

    render() {
        return (
        <div align="center">
            <div className="login" align="center">
                <h2>Login</h2>
                <form id= "login-form" onSubmit={this.handleSubmit}>
                    <input id="username"type="text" placeholder="Username" value={this.state.usernameText} onChange={this.handleChange}/>
                    <input id="password"type="text" placeholder="Password" value={this.state.passwordText} onChange={this.handleChange}/>
                    <Button color="primary" variant="contained" size="large">Login</Button>
                </form>
            </div>
        </div>
        )
    }
}
