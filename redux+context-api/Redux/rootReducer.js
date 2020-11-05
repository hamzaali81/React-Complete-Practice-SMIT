import { combineReducers } from 'redux';
import authReducer from './reducer/index'; 

const mainReducer=combineReducers({
    authReducer
})

export default mainReducer;