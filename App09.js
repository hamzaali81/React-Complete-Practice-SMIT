import React, { Component } from "react";
import "./App.css";
//Uncontrolled inputs

class From extends Component {
  handleSubmit = (e) =>{
    e.preventDefault();
const name = this.refs.myName;
const nameValue = name.value;

console.log(nameValue);
  }
  
  render(){
    return <section>
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="myName"/>
        <input type="email"/>
        <button type="submit">Submit</button>
      </form>
      <p>hello world </p>
    </section>
  }
}

class App extends Component {
  render() {
    return (
      <div>
     <From />
      </div>
    );
  }
}

export default App;
