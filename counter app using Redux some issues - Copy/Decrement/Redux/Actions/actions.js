// import initializeState from '../Reducers/operationReducer';
// console.log(initializeState);

const changeValue= {
    counter: 0
}
console.log(changeValue.counter);

const IncrementPart = ()=>{
    return dispatch =>{

        dispatch ({
            type: 'INCREMENT',
            payload: ++changeValue.counter
    
        })
        
    }
}
const DecrementPart = ()=>{
    return dispatch =>{

        // console.log('hamza');
        dispatch({
            type: 'DECREMENT',
            payload: --changeValue.counter

            })
    }
    
    // return{
    // }
}


export {
    IncrementPart,
    DecrementPart
}