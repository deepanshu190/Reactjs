import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Use of Hooks
  let [counter,setCounter]=useState(15)


// let counter=15
const addValue=()=>{
  console.log("Value added",counter);
  // counter=counter+1;
  setCounter(counter+1)
}
const removevalue=()=>{
  console.log("Value remove",counter);
  // counter=counter+1;
  setCounter(counter-1)
}
  return (
    <>
     <h1>Chai aur react</h1> 
     <h2>Counter value:{counter}</h2>
     <button onClick={addValue}>Add value:{counter}</button>
     <br />
     <button onClick={removevalue}>Remove value:{counter}</button>
    </>
  )
}

export default App
