// import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import store from './Redux/store';
// import Judge from './Component/Judge/Judge';
// import Kids from './Component/Kids/Kids';

// console.log(store);

// export default class App extends Component {
  //   render() {
    //     return (
      //       <Provider store={store}>
      //        <div>
//         <h1>React Redux</h1>
//         <Judge />
//         <Kids />
//       </div>
//       </Provider>
//     )
//   }
// }


import React, { createContext } from 'react';
import Child1 from './child1';
import Child2 from './child2';
const mainComponent = createContext();
const subComponent = createContext();
console.log(mainComponent);
const App=()=>{
  return(
    <mainComponent.Provider value={0}>
      <subComponent.Provider value={1}>
    <div>
      <Child1 />
      <Child2 />
    </div>
      </subComponent.Provider>
    </mainComponent.Provider>
  )
}

export default App;
export { mainComponent,subComponent };