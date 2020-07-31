import React, { Component } from 'react';
import Booklist from './bookList/Booklist';

class App extends Component {
  render() {
    return (
      <div>
        <Booklist name="hamza" job="developer" />
      </div>
    );
  }
}

export default App;