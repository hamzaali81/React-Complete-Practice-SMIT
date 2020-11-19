
function memes(state = [],action){
//    console.log(action.type);
    switch(action.type){
        case 'RECEIVE_MEMES':{
            return action.memes
        }
                default:{
                   return state
                }
}
}

function myMemes(state = [],action){
    switch(action.type){
        case 'NEW_MEME':{
            state = [...state, action.meme];
            return state
        }
        default: {
            return state 
        }
    }
}


export  { memes , myMemes};
