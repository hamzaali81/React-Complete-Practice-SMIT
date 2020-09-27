import character_json from '../Data/characters.json.json';
import { ADD_CHARACTER,REMOVE_CHARACTER } from '../Actions';


function characters(state = character_json, action) {
    switch(action.type) {
      case ADD_CHARACTER:
        let characters = state.filter(item => item.id !== action.id);
        return characters;
      case REMOVE_CHARACTER:
        characters = [...state, createCharacter(action.id)];
        return characters;
      default:
        return state;
    }
  }


function heroes(state = [], action){
     switch(action.type){
        case ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.id)]
              return heroes;
        case REMOVE_CHARACTER:
             heroes = state.filter( item => item.id !== action.id)
          return heroes;
            default:
               return state;

     }
}

function createCharacter(id){
    let character = character_json.find( c => c.id === id);
    return character;
}

export 
{ 
     characters,
     heroes
 };