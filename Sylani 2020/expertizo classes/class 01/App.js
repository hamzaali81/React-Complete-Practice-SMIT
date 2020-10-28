import React, { Component } from 'react';

class App extends Component {

  render() {
    const arr =[
      [
       [
        {
          name: 'hamza',
          age: 23
        },
        {
          name: 'ali',
          age: 33
        },
        {
          name: 'ahmed',
          age: 23
        },
        {
          name: 'mustafa',
          age: 23
        },
        {
          name: 'aqib',
          age: 23
        },
        {
          name: 'muzzamil',
          age: 23
        }
       ]
      ]
    ]
    return (
      <div>
        <ul>
    
            {arr.map((el)=>{
              console.log(el);
            // return <li>{el.name}</li>
               return el.map((item,index)=>{
                console.log(item);
              // return <li key={index}>{item.age}</li>
              return item.map((value)=>{
              return <li>{value.name}</li>
              })

                })
             
            })
            }
        
        </ul>
      </div>
    );
  }
}

export default App;
