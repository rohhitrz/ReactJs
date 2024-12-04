import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(10);

  const handleIncrese = () => {
    
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count > 0) {
    setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrese}>Increse</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
