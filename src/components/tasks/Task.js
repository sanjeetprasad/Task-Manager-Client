import React, {useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import {TaskContext} from "./TaskProvider"
import "./Task.css"

//This module is responsible for creating the single HTML representation of a post

export const Task = ({ task }) => {
    const {deleteTask} = useContext(TaskContext)
    const history = useHistory()
    
    return (
        <section className="taskCard">
          <div>
            <h3 className="link">
                <Link to={{ pathname: `/tasks/${task.id}` }}>
                    Title: {task.title}
                </Link>
            </h3>
            {/* <p>Author: {task.user_id}</p> */}
            <p>Create Date & Time: {task.create_date_time}</p>
            <p className="category">Category: {task.category.label}</p>
            <p>Title: {task.title}</p>
            <p>Description: {task.description}</p>
            <p>Due Date & Time: {task.due_date_time}</p>
        </div>
        <div>   
            <button className="taskListB">
            <Link
          to={{

            pathname:`/tasklist/edit/${task.id}`, 
            state:{chosenTask:task}
          }}
        >
          Edit Task!
        </Link>
        </button>
        </div>
        <div>
        <button
          className="taskListB"
          onClick={() => {
            deleteTask(task.id).then(() => {
              history.push("/tasks");
            });
          }}
        >
          Complete The Task
        </button>
        </div>
        </section>)

}
