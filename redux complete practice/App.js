import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Judge from './Judge';
import Kids from './Kids';

console.log(store);
// console.log(store.subscribe());

class App extends Component 
{
  render() {
    return (
      <Provider store={store}>


      <div>
        <h1>Parent Component</h1>
        <Judge />
        <Kids />
      </div>

      </Provider>
    );
  }
}

export default App;