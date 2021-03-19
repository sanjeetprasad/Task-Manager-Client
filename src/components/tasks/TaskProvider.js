import React from "react";
import { useState } from "react";

//This module is responsible for all methods for fetching tasks from server
export const TaskContext = React.createContext();

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  //method to get tasks from server
  const getTasks = () => {
    return fetch("http://localhost:8000/tasks", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setTasks)
      .then(console.log(tasks));
  };

  const getTasksByCategoryId = (id) => {
    return fetch(`http://localhost:8000/tasks?category_id=${id}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((res) => res.json())

  };

  //method to get task by the id from server
  const getTaskById = (id) => {
    console.log(id)
    return fetch(`http://localhost:8000/tasks/${id}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }).then((res) => res.json())
    .then(setTask)
  };



  //method to delete tasks from server
  const deleteTask = (id) => {
    return fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }).then(getTasks);
  };

  //method to create a task to add to the server
  const addTask = (task) => {
    return fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(task),
    }).then((res) => res.json());
  };

  //method to edit tasks on the server
  const updateTask = (newTask) => {
    return fetch(`http://localhost:8000/tasks/${newTask.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(newTask),
    }).then(getTasks);
  };

  const deleteTaskTag = (taskId, tagId) =>{
    return fetch (`http://localhost:8000/tasks/${taskId}/tag`,{
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(tagId)
    })
    .then(getTaskById(taskId))
  }

  const addTaskTag = (taskId, tagId) =>{
    return fetch (`http://localhost:8000/tasks/${taskId}/tag`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(tagId)
    }
    )
    .then(getTaskById(taskId))
  }


  return (
    <TaskContext.Provider
      value={{
        task,
        setTask,
        tasks,
        setTasks,
        getTasks,
        getTaskById,
        deleteTask,
        addTask,
        updateTask,
        deleteTaskTag,
        addTaskTag,
        getTasksByCategoryId
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
