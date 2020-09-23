import { combineReducers } from 'redux'
import authReducers from './reducers/authReducers.js';

const todoApp = combineReducers({
  authReducers
})

export default todoApp
