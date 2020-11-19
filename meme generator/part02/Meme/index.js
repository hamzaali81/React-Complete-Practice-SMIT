import React, { Component } from 'react';
import { connect } from 'react-redux';

class Memes extends Component {
    render() {
        return (
            <div>
                <h1>Memes</h1>
            </div>
        );
    }
}



const mapStateToProps = (state)=>{
    console.log(state);
    return {
        state
    }
  }
  export default connect(mapStateToProps,null)(Memes);
