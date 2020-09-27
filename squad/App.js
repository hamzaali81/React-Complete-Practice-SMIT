import React, { Component } from 'react';
import { Provider } from 'react-redux'; 
import store from './Redux/store';
import { addCharacterById } from './Redux/Actions'
import CharacterList from './characterList'
import './Style/style.css'
import HeroList from './Hero/HeroList';


class App extends Component {
  constructor(){
    super();
    
  }



  render() {
    console.log('store.getState()', store.getState());
    store.dispatch(addCharacterById(2));
    console.log(store.dispatch(addCharacterById(2)));
    // console.log('store.subscribe()', store.subscribe());
    return (
      <Provider store={store}>

      <div className="App">
       <h1>SuperSquad</h1>
        
         <div className="col-md-6">
       <CharacterList />
         </div>
      
      <div className="col-md-6">
       <HeroList />
      </div>
      </div>

      </Provider>
    );
  }
}

export default App;
