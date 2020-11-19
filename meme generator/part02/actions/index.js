import { username,password } from './secrets';

export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

function receiveMemes(json){
    const { memes } = json.data;
    return{
        type: RECEIVE_MEMES,
        memes
    }
}

function fetchMemesJson(){
    return fetch('https://api.imgflip.com/get_memes')
    .then(response=> response.json())
}

export function fetchMemes(){
    return function(dispatch){
        return fetchMemesJson()
            .then(json => dispatch(receiveMemes(json)))
        }
    }

function newMeme(meme){
    console.log('meme object',meme);
    return {
        type: NEW_MEME,
        meme
    }

}


function postMemeJson(params){
    var formData = new FormData();
    Object.keys(params).map((node)=>{
        formData.append(node, params[node])
    })
    formData.append('username', username)
    formData.append('password', password)
    console.log(formData);
    return fetch('https://api.imgflip.com/caption_image',{
        method: "POST",
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    }).then(response=> {
        console.log(response.json());
        return response.json()
    })
}

export function createMeme(new_meme_object){
    console.log(new_meme_object);
    return function(dispatch){
       return postMemeJson(new_meme_object)
       .then(new_meme => dispatch(newMeme(new_meme))) 
    }
}





















