import "./App.css";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  function inc() {
    setCounter(counter + 1);
  }
  function dec() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(0);
  }
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
