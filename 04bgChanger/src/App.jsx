import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center
    bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center
    gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
       <button onClick={()=>setColor("violet")} className='outline-none px-4 rounded-3xl text-white'
       style={{backgroundColor:"violet"}} >Violet</button>
       <button onClick={()=>setColor("Indigo")}className='outline-none px-4 rounded-3xl text-white'
       style={{backgroundColor:"Indigo"}} >Indigo</button>
       <button onClick={()=>setColor("Blue")}className='outline-none px-4 rounded-3xl text-white'
       style={{backgroundColor:"Blue"}}>Blue</button>
       <button onClick={()=>setColor("Green")}className='outline-none px-4 rounded-3xl text-white'
       style={{backgroundColor:"green"}} >Green</button>
       <button onClick={()=>setColor("yellow")}className='outline-none px-4 rounded-3xl text-white'
       style={{backgroundColor:"yellow"}} >Yellow</button>
       <button onClick={()=>setColor("orange")}className='outline-none px-4 rounded-3xl text-white'
       style={{backgroundColor:"orange"}} >Orange</button>
       <button onClick={()=>setColor("red")}className='outline-none px-4 rounded-3xl text-white'
       style={{backgroundColor:"red"}} >Red</button>
      </div>
      </div>
     </div> 
    </>
  )
}

export default App
