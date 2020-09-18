import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Judge from './Component/Judge/Judge';

console.log(store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <div>
        <h1>React Redux</h1>
        <Judge />
      </div>
      </Provider>
    )
  }
}
