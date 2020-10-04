import React, { Component } from 'react';
import { connect } from 'react-redux'
import { UpdateUser,RemoveUser } from '../Redux/Actions/actions'


class Judge extends Component {
constructor(props){
    super(props)
}

    componentDidMount(){
      console.log('this.props',this.props);
      console.log('this.props.ModifyUser',this.props.ModifyUser());
      this.props.ModifyUser()
      
  }

  componentWillReceiveProps(nextProps){
      console.log('this.prop update',this.props.user);
      console.log('this.prop update',nextProps.user);
  }



  render() {
      console.log('this.props.stateModify',this.props.stateModify);
    //   console.log('this.props.ModifyUser.user',this.props.ModifyUser.user);
        return (
            <div>
                <h1>Judge</h1>
        <h1>{this.props.stateModify}</h1>
        <h1>{this.props.ModifyUser.user}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
     console.log('state from component',state.authReducer.user3);
     return {
         stateModify: state.authReducer.user2
     }

}

const mapDispatchToProps = (dispatch) =>{
//  console.log('dispatch****',dispatch);
    return {
        ModifyUser: () => dispatch(UpdateUser())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Judge)
// export default connect(mapStateToProps)(Judge)