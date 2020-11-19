import React,{ useState,useContext } from 'react';
import './App.css';
import themes from './ThemeContext';


const App = () => {
  // const [day, setDay] = useState(true);

  const themes = {
    light1: {
      foreground: "#12334",
      background: "green"
    },
    dark2: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  const lightTheme = useContext(themes.light1)
  return (
    <div>
    {/* <div className={`${day ? 'light':'dark'}`}> */}
    {/* //   <h1>Day mode {day ? 'morning': 'night'}</h1> */}
    //   {/* <button  onClick={()=>setDay(!day ? day : day)}>Morning</button> */}
    {/* //   <button onClick={()=>setDay(!day)}>Update</button> */}
  <h1 style={lightTheme}>
    <p>Assalam o alakium</p>
  </h1>
    </div>
  );
}

export default App;
