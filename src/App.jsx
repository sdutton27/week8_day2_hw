import React, { Component } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
        user:{
            username: "sho"
        }
    }
}
  
  switchUser = () => {
    if (this.state.user.username === 'sho') {
      this.setState({user: {username:'sarah'}})
    } else {
      this.setState({user: {username:'sho'}})
    }
  }

  render() {
    return (
      <div>
        <Navbar user={this.state.user} switchUser={this.switchUser}/>
        <Home/>
        <Signup/>
        <Login/>
      </div>
    )
  }
}
