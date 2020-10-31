import React, { useState } from 'react';
import ResourceList from './ResourceList/ResourceList';

// class App extends Component {
//   state= {
//     resourceName: 'post'
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={()=>this.setState({resourceName: 'post'})}>post</button>
//         <button onClick={()=>this.setState({resourceName: 'todos'})}>todos</button>
//         <ResourceList />
        
//       </div>
//     );
//   }
// }


const App = ()=>{
  const [ resourceName,setResourceName ] = useState('posts');
  return(
    <div>
      <button onClick={()=>(setResourceName('posts'))}>post</button>
          <button onClick={()=>(setResourceName('todos'))}>todos</button>
          <ResourceList resourceName={resourceName}/>
    </div>
  )
}




export default App;
