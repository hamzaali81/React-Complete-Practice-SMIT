import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props);
    console.log('props***',props);
    this.login=this.login.bind(this)
  }
  login(){
    this.props.onLogin({
      email:'hamza54834@gmail.com',password: 'admin'
    })
  }
  render() {
    console.log('from render', this.props);
    return (
      <div>
        <h1>Login</h1>
        <button onClick={this.props.onLogin}>Login Hoja</button>
      </div>
    )
  }
}
