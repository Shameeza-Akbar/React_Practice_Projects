import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("yellow");
  function Red() {
    setColor("red");
  }
  function Yellow() {
    setColor("Yellow");
  }
  function Pink() {
    setColor("pink");
  }
  function Blue() {
    setColor("blue");
  }
  function White() {
    setColor("white");
  }
  function Brown() {
    setColor("brown");
  }
  function Orange() {
    setColor("orange");
  }
  function Green() {
    setColor("green");
  }
  function Grey() {
    setColor("grey");
  }
  function Black() {
    setColor("black");
  }
  return (
    <>
      <div className="box">My Box</div>
      <h1>Change Box Color</h1>
      <button onClick={Red}>Red</button>
      <br />
      <button onClick={Yellow}>Yellow</button>
      <br />
      <button onClick={Pink}>Pink</button>
      <br />
      <button onClick={Blue}>Blue</button>
      <br />
      <button onClick={White}>White</button>
      <br />
      <button onClick={Brown}>Brown</button>
      <br />
      <button onClick={Orange}>Orange</button>
      <br />
      <button onClick={Green}>Green</button>
      <br />
      <button onClick={Grey}>Grey</button>
      <br />
      <button onClick={Black}>Black</button>
      <br />
    </>
  );
}

export default App;
