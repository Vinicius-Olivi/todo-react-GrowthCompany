import { useState } from "react";
import "./style.css";
import "./global.css";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [task, setTask] = useState("");

  const [taskList, setTaskList] = useState([]);

  function handleCreateTask() {
    if (task === "") {
      toast.error("Please enter a task", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const idRandom = (num) => Math.floor(Math.random() * num);

      const newTask = {
        id: idRandom(10000),
        title: task,
        isComplete: false,
      };
      setTaskList([...taskList, newTask]);
    }
  }

  return (
    <div className="app">
      <ToastContainer />
      <div className="todo">
        <header>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleCreateTask}>
            <IoMdAdd />
          </button>
        </header>

        {taskList.map((task) => (
          <div key={task.id} className="task-container">
            <div className="check-title">
              <label className="checkbox-container">
                <span className="checkmark"></span>
              </label>

              <p>{task.title}</p>
            </div>
            <div>
              <MdOutlineClose />
            </div>
          </div>
        ))}

        {/* mock test */}
      </div>
    </div>
  );
}

export default App;
