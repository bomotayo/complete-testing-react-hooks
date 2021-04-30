import React, { useState } from "react";
import Basic from "./components/basic/index";
import Counter from "./components/counter/index";
import TestHook from "./components/react-testing-lib/test_hook";
import TestAxios from "./components/react-testing-lib/test_hook_axios";
import TestHookContext from "./components/react-testing-lib/test_hook_context";
import HooksForm1 from "./components/react-testing-lib/test_hook_form";
import TestHookReducer from "./components/react-testing-lib/test_hook_reducer";
import Context from "./components/store/context";

function App() {
  const [state, setState] = useState("Some Text");
  const [name, setName] = useState("Moe");

  const changeName = () => {
    setName("Steve");
  };

  const changeText = () => {
    setState("Some Other Text");
  };

  return (
    <div className="App">
      <TestAxios url="https://jsonplaceholder.typicode.com/posts/1" />

      <Basic />
      <h1> Counter </h1>
      <Counter />
      <h1> Basic Hook useState </h1>
      <TestHook name={name} changeName={changeName} />
      <TestHookReducer />
      <h1>Basic Hook useContext</h1>
      <Context.Provider
        value={{ changeTextProp: changeText, stateProp: state }}
      >
        <TestHookContext />
      </Context.Provider>
      <br />
      <HooksForm1 />
    </div>
  );
}

export default App;
