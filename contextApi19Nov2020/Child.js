import React, { useContext, useState } from "react";
import counterContext from "./ContextApi/counterContex";

export default function Child() {
  const counterValue = useContext(counterContext);
  let [counter, setCounter] = useState(counterValue);
  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>Child</h1>
      <p>{counterValue}</p>
      <h1>Counter bhai kesa hai {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}
