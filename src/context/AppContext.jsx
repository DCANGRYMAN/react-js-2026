import React, { createContext, useState } from "react";

export const AppContext = createContext();

/**
 * Context Provider for global state demonstration.
 */
export function AppProvider({ children }) {
  const [username, setUsername] = useState("Student");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      {children}
    </AppContext.Provider>
  );
}