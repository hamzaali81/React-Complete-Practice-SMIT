import React, { Component } from 'react';
import { UpdateUser,RemoveUser } from '../Redux/actions/authActions';
import { connect } from 'react-redux';

class kids extends Component {
constructor(props){
    super(props);

    }


    componentWillReceiveProps(nextProps) {
        console.log('nextProps*****###',nextProps.user);
         
        }



    render() {
        return (
            <div>
                <h1>Kids</h1>
            </div>
        )
    }
}




const mapStateToProps = (state) =>{
    return {
        user: state.authReducers.user

    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
      
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(kids)