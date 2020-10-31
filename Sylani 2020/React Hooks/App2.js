import React,{useState} from 'react';
// const [intialCount,setCount]=useState('0');  //Error



const App = () => {
// let count = 0;
  const [intialCount,setCount]=useState(0);

  // let count= 1;
  const IncNum = ()=>{
    setCount(intialCount+1);
    // console.log('click me');
  }
  
  return (
    // console.log(intialCount);
    <div>
      <h1>{intialCount}</h1>
      <button onClick={IncNum}>Increment</button>
    </div>
  );
}

export default App;
