import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateUser,RemoveUser } from './store/actions/action'

class App extends Component {

  componentDidMount(){
    console.log('props *****',this.props);
    this.props.modifyUser({ name: 'hamza',age: 22 })
setTimeout(()=> this.props.removeUser(),4000)
}


  render() {
    console.log('this.props',this.props);
    return (
      <div>
        <h1>hello</h1>
    {/* <h2>{this.props.user.name}</h2> */}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  console.log('sate from component*****',state);
  return{
      user: state.authReducers.user
  }
}

const mapDispatchToProps = (dispatch) =>{
  console.log('dispatch*****',dispatch);
  return{
      modifyUser: (user) => dispatch(UpdateUser(user)),
      updateUser: ()=> dispatch(RemoveUser())
      

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
