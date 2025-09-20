import React, { useState } from "react";

/**
 * Example: Using useState for Counter
 * 
 * This component demonstrates how to use the useState hook for local state management.
 * Try changing the initial value, or adding more state variables!
 */
function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>useState Example: Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default UseStateExample;