import { combineReducers } from 'redux'
import { characters,heroes } from './Reducers';

const mainpart = combineReducers({
    characters,
    heroes
})

export default mainpart;