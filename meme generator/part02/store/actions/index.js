import { NEW_MEME } from "../../actions";

function receiveMemes(json){
    const { memes } = json.data;
    return {
        type:'RECEIVE_MEMES',memes
        }
}

function fetchMemesJson(){
    return fetch('https://api.imgflip.com/get_memes')
    .then((respone)=>respone.json())
}

export function fetchMemes(){
    return function(dispatch){
        return fetchMemesJson()
            .then(json => dispatch(receiveMemes(json)))
        }
    }


export function newMeme(meme){
    return {
        type: NEW_MEME,
        meme
    }
}
