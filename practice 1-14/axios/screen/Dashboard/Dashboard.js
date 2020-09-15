import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      dashboardtext: this.props.text,
      isShow: false,
      toggle: false
    }
    // console.log(props);

    }
    
    // componentWillMount(){
    //   console.log('componentWillMount*****');
    //   fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    // }
                
    
    // componentWillReceiveProps(nextProps){
    //                console.log('componentWillReceiveProps=>',this.props.text);
    //                console.log('componentWillReceiveProps=>',nextProps.text);
    //                this.setState({dashboardtext: nextProps.text})
    //              }
  


// componentWillUpdate(nextProps,nextState){
//   // console.log('componentWillUpdate',this.props.text);
//   // console.log('componentWillUpdate',nextProps);

//   console.log('componentWillUpdate',this.state.isShow);
//   console.log('componentWillUpdate',nextState.isShow);
// }



static getDerivedStateFromProps(props,state){
          console.log('props*****',props);
          console.log('state*****',state);
          console.log('this*****',this);
}
getSnapshotBeforeUpdate(prevProps,prevState){
    if(this.state.text =='hamza'){
return{
      status: 'behtreen hogya'
}
return null
    }
}

componentDidUpdate(prevProps,prevState,snapShot){
//   console.log('prevProps, this.props.text ',this.props.text);
//   console.log(prevProps,this.props.text);
//  if(this.props.text !== prevProps.text){

//    alert('Change detected in props text');
//  }
console.log('componentDidUpdate',snapShot);
}


componentWillUnmount(){
  console.log('ComponentWillUnmount');
}

componentDidMount(){
  fetch('https://hn.algolia.com/api/v1/search?query=redux')
.then(response => response.json())
.then(result => console.log('result*****',result))
.catch(error => error);
}

  render() {
    const {dashboardtext,isShow,toggle}= this.state;
    // console.log(dashboardtext);
    // console.log('render****?');
    return (

      <div>
      <h1>Dashboard</h1>
      Ye state ka text hai --{dashboardtext} <br/>
      Ye props ka text hai --{this.props.text} 
      {/* <button onClick={()=>{this.setState({isShow: !isShow})}}>Toggle</button> */}
      <button onClick={()=>{this.setState({toggle: !toggle})}}>Toggle</button>
      </div>
    );
  }

}
export default Dashboard;
