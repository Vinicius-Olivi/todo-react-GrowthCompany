// TaskInput.jsx
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskInput = ({ handleCreateTask }) => {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (task === "") {
      toast.info("Please enter a task", { autoClose: 2000 });
    } else {
      handleCreateTask(task);
      setTask("");
      toast.success("Task added successfully", { autoClose: 2000 });
      return;
    }
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  return (
    <div>
      <header>
        {/* <ToastContainer /> */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            placeholder="Enter a task"
            onChange={(e) => setTask(e.target.value)}
          />
          <button onKeyDown={handleKeyPress} type="submit">
            <IoMdAdd />
          </button>
        </form>
      </header>
    </div>
  );
};

export default TaskInput;
