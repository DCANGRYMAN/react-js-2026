import React from "react";

/**
 * SolutionCard - displays a solution/example code.
 * Props: { children }
 */
export default function SolutionCard({ children }) {
  return (
    <details style={{ border: "1px solid #4caf50", padding: "1em", marginBottom: "1em" }}>
      <summary>Show Solution</summary>
      <pre>{children}</pre>
    </details>
  );
}