// import React,{ useState } from 'react';
// import Test from './test';
// import './App.css';
// import counterContext from './CounterContex';

// const App = () => {
//   // const [count,setCount] = useState(0);
//   const count = useState(0);
//   console.log('hello',counterContext, count);
//   return (
//     // <counterContext.Provider value={10}>   
//     <counterContext.Provider value={count}>   
//     <div className="box">
//       <h1>{count}</h1>
//       <Test counter={count} />
//      </div>
//       </counterContext.Provider>
//   );
// }

// export default App;







import React, { Component } from 'react';
// import store from './Redux/store';
// import { Provider } from 'react-redux';
import Judge from './Judge';

export default class App extends Component {
  render() {
    return (
      
      <div>
        <h1>Hello</h1>
        <Judge />
      </div>
    )
  }
}
