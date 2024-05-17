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
      toast.warning("Please enter a task", { autoClose: 2000 });
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
        <form onSubmit={handleSubmit}>
          <input
            className="input-submit"
            type="text"
            value={task}
            placeholder="Enter a task"
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="submit-btn"
            onKeyDown={handleKeyPress}
            type="submit"
          >
            <IoMdAdd />
          </button>
        </form>
      </header>
    </div>
  );
};

export default TaskInput;
