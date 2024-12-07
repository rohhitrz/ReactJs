import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const[length,setLengtgh]=useState(8);
const[numbers,setNumbers]=useState(false);
const[characters,setCharacters]=useState(false);
const [Password,setPassword]=useState("");

const passwordGenrator=()=>{
  
}

  return (
    <>
     <h1 className='text-4xl text-center'>Password Generator</h1>
    </>
  )
}

export default App
