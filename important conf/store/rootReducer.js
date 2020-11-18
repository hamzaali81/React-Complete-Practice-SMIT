import { combineReducers } from 'redux';
import reducer from './reducers'


const mainReducer = combineReducers({
    rootReducer: reducer
})

export default mainReducer;