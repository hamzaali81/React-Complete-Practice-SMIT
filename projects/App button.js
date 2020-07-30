import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      increment: 0,
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDec=this.onDec.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onAdd() {
    const { increment } = this.state;
    console.log("*****increment", increment);
    this.setState({
      increment: increment + 1,
    });
  }

  onDec() {
    const { increment } = this.state;
    console.log("*****increment", increment);
    this.setState({
      increment: increment - 1,
    });
  }

onReset(){
  const { increment } = this.state;

  this.setState({
    increment: 0
  })
}

  onCancel(){
    // const { increment } = this.state;
    this.setState({
      increment: ' '
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onAdd}>Increment</button>
        <button onClick={this.onDec}>Decrement</button>
        <button onClick={this.onReset}>Reset</button>
        <button onClick={this.onCancel}>Cancel</button>
       
        <h1>{this.state.increment}</h1>
      </div>
    );
  }
}

export default App;
