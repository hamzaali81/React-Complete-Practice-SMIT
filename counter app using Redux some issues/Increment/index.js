import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IncrementPart } from '../Redux/Actions/actions';

class Increment extends Component {
      _changeState(){
          this.props.ChangeStateToReducer();
      }


    render() {
        return (
            <div>
                <button onClick={this._changeState.bind(this)}>+</button> {' '}
        <h1>{this.props.userIncrement}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log('state of component',state);
    return {
        userIncrement: state.operationReducer.increment
    }
    // console.log(userdecrement);
}

const mapDispatchToProps = (dispatch) => {
    return({
     ChangeStateToReducer: ()=> {
         dispatch(IncrementPart())
     }
    })

}

export default connect(mapStateToProps,mapDispatchToProps)(Increment)