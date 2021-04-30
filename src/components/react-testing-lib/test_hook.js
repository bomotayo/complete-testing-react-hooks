import React, { useState } from "react";

function TestHook(props) {
  const [state, setState] = useState("Initial State");

  const changeState = () => {
    setState("Initial State Changed");
  };

  const changeNameToSteve = () => {
    props.changeName();
  };

  return (
    <div>
      <button onClick={changeState}>State Change Button</button>
      <p>{state}</p>
      <button onClick={changeNameToSteve}>Change Name</button>
      <p>{props.name}</p>
    </div>
  );
}

export default TestHook;
