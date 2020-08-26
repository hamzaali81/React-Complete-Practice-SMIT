import React, { Component } from 'react';
import Login from './Search/Login/App'
import Dashboard from './Search/Dashboard/App'
import AddForm from './Search/AddForm/App'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      user: false
    }
    this.onLogin=this.onLogin.bind(this);
  }

  onLogin(user){
    console.log('user jo login hoa',user);
    this.setState({user: true})
    
  }

  render() {
    const {user}=this.state;
    return (
      <div>
        {!user && <Login 
        text="Hello Pakistan" onLogin={this.onLogin}/>}
        {user && <Dashboard />}
        <AddForm />
      </div>
    )
  }
}
