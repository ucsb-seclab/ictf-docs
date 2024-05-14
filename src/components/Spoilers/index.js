import React from 'react';

const summaries = {
  "resources": "Helpful resources",
  "writeup": "Solution",
};

export default function Spoilers({ type, children }) {
  return (
    <details style={{ cursor: "pointer", userSelect: "none", marginBottom: "1em" }}>
      <summary><b>{summaries[type]}</b></summary>
      {children}
    </details>
  );
}