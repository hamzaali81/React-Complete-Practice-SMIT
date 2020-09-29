import React, { Component } from 'react';
import store from './Redux/store';
import './App.css';
import { Provider } from 'react-redux'
import Increment from './Increment';
import Decrement from './Decrement';


// console.log(store.subscribe);
// console.log(store.getState);
// console.log(store);
class App extends Component {
  constructor(props){
    super(props)
    
  }


  render() {
    return (
       
      <Provider store={store}>
    <div className="App">
    
         <Increment />
        <Decrement /> 
    {/* <h1>{this.props.userIncrement}</h1> */}
    {/* <h1>{this.props}</h1> */}
      </div>
      </Provider>
    );
  }
}

export default App;
