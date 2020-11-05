const counterReducer= (state,action)=>{
    switch(action){
        case 'INCREMENT':{
            return state + 1
        }
        // default: {
        //     state
        // }
    }
}


export default counterReducer;