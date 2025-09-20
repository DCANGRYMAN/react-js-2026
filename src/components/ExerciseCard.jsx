import React from "react";

/**
 * ExerciseCard - displays an exercise prompt.
 * Props: { title, description, children }
 */
export default function ExerciseCard({ title, description, children }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1em", marginBottom: "1em" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>{children}</div>
    </div>
  );
}