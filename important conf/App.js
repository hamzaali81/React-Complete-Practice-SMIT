import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateUser from './store/actions';

class App extends Component {
  constructor(){
    super()
  }

  changeState(){
    this.props.changeUser()
  }
  render() {
    // console.log(this.props.changeUser());
    console.log('this.props.user',this.props);
    return (
      <div>
        <h1>APP</h1>
    <h1>{this.props.user}</h1>
     <button onClick={this.changeState.bind(this)}>Click Me</button>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    user: state.rootReducer.userName
  }
}

const mapDispatchToProps = (dispatch)=>{
  // console.log(dispatch);
  // return{
  //   changeUser: ()=>{dispatch(updateUser())}
  // }
  // console.log(state);
  return({
    // userName:
    changeUser: ()=>{dispatch(updateUser())} 
  })
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
