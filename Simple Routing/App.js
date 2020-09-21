import React from 'react';
import logo from './logo.svg';
import Menu from './Menu/';
import About from './Screen/Component/About/About';
import Contact from './Screen/Component/Contact/Contact';
import Home from './Screen/Component/Home/Home';

import { BrowserRouter,Route,Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
     <h1> Welcom Router :)</h1>
      <Menu />
<Switch>
 <Route exact path="/">
          <Home />
      </Route>
      
      <Route exact path="/contact">
           <Contact />
      </Route>
      <Route exact path="/about">
            <About />
      </Route>
</Switch>
            
    </div>
    </BrowserRouter>
  );
}

export default App;
