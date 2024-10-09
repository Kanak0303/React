import "./App.css"
import React,{useState} from "react";

const App = () => {
  const[tasks, setTasks]=useState(JSON.parse(localStorage.getItem("tasks")) || []
);

  function save() {
    const input = document.getElementById("input")
    const newTask=input.value;

    if (newTask.trim()) { 
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks); 
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    input.value = ""; 
    }
  }

  function deleteTask(index){
      const updatedTasks = tasks.filter((task, i) => i !== index);
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  }

  
  return (
  <div>
    <input type="text" id="input" />
    <button id="button" style={{background:"green"}} onClick={() => save()}>SAVE</button>
    <ul id="ul" style={{listStyleType:"none"}}>
      {tasks.map((task, index) => (
        <li key={index}>
          <input type="checkbox" onClick={() => deleteTask(index)} />
          {task}
        </li>))}
    </ul>
  </div>
  );
};

export default App;