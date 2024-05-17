// Task.jsx
import React from "react";
import { MdOutlineClose } from "react-icons/md";

const Task = ({ task, handleToggleTaskComplete, handleDeleteTask }) => {
  return (
    <div
      className={
        task.isComplete ? "task-container-completed" : "task-container"
      }
    >
      <div className="check-title">
        <label className="checkbox-container">
          <input
            type="checkbox"
            onClick={() => handleToggleTaskComplete(task.id)}
          />
          <span className="checkmark"></span>
        </label>

        <p>{task.title}</p>
        <div>
          <MdOutlineClose onClick={() => handleDeleteTask(task.id)} />
        </div>
      </div>
    </div>
  );
};

export default Task;
