import characters_json from '../data/3.1 characters.json.json';


export function createCharacter(id){
    let character= characters_json.find((c)=> c.id === id);
      return character
 }