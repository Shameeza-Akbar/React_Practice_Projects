import "./App.css";
import { useState } from "react";

function App() {
  const [userName, setName] = useState("");
  const [userMail, setMail] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    setMail(fd.get("email"));
    setName(fd.get("name"));
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="Name" name="name"></input>
        <label>Email</label>
        <input type="email" placeholder="E-mail" name="email"></input>
        <button>Submit</button>
      </form>
      <p>Name: {userName}</p>
      <p>Email: {userMail}</p>
    </>
  );
}

export default App;
