import React, { Component } from 'react';
import { updateUser } from '../../Redux/actions/authActions';
import { connect } from 'react-redux';

class Judge extends Component {
    constructor(props){
        super(props);


    }
componentDidMount(){
    console.log('props*******',this.props);
    this.props.updateUser({
        name: 'hamza',
        age: 50
    })
}

componentWillReceiveProps(nextProps){
    console.log('user Receive Props***',nextProps.user);
}
    render() {
        console.log('render******');
        return (
            <div>
                <h1>Judge</h1>
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
    updateUser : (user) => dispatch(updateUser(user))
 
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Judge);