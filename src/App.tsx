import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<any>([]);
  const handleSubmit = (e: any): void => {
    console.log(e.target.text.value, "WTF EST PASANDO");
    e.preventDefault();
    setTasks([
      ...tasks,
      { id: +new Date(), text: e.target.text.value, completed: false },
    ]);
    e.target.text.value = "";
  };
  const handleDelete = (id: any): void => {
    setTasks(tasks.filter((e: any) => e.id !== id));
  };
  const handleDone = (id: any): void => {
    setTasks(
      tasks.map((e: any) =>
        e.id === id ? { ...e, completed: !e.completed } : e
      )
    );
  };
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>SUPERMARKET LIST</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text" style={{ color: "white" }}>
          YOUR TASK
        </label>{" "}
        <input type="text" name="text" />
        <button type="submit">ADD</button>
      </form>
      {tasks.map((e: { id: ""; text: ""; completed: boolean }) => (
        <ul>
          <li
            style={{
              color: "white",
              listStyle: "none",
              textDecoration: `${e.completed ? "line-through" : ""}`,
            }}
          >
            {e.text}
            <button onClick={() => handleDelete(e.id)}>X</button>
            <button onClick={() => handleDone(e.id)}>DONE</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;
