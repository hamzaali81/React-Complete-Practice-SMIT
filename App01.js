import React from 'react';
// import logo from './logo.svg';
import './App.css';
//stateless functional component
//class based components
//state, life cycle methods
//React hooks
//Classes - Syntactical sugar for constructor functions
//subclass of Component
//extends from Component class
//inherits functionality
//Component class is used to transfer from basic ES6 class.

function App() {
// getText(){
//   return 'hello'
// }
  // const arr=[{name:'hello',todos:['halwa poori','anda parata','chai','burger']},{name:'how are you',todos:['halwa poori','anda parata','chai','burger']}]
  const mylist=[[1,2,3,4],[5,6,7],[8]]
  return (
    // <p>{this.getText}</p>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      
      <p>
          {/* <ul>{arr.map((value)=>{
            return <li>
            {value.name}
            <ol>
            {value.todos.map((todo)=><li>{todo}</li>)}
              </ol>
            </li>
            })}
          </ul> */}

                 {/* //Es6 without {} */}

<ul>
  {mylist.map((number,index)=>{
    return <li key={index}>
      {number.map((el,index)=>{
        return <li key={index}>{el}</li>
      })}
    </li>
  })}
</ul>


        </p>
      </header>
    </div>
  );
}

export default App;
