import React, { Component } from "react";

export default class App extends Component {
  render() {
    // const text= {finalText:{mytext:'Sylani Meri jaan'}}
    // const list = [
    //   { name: "hamza", todos: ["burger", "sandwitch", "pizza", "nihari"] },
    //   { name: "ali", todos: ["burger", "sandwitch", "pizza", "nihari"] },
    // ];
  const numberlist=[[1,2,3,4,5],[6,7,8]]

    return (
      <div>
        {/* <h1>{text.finalText.mytext}</h1> */}
     {/* <ul>
       {list.map((value)=>
       <li>
         {value.name}
         <ol>
           {value.todos.map((item,index)=>
           <li key={index}>{item}</li>
           )}
         </ol>
       </li>
       )}
     </ul> */}

     <ul>
       {numberlist.map(value=>
         <li>{value.map((item)=>
         <li>{item}</li>
          )}</li>
       )}
     </ul>
      </div>
    );
  }
}
