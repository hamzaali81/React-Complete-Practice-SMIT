import React, { Component } from 'react';
import Logger from './Logger/index';
import './App.css';
class App extends Component {
   constructor(props){
     super(props)
      this.state={
        text: 'hello'
      }
    }
 
    
  
    
    render() {
      const { text } = this.state;
      return (
        <div className="App">
          <h1>Header</h1>
         <input placeholder="Enter the list" type="text" onChange={(e)=>{this.setState({text: e.target.value})}}/>
         
        {text !== "hello" && <Logger text={text}/>}
         
      </div>
    );
  }
}

export default App;
