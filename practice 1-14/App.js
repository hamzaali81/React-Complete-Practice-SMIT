import React, { Component } from 'react';

class App extends Component {
  render() {
    const arr=[
    [
      {name: 'hamza',
      age: 20,
      job: 'designer'
     
    }
    ],
    [
      {
        name: 'ali',
        age: 23,
        job: 'designer'
      }
    ],
    [
      {
        name: 'mustafa',
        age: 25,
        job: 'designer'
      }
    ],
    [
      {
        name: 'umar',
        age: 21,
        job: 'designer'
      }
    ],
    [
      {
        name: 'korena',
        age: 22,
        job: 'designer'
      }
    ]
    ]
    
  
    return (
      <div>
        <ul>
        {
          arr.map((el,index)=>{
            console.log(el);
            return el.map((obj)=>{
              console.log(obj);
          return <li key={index}>{obj.job}</li>
          
        })
        })
        } 
        </ul>
      </div>
    );
  }
}

export default App;
