const authReducer=(state= {},action)=>{
        // console.log(action);
        // console.log(action.type);
        switch(action.type){
                case 'UPDATE_USER':{
                        return {...state,data: action.user}
                    }
                    default: {
                            return state;
                        }
                    }
                }
// const INTIAL_STATE ={ name:'KYA HAL HAI',email: 'hamza54834@gmail.com'};
// const authReducer = (state=INTIAL_STATE)=>{
//           return state
// }

export default authReducer;