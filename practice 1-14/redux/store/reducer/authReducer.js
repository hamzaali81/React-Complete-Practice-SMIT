// const INITIAL_STATE= 'BURGER';
// const authReducer=(state={},action)=>{
//     switch(action.type){
//          case "UPADATE_USER":{

//              return{...state,user:action.user}
//          }
//     //     // console.log(action);
//          default:{
//             return state
//     }

//     // console.log(action);
//     return state

// }

// }

const INITIAL_STATE= 0;
const authReducer= (state=INITIAL_STATE,action)=>{
    console.log(action);
    switch(action.type){
        case 'INCREMENT':{
            return {...state,data:action.payload,userdataAPi:action.mydata}
        }
        default:{
           return state
        }
    }
}
export default authReducer;