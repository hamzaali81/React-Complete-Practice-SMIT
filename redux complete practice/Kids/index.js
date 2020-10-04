import React, { Component } from 'react';
import { connect } from 'react-redux';



class Kids extends Component {

  constructor(props){
      super(props)
  }

  
  componentWillReceiveProps(nextProps){
      console.log('nextProps Kids*****',nextProps);
      console.log('nextProps Kids*****',this.props);
  }


    render() {

        console.log('Ye tu hoga',this.props);
        return (
            <div>
                <h1>Kids</h1>
        <h1>{this.props.stateModify}</h1>
        {/* <h1>{this.props.stateModify.parcel}</h1> */}
            </div>
        )
    }
}



const mapStateToProps = (state)=>{
    console.log('state from component',state);
    return {
        stateModify: state.authReducer.user
    }

}

const mapDispatchToProps = (dispatch) =>{
//  console.log('dispatch****',dispatch);
   return {
    //    ModifyUser: () => dispatch(UpdateUser())
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Kids)