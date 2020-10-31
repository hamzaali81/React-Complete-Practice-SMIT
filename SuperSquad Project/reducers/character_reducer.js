import characters_json from '../data/3.1 characters.json.json';
import { ADD_CHARACTER } from '../actions';

function characters(state = characters_json,action){
      switch(action.type){
          case ADD_CHARACTER:{
              let characters = state.filter(item =>  item.id !== action.id);
              return characters
          }
          default:
          return state;
      }
    }
export default characters;