import { combineReducers } from 'redux';
import { memes,myMemes } from './reducers';


const mainReducer = combineReducers({
    memes,myMemes
})

export default mainReducer;