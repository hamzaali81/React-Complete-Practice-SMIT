import { createStore } from 'redux';
import rootReducer from './rootReducer';
// import thunk from 'redux-thunk';



const store= createStore( rootReducer );
// console.log('store.dispatch',store.dispatch());

export default store;