import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

/**
 * Example: Using useContext to access global state.
 */
function UseContextExample() {
  const { username, setUsername } = useContext(AppContext);

  return (
    <div>
      <h2>useContext Example</h2>
      <p>Username from context: {username}</p>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Change username"
      />
    </div>
  );
}

export default UseContextExample;
