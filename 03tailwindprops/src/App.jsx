import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Deepanshu",
    age:20
  }
  let newArr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4'>Tailwind css</h1>
     <Card username="Deepanshu"/>
     <Card username="Shukla" />
    </>
  )
}

export default App
