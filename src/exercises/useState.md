# Exercise: Counter with useState

## Task

Create a simple counter component using the `useState` hook.  
The counter should display a number, and have buttons to increment and decrement the value.

## Requirements

- Use the `useState` hook for state.
- Display the current count.
- Add "Increment" and "Decrement" buttons.
- Optional: Add a "Reset" button to set the count back to zero.

## Example Solution

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```
