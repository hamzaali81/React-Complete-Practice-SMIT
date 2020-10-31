export const ADD_CHARACTER = 'ADD_CHARACTER';
 
export function addCharacterByID(id){
    const action = {
        type: ADD_CHARACTER,
        id: id
    }
    return action;
}