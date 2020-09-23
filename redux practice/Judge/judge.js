import React, { Component } from 'react'
import { UpdateUser,RemoveUser } from '../Redux/actions/authActions';
import { connect } from 'react-redux';


class judge extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log('props *****',this.props);
        this.props.modifyUser({ name: 'hamza',age: 22 })
    setTimeout(()=> this.props.removeUser(),4000)
    }
    
    componentWillReceiveProps(nextProps){
        console.log('user***** will receive',nextProps.user);
    }
    
    render() {
        console.log('render*****');
        return (
            <div>
                <h1>judge</h1>
            </div>
        )
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
        removeUser: ()=> dispatch(RemoveUser())
        

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(judge)