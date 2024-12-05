import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myobj={name:"alpha", age: 20, color: 'green'}
  let newArray= [1,2,3,4,5];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card username="webpage" someobj={myobj} />
      <Card username="Rohit" />
      <Card name="abc"/>
      <Card someArray={newArray} />
    </>
  );
}

export default App;
