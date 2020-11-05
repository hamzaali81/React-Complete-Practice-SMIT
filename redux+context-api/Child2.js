import React,{ useReducer } from 'react';
import counterReducer from './CounterReducer';

export default function Child2() {
    let[state,dispatch] = useReducer(counterReducer,10);
    console.log(state,dispatch);
    // let[value,dispatch] = useState();
    return (
        <div>
            <h1>Hello Child2</h1>
    <h2>{state}</h2>
            <button onClick={()=>{dispatch('INCREMENT')}}>Increment Value in reducer</button>
        </div>
    )
}
