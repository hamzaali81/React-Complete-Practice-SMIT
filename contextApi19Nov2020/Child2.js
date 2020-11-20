import React,{ useReducer } from 'react';
import CounterReducer from './ContextApi/CounterReducer';

const Child2 = () => {
    // const [state, dispatch] = useReducer(reducer, initialState, init)
    let [state, dispatch] = useReducer(CounterReducer,0);
    console.log(state);

    return (
        <div style={{backgroundColor: 'orangered'}}>
            <h1>Child 2</h1>
            <h2>Intial Counter start {state}</h2>
            <button onClick={()=>{dispatch('DECREMENT')}}>DECRE</button>
            <button onClick={()=>{dispatch('INCREMENT')}}>INCREM</button>
        </div>
    );
}

export default Child2;
