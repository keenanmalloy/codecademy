import { useState } from "react";

function useStatePrac() {
  // count = value of state, setCount = function that updates state, useState(0) = 0 which is the initial value of state
  const [count, setCount] = useState(0);

  const increment = () => {
    // count += 1; // Wrong
    setCount(count + 1); // Right
  };

  const decrement = () => {
    // count -= 1; // Wrong
    setCount(count - 1); // Right
  };
  return (
    <div>
      <h1>Welcome to my counter app</h1>
      <p>The count is {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default useStatePrac;
