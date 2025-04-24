import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const newTask = fd.get("Task");
    setList((prev) => [...prev, { task: newTask, Completed: false }]);
  }
  function handleCompletion(index) {
    setList((prev) => {
      const newList = [...prev];
      newList[index] = {
        task: newList[index].task,
        Completed: true,
      };
      return newList;
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add Task</label>
        <input type="text" placeholder="Add New Task" name="Task"></input>
        <button>ADD</button>
      </form>
      <ol key={list.index}>
        {list.map((task, index) => (
          <li key={index}>
            {task.task}
            <button
              onClick={() => handleCompletion(index)}
              disabled={task.Completed ? true : false}
            >
              {task.Completed ? "Complete" : "Done?"}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
