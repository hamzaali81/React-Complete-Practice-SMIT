import React from 'react';
import Child from './Child';
import Child2 from './Child2';


const Parent = () => {
    return (
        <div style={{backgroundColor: 'yellow'}}>
            <h1>Parent Component</h1>
            <Child />
            <Child2 />
        </div>
    );
}

export default Parent;
