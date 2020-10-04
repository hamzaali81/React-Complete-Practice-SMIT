const reducer = (state={} , action)=>{
    switch(action.type){
        case 'UPDATED_USER':{
            return{...state ,user: action.payload, user2: action.parcel,user3: action.user}
        }
        case 'REMOVE_USER':{
            return{...state,user: null}            
        }  
        default: {
            return state;
        }  
        }
    }



export default reducer;