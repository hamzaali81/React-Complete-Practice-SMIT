import React, { Component } from 'react';
import './menu.css';
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <Link to="/"> <li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </div>
        )
    }
}
