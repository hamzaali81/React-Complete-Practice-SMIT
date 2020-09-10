import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    console.log('constructor',this);
    this.state={
      // text: 'Sylani Meri jan',
      condition: true,
      // family:{
      //   name: 'hamza'
      // }
    }
      this.onChange=this.onChange.bind(this);  }
  
  onChange(){
    console.log('hello',this);

    this.setState({
      text: this.state.condition ? 'Sylani love' : 'Sylani great',
      condition: !this.state.condition,
      family:{
        name: 'kaka'
      }
    
    })
  }


  header(){
    return(
      <div>
         <h1>{this.state.text}</h1>
    <p>{this.state.family && this.state.family.name}</p>
    <button onClick={this.onChange}>Add</button>   
    <button onClick={this.setSomething.bind(this,'hello')}>click tu hoga</button>   
      </div>
    )
  }
  
  setSomething(e){
    console.log('ye tu hoga',e);
  }
  
  
  
  render() {
    return (
      <div>
      {this.header()}     
      </div>
    );
  }
}

export default App;
