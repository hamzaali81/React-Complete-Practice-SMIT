import { combineReducers } from 'redux';
import operationReducer from './Reducers/operationReducer'

const mainReducer = combineReducers({
    operationReducer
})

export default mainReducer;