import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import Routes from './config/router/router';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './screen/Login/Login';
import Dashboard from './screen/Dashboard/Dashboard';
// import { BrowserRouter as Router ,Switch, Route } from "react-router-dom";



class App extends Component {
    constructor(){
      super();

      this.state={

      }


    }
         
  render() {
  const loginWithLoading = WithLoading(Login);
  const DashboardWithLoading = WithLoading(Dashboard);
    return (
       <div>
         <h1>Header!</h1>
         <Routes />
         <h1>Footer!</h1>
         <h1>Login</h1>
         <loginWithLoading loading={false} />

         <h1>Dashboard</h1>
         <DashboardWithLoading loading={true} />
      </div>
    )
  }
}

const WithLoading= ({Component,...rest}) =>{
  return (props) => {
   return props.loading ? <h1>Loading Shareef</h1> :
    <Component {...rest}/>

  }
}
export default App;
