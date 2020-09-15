import React, { Component } from 'react';
import Container from './component/Container/Container'
import Login from './screen/Login/Login';
import AddForm from './screen/AddForm/AddForm';
import Dashboard from './screen/Dashboard/Dashboard';


class App extends Component {
    constructor(){
      super();

      this.state={
        user: false,
        text:'hello world'
      }
      this.onLogin=this.onLogin.bind(this)
    }

    onLogin(userObj){
      // console.log(userObj);
      this.setState({user: true})
        }
         
  render() {
    const {user,text}=this.state;
    return (
      <div>

<Container>
     {!user && <Login 
     text="hello world" onLogin={this.onLogin}/>}
     <input onChange={(e)=>{this.setState({text: e.target.value})}}/>
      {text !== 'Sylani' && <Dashboard text={text}/>}
       <AddForm />
</Container>
        
      </div>
    );
  }
}

export default App;
