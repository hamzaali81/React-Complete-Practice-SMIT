import React, { Component } from 'react';
// import Logger from './Logger/index';
import Dashboard from './Dashboard';
import GoogleMapReact from 'google-map-react';
import './App.css';

class App extends Component {
   constructor(props){
     super(props)
      this.state={
      //   text: 'hello'
      // counter: 0
      text: 'hello'
      }
      

// this.incrementCounter=this.incrementCounter.bind(this);
// this.decrementCounter=this.decrementCounter.bind(this);

    }
    // static defaultProps = {
    //   center: {
    //     lat: 59.95,
    //     lng: 30.33
    //   },
    //   zoom: 11
    // };
 
    // incrementCounter(){
     
    //   this.setState({
    //     counterAdd: this.state.counter++
    //   })
    // }
    // decrementCounter(){
     
    //   this.setState({
    //     counterAdd: --this.state.counter
    //   })
    // }
  
    
    render() {
      const { text } = this.state;
      // const {counter} = this.state;
      return (
        <div className="App">
       {/* <GoogleMapReact
          bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          {/* defaultCenter={this.props.center} */}
          {/* defaultZoom={this.props.zoom} */}
        {/* > */}
          {/* <AnyReactComponent */}
            {/* // lat={59.955413} */}
            {/* // lng={30.337844} */}
            {/* // text="My Marker" */}
          {/* /> */}
        {/* </GoogleMapReact>     
          {/* <h1>Header</h1>
         <input placeholder="Enter the list" type="text" onChange={(e)=>{this.setState({text: e.target.value})}}/>
         
        {text !== "hello" && <Logger text={text}/>} */}
        {/* <button onClick={this.incrementCounter}><i class="fas fa-sign-language"></i></button> */}
        {/* <i class="fas fa-sign-language"></i> */}
      {/* <span>{counter}</span> */}
      {/* <button onClick={this.decrementCounter}><i class="fas fa-thumbs-down"></i></button> */}
        <h1>Check List</h1>
      <input type="text" placeholder="Enter the list" onChange={(e)=>{this.setState({text: e.target.value})}}/>
      <Dashboard text={text}/>
           
      </div>
    );
  }
}

export default App;
