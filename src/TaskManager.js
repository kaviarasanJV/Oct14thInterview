import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCheckboxTask,
  DeletetodoTask,
  AddNewTask,
} from "./actions/actions";

const TaskManager = () => {
  const [Userinput, setUserinput] = useState("");
  const dispatch = useDispatch();
  const todos = userSelector((state) => state.todo.todos);
  useEffect(() => {
    dispatch(GetAPIData); //done
  }, []);

  const handleAddTask = () => {
    if (Userinput.trim()) {
      const UserinputObj = {
        id: Math.random(),
        title: Userinput,
        completed: false,
      };
      dispatch(AddNewTask(UserinputObj));
      setUserinput("");
    }
  };
  const handleDeleteTask = (id) => {
    dispatch(DeletetodoTask(id));
  };

  const handleCheckbox = (id) => {
    dispatch(handleCheckboxTask(id));
  };

  return (
    <>
      <h1>Task Manager </h1>
      <input
        type="text"
        value={Userinput}
        onChange={(e) => setUserinput(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={handleAddTask}>Add Task </button>
      <ul>
        {todos.map((todo) => {
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={handleCheckbox(todo.id)}
            >
              {todo.title}
            </span>
            <button onClick={handleDeleteTask(todo.id)}>Delete Task</button>
          </li>;
        })}
      </ul>
    </>
  );
};
export default TaskManager;
