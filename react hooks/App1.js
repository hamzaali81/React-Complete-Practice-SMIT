//React hooks
//useState,useEffect,useContext,customHook

import React, { useState, useContext, useEffect } from "react";
// import { ThemeContext, FlagContext } from "./ThemeContext";

const App = (props) => {
  const [name, setName] = useState("hamza");
  // const themeContext = useContext(ThemeContext);
   // const flagContext = useContext(FlagContext);
  const width = useWindow();


  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  // useEffect(()=>{
  //   document.title = name
  // },[])
  return (
    <div>
      <h1>{name}</h1>
      <input type="text" onChange={handleChange}/>
      {/* <button onClick={handleChange}>Change Name</button> */}
      {/* {themeContext}
      {flagContext} */}
      <h1>{width}</h1>
    </div>
  );
};

function useWindow(){
  const [width,setWidth] = useState(window.innerWidth)
  useEffect(()=>{
   const handleResize= ()=> setWidth(window.innerWidth);
   window.addEventListener('resize',handleResize); 
   return ()=>{
     window.removeEventListener('resize',handleResize); 
   }
  })
  return width
}

export default App;



