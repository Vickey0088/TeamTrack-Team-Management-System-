import React, { useState, useContext } from "react";
import "../styles/CreateTask.css";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  // const [newtask, setNewTask] = useState({});
  const authData = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const taskObj = {
      title: taskTitle,
      date: taskDate,
      category,
      description: taskDescription,
      active: false,
      new_task: true,
      failed: false,
      completed: false,
    };

    const data = JSON.parse(localStorage.getItem("employees"));

    data.forEach(function (elem) {
      if (asignTo.trim().toLowerCase() === elem.first_name.toLowerCase()) {
        if (!Array.isArray(elem.tasks)) elem.tasks = [];
        elem.tasks.push(taskObj);
        console.log(elem);

        if (!Array.isArray(elem.categories)) elem.categories = [];
        if (category && !elem.categories.includes(category)) {
          elem.categories.push(category);
        }

        if (!elem.task_number) {
          elem.task_number = {
            new_task: 0,
            active: 0,
            completed: 0,
            failed: 0,
          };
        }
        elem.task_number.new_task = elem.tasks.filter((t) => t.new_task).length;
        elem.task_number.active = elem.tasks.filter((t) => t.active).length;
        elem.task_number.completed = elem.tasks.filter(
          (t) => t.completed
        ).length;
        elem.task_number.failed = elem.tasks.filter((t) => t.failed).length;
      }
    });

    localStorage.setItem("employees", JSON.stringify(data));

    if (authData.refreshData) {
      authData.refreshData();
    }

    setTaskTitle("");
    setTaskDate("");
    setAsignTo("");
    setCategory("");
    setTaskDescription("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="admin-form"
      >
        <div className="Main-task">
          <div>
            <h3>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h3>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
            />
          </div>

          <div>
            <h3>Assign to</h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="description">
          <h3>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            name=""
            id=""
            cols="50"
            rows="20"
          ></textarea>

          <div>
            <button>Create Task</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
