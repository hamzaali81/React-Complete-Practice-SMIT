import React,{useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [num,setNum] = useState();
  const [name,setname] = useState();
  const [moves,setmove] = useState();
  useEffect(()=>{
    async function getData(){
      const result= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(result);
      setname(result.data.name);
      setmove(result.data.moves.length);
    }
    getData();
  },[num]) 

  return (
    <div>
      <h1>Hello</h1>
  <p>This is value {num}</p>
  <p>This is name {name}</p>
  <p>This is move {moves}</p>
   <select onChange={(e)=>{setNum(e.target.value)}} value={num}>
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
   </select>
    </div>
  );
}

export default app2;