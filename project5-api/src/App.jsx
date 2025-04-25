import { useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState([]);
  async function handleFetch() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
  }
  return (
    <>
      <h1>Advice</h1>
      <p>{advice}</p>
      <button onClick={handleFetch}>Next Advice</button>
    </>
  );
}

export default App;
