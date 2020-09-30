export const initializeState= {
    counter: 0
}
const reducer = (state =initializeState, action ) =>{
    switch(action.type){
        case "INCREMENT":{
            return {...state, increment: action.payload}
        }
        case "DECREMENT":{
                 return {...state,
                  decrement: action.payload}
                
            
        }
        default: {
            return state
        }
        }
}


export default reducer;