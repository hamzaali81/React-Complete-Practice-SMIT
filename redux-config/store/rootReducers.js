import { combineReducers } from 'redux'
import authReducers from './reducers/authReducer';

const rootReducer = combineReducers({
  authReducers
})

export default rootReducer;