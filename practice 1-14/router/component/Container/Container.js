import React, { Component } from 'react';


class Container extends Component {
    constructor(){
      super();

    }



  render() {
    // const {user}=this.state;
    return (
      <div style={{width: '70%',height: '70%',borderRadius:'15%',backgroundColor: 'lightpink',padding: '30px'}}>
          Hello World
          {this.props.children}
      </div>
    );
  }
}

export default Container;
