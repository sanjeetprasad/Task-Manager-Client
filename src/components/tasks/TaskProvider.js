import React from "react";
import { useState } from "react";

//This module is responsible for all methods for fetching posts from server
export const TaskContext = React.createContext();

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  //method to get posts from server
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

  //method to get post by the id from server
  const getTaskById = (id) => {
    return fetch(`http://localhost:8000/tasks/${id}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }).then((res) => res.json())
    .then(setTask)
  };

  //method to get posts by the user id that created the post from server
  const getTasksByUserId = (userId) => {
    userId = localStorage.getItem("lu_token");
    return fetch(
      `http://localhost:8000/tasks?user_id=${localStorage.getItem(
        "lu_token"
      )}`,
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then(setTasks);
  };

  //method to delete posts from server
  const deleteTask = (id) => {
    return fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }).then(getTasks);
  };

  //method to create a post to add to the server
  const addTask = (task) => {
    return fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(post),
    }).then((res) => res.json());
  };

  //method to edit posts on the server
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
    .then(getPostById(taskId))
  }

  const addTaskTag = (taskId, tagId) =>{
    return fetch (`http://localhost:8000/posts/${taskId}/tag`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(tagId)
    }
    )
    .then(getPostById(taskId))
  }

  return (
    <PostContext.Provider
      value={{
        task,
        setTask,
        Tasks,
        setTasks,
        getTasks,
        getTaskById,
        deleteTask,
        addTask,
        getTasksByUserId,
        updateTask,
        deleteTaskTag,
        addTaskTag
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
