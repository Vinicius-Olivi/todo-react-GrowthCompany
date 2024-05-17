import React, { useState } from "react";
import "./style.css";
import "./global.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";

function App() {
  const [taskList, setTaskList] = useState([]);

  function handleCreateTask(taskTitle) {
    const idRandom = (num) => Math.floor(Math.random() * num);

    const newTask = {
      id: idRandom(10000),
      title: taskTitle,
      isComplete: false,
    };

    setTaskList([...taskList, newTask]);
  }

  function handleToggleTaskComplete(id) {
    const updatedTaskList = taskList.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task,
    );

    setTaskList(updatedTaskList);
  }

  function handleDeleteTask(id) {
    const filteredTasks = taskList.filter((task) => task.id !== id);
    setTaskList(filteredTasks);
    toast.error("Task deleted successfully", { autoClose: 2000 });
  }

  return (
    <div className="app">
      <ToastContainer />
      <div className="todo">
        <TaskInput handleCreateTask={handleCreateTask} />
        {taskList.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleToggleTaskComplete={handleToggleTaskComplete}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
