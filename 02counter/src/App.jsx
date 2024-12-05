import { useState } from 'react'

function App() {
let [count,setCount]=useState(1);
const addValue=()=>{
  setCount(count+1);
  
}
const decreaseValue =()=>{
  setCount(count-1);
  
}
 return (
  <div>
    <h1>hello chacha</h1>
    <h2>Counter:{count}</h2>
    <button onClick={addValue}>Increase</button>
    <button onClick={decreaseValue}>Decrease</button>

  </div>
 )
}

export default App
