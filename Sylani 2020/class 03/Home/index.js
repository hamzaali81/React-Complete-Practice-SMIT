import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";



export default class Home extends Component {
   
    render() {
        return (
            <div>
                <h1 style={{backgroundColor:"yellow",textAlign:"center"}}>Home</h1>
                <Link to="./About">Home</Link>

            </div>
        )
    }
}
