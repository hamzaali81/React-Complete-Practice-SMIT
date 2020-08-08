import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state=({
      text: "hello Sylani",
      condition: true
    })
    this.updateState=this.updateState.bind(this)
  }
 updateState(){
   
   //  const text= "love Sylani"
   console.log('hello');
   this.setState({
     text: this.state.condition ? 'I Love Saylani' : 'Saylani meri jaan!',
     condition: !this.state.condition

   })

  //  if(this.state.condition){
  //   this.setState({
  //       text: "Pakistan Zindabad",
  //       condition: false      
      
  
  //    }) }
  //    else{
  //     this.setState({
  //       text: 'Sylani meri jaan',
  //       condition: true
    
  //      }) 
  // }
   
}

TestButton(){
  console.log('hehahaha');
}
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.updateState}>Click Me</button>
        <button onClick={this.TestButton()}>Test Button</button>
      </div>
    )
  }
}
