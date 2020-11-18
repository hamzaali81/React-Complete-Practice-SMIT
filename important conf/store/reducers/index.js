const INTIAL_STATE = {userName:'hello'}

const reducer = (state = INTIAL_STATE,action)=>{
//    console.log(action.payload);
//     switch(action.type){
//         case 'UPDATE_USER':{
//             return {
//            ...state, users: action.payload
//             }
//         }
//                 default:{
//                    return state
//                 }
// }
    switch(action.type){
        case'UPDATE_USER':{
            return {
                ...state,userName:action.payload
            }
        }
        default:{
            return state
        }
    }
   
}


export default reducer;