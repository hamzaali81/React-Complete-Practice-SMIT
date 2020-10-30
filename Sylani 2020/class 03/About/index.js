import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


export default class About extends Component {
    // constructor(props){
    //     super(props)
    // }
    
  get_home=()=>{
    console.log(this.props.history.push);
    this.props.history.push('/')
}
    render() {
        return (
            <div>
                <h1 style={{backgroundColor:"bisque",textAlign:"center"}}>About</h1>
                <Link to="./Home">Home </Link>
                <button onClick={this.get_home}>Home</button>

            </div>
        )
    }
}
