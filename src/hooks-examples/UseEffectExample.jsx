import React, { useState, useEffect } from "react";

/**
 * Example: Using useEffect for Side Effects
 *
 * This component demonstrates the useEffect hook for logging and data fetching.
 * Try modifying the dependencies or side effect!
 */
function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    // You can also fetch data or run timers here!
    return () => {
      // Cleanup (optional)
      document.title = "React App";
    };
  }, [count]);

  return (
    <div>
      <h2>useEffect Example</h2>
      <p>Check the browser tab title for updates!</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEffectExample;