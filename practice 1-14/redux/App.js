import React, { Component } from 'react';
import { connect } from 'react-redux';
// import updateUser from './store/actions/actions';
// import { setData } from './store/actions/actions';
import { incrementCounter,apifetching } from './store/actions/actions';

class App extends Component {

componentDidMount(){
  console.log('api',this.props.mydataApi);
  // return this.props.mydataApi
  // this.setState({
  //   data: this.props.mydataApi 
  // })
  return this.props.mydataApi
}
componentWillReceiveProps(nextProps){
  console.log('componenetWillReceiveProps',nextProps.mydataApi);
}
  render() {
    console.log('this.props',this.props);
    // console.log('this.props',this.props.mydataApi);

    return (
      <div>
        <h1>Hello</h1>
    <h2>{this.props.user}</h2>
    {/* <button onClick={()=>this.props.updateUser()}>Click Me</button> */}
    {/* <h2>{this.props.updateUser}</h2> */}
    {/* <button onClick={()=>this.props.setData()}>Set Data</button> */}
    <button onClick={()=>this.props.userIncrement()}>increment</button>
      </div>
    );
  }
}

// const mapStateToProps = (state)=>{
// console.log(state.authReducer);
// return{
//   user: state.authReducer.state
// }
// }

// const mapDispatchToProps=(dispatch)=>{
//   // setData: setData
//   //dispatch connect function in redux
//   return {
//      setData: (id)=> dispatch(setData(id))
//   }
// }


const mapStateToProps=(state)=>{
  console.log('state',state);
  return{
    user: state.authReducer.data,
    mydataApi: state.authReducer.userdataAPi
  }
}

const mapDispatchToProps=(dispatch)=>{
   return ({
    // userIncrement:()=>dispatch(incrementCounter())
    userIncrement: ()=>{dispatch(incrementCounter())},
    api: ()=>{dispatch(apifetching())}
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
