import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      count: 0,
      data: []
    }

    console.log('constructor***');
  }

//  static getDerivedStateFromProps(props,state){
//     console.log('getDerivedStateFromProps state',state);
//     // return{
//     //   count: state.count++
//     // }
//   }

// componentDidMount(){
//   console.log('hello');
//   fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => 
//     // console.log(json)
//   this.setState({
//     data: json
//   })
//   )
// }

shouldComponentUpdate(){
  //is mein hum rendering ko rokh sakta hain
  if(this.state.count<5){
    return true
  }
  else{
    return false
  }
}

getSnapshotBeforeUpdate(prevProps,prevState){
     console.log('prevState',prevState);
     return this.state.count
}

componentDidUpdate(nextState,nextProps,snapshot){
  console.log(this); 
  console.log('nextState',nextState);
  console.log('snapshot',snapshot);
 

}

  render() {
    console.log('render');
    // console.log(this.state.data);
    return (
      <div>
        <h1>hello</h1>
    <h1>{this.state.count}</h1>
    {/* <ul>
    {this.state.data.map((el)=>{
      console.log(el.title);
    return <li>{el.title}</li>
    })}  
    
    </ul> */}
    <button onClick={()=>{this.setState({count: this.state.count+1})}}>Counter</button>
      </div>
    );
  }
}

export default App;
