import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Home';
import About from './About';

class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <h1 style={{backgroundColor:"Red",textAlign:"center"}}>Header</h1>
          <Switch>
          <Route exact path="/">
            
            <Home />
          </Route>
          <Route path="/About" component={About} />
            {/* <About />
          </Route> */}
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
