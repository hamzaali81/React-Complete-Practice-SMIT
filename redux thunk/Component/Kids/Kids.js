import React, { Component } from 'react';
import { connect } from 'react-redux';

class Kids extends Component {

   componentWillReceiveProps(nextProps){
    // console.log('user Receive Props***',nextProps.user);
    console.log('nextProps Kids.js',nextProps.user);

}
    render() {
        return (
            <div>
               <h1>Kids</h1> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state from Componet****',state);
    return{
        user: state.authReducers.user
    }
}
const mapDispatchToProps = (dispatch) => {
return{
  

}
}

export default connect(mapStateToProps,mapDispatchToProps)(Kids);