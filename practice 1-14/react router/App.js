import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import Routes from './config/router/router';
// import { BrowserRouter as Router ,Switch, Route } from "react-router-dom";



class App extends Component {
    constructor(){
      super();

      this.state={

      }


    }
         
  render() {
    return (
       <div>
         <h1>Header!</h1>
         <Routes />
         <h1>Footer!</h1>
      </div>
    )
  }
}


export default App;
