import React, { Component } from 'react';
import Container from '../../component/Container/Container';
class Login extends Component {
  constructor(props){
    super();

    console.log('this****',this);
    console.log('props****',this.props);
    // this.state={
      
    // }
    this.login=this.login.bind(this);
    }

 login(){
    // const {email,password}= this.state;
    // if(email=== "hamza54834@gmail.com" && password==="admin"){
      this.props.onLogin({
        email: 'hamza123@gmail.com',
        password: 'admin'
      });
    // }
 }

  render() {
    // console.log('from render',this.props);
    return (

      <div>
        <Container>
      <h1>Login</h1>
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Password"/>
      <button onClick={this.login}>Login kardun</button>
      </Container>
      </div>
    );
  }

}
export default Login;
