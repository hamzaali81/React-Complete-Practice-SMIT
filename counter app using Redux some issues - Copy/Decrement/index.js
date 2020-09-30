import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DecrementPart } from '../Redux/Actions/actions';
import { thunk } from 'redux-thunk'

console.log(connect);

class Decrement extends Component {
    
    // decrement=()=>{
    // //    console.log('hello');
    //    DecrementPart();
    // }
    // this._changeState()=this._changeState.bind(this)

    

    _changeState(){
       this.props.ChangeStateToReducer()
    }

    render() {
        // console.log(this._changeState());
        console.log(this.props.userdecrement);
        return (
            <div>
                {/* <button onClick={this.ChangeStateToReducer}>-</button>  */}
            
                {/* <button onClick={this._changeState.bind(this)}>Testing</button> */}
                <button onClick={this._changeState.bind(this)}>-</button>
        {/* <h1>{this.props.ChangeStateToReducer()}</h1> */}
        <h1>{this.props.userdecrement}</h1>
      
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log('state of component',state);
    return {
        userdecrement: state.operationReducer.decrement
    }
    // console.log(userdecrement);
}

const mapDispatchToProps = (dispatch) => {
    return({
     ChangeStateToReducer: ()=> {
         dispatch(DecrementPart())
     }
    })

}

export default connect(mapStateToProps,mapDispatchToProps)(Decrement)