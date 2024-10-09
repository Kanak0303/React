import { useState } from 'react'
import './App.css'

function counter(){
  const[count, setCount]=useState(0);

  const increase=() =>{
    setCount(count+1);
  }
  const decrease=() =>{
    setCount(count-1);
  };

  return (
    <div>
      <h2 id="countno">{count}</h2>
      <div id="buttons">
        <button id="increase" onClick={increase}>Increment</button>
        <button id="decrease" onClick={decrease}>Decrement</button>
      </div>
    </div>
  );
}
export default counter;
