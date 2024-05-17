// TaskInput.jsx
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskInput = ({ handleCreateTask }) => {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (task === "") {
      toast.error("Please enter a task");
    } else {
      handleCreateTask(task);
      setTask("");
    }
  }

  return (
    <div>
      <ToastContainer />
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">
            <IoMdAdd />
          </button>
        </form>
      </header>
    </div>
  );
};

export default TaskInput;
