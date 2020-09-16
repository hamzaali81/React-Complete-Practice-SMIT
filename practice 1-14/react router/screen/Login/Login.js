import React, { Component } from 'react';
import Container from '../../component/Container/Container';
import {  Link,Redirect } from "react-router-dom";



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
      // this.props.onLogin({
      //   email: 'hamza123@gmail.com',
      //   password: 'admin'
      // });
    // }

    // this.props.history.push(`/dashboard/8bjhjfth`)
    this.props.history.replace(`/dashboard/`, {hello: 'kaja'})
 }

  render() {
    // console.log('from render',this.props);
    const userId = 'sLjkduencjeihkjnlul343'
    return (
      <div>
      <h1>Login</h1>
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Password"/>
      {/* <Link to={`/dashboard/${userId}`}><button>Login kardun</button></Link>       */}
       {/* <Link to={`/dashboard/abcd?firstLogin=true`}>Go to Login Dashboard</Link> */}
       {/* <Link to={{
         pathname:'/dashboard/abcd?firstLogin=true',
         state: {user: {name: 'hamza', age: 21}}
       }}>Go to Login Dashboard</Link> */}
       <Link to={{
         pathname:'/dashboard/abcd',
         search:'?firstLogin=true',
         state: {user: {name: 'hamza', age: 21}}
       }}>Go to Login Dashboard</Link>
      <button onClick={this.login}>Login Kardun</button>
      </div>
    );
  }

}
export default Login;
