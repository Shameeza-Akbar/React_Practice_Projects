import { useState } from "react";
import "./App.css";

const colors = [
  {
    value: "red",
    label: "Red",
  },
  {
    value: "yellow",
    label: "Yellow",
  },
  {
    value: "pink",
    label: "Pink",
  },
  {
    value: "blue",
    label: "Blue",
  },
];

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <>
      <div className="box" style={{ backgroundColor: color }}>
        My Box
      </div>
      <h1>Change Box Color</h1>
      {colors.map((color) => (
        <>
          <button onClick={() => setColor(color.value)}>{color.label}</button>
          <br />
        </>
      ))}
    </>
  );
}

export default App;
