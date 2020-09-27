const ADD_CHARACTER = 'ADD_CHARACTER';
const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

export function addCharacterById(id){
const action ={
    type: ADD_CHARACTER,
    id
}
return action;
}


export function removeCharacterById(id){
const action ={
    type: REMOVE_CHARACTER,
    id
}
return action;
}


export {
    ADD_CHARACTER,
    REMOVE_CHARACTER
}