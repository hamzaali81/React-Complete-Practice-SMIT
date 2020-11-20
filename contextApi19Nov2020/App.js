import React from 'react';
import Parent from './Parent';
import counterContext from './ContextApi/counterContex';


const App = () => {
  return (
    <counterContext.Provider value={10}>     
    <div>
      <h1>Main Component</h1>
      <Parent />
    </div>
    </counterContext.Provider>
  );
}

export default App;
