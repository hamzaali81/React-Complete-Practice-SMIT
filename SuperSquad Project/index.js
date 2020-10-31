import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { addCharacterByID } from './actions';

const store = createStore(rootReducer);
console.log('store',store.getState());
store.subscribe(()=>console.log('store',store.getState()))
store.dispatch(addCharacterByID(2))


ReactDOM.render(
  <Provider store={store}>
    <App />

  </Provider>

  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
