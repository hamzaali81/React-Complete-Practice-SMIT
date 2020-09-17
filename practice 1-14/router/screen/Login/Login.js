import React, { Component } from 'react';
import Container from '../../component/Container/Container';
import {  Link,Redirect } from "react-router-dom";


class Login extends Component {
  constructor(props){
    super();

    console.log('this****',this);
    console.log('props****',this.props);
    this.state={
    loading: true 
    }
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

 Focus(on){
  this[on].focus();
  console.log('dom', this[on]);
 }

 componentDidMount(){
   setTimeout(()=>{
     this.setState({
         loading: false
     })
     },3000)
 }

  render() {
    // console.log('from render',this.props);
    const userId = 'sLjkduencjeihkjnlul343';
    const {loading}=this.state;
    return (
      <div>
        { loading ? 
        
        <img src="./loader.gif" alt="loader"/> 
        // <h1>loading shareef</h1>
        :
    <div>
        <>Login</>
      <input type="email" placeholder="Email"
      ref={el => this.emailInput =el}
      
      />
      <input type="password" placeholder="Password"
      ref={el=> this.passwordInput =el}
      />

      <button onClick={this.Focus.bind(this,'emailInput')}>Email Input</button>
      <button onClick={this.Focus.bind(this,'passwordInput')}>Password Input</button>
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
    }
      </div>
    );
  }

}

export default Login;
