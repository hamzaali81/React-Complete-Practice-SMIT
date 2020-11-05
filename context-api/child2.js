import React,{ useContext } from 'react';
import {mainComponent,subComponent} from './App';


const Child2 = () => {
    const context = useContext(mainComponent);
    return (
        <div>
            <h2>See</h2>
            {context}
        </div>
    );
}

export default Child2;
