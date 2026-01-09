import React, { useState } from "react";

function StateExample() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(10);

  return (
    <div className="card">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter - 1)}>
        Decrement Counter
      </button>
    </div>
  );
}

export default StateExample;
