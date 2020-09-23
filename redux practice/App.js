import React, { Component } from 'react';
import { Provider } from 'react-redux'; 
import store from './Redux/store';
import Judge from './Judge/judge';
import Kids from './Kids/kids';




class App extends Component {
  render() {
    return (
        <Provider store={store}>
      <div>  
        
        <Judge />
        <Kids />
        
      </div>
        </Provider>
    );
  }
}

export default App;
