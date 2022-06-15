import "./Game.css";
import React, { useState } from "react";

function Game() {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1>Your Score is: {state}</h1>
      <button onClick={() => setState(state + 1)}>Add 1</button>
    </div>
  );
}

export default Game;
