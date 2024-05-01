import React from 'react';

export default function Spoilers({ children }) {
  return (
    <details style={{cursor: "pointer", userSelect: "none"}}>
        <summary><b>Click to reveal spoilers</b></summary>
        {children}
    </details>
  );
}