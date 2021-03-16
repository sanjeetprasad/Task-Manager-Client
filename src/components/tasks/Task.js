import React, {useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import {TaskContext} from "./TaskProvider"

//This module is responsible for creating the single HTML representation of a post

export const Task = ({ task }) => {
    const {deleteTask} = useContext(TaskContext)
    const history = useHistory()
    
    return (
        <section className="taskCard">
            <h3>
                <Link to={{ pathname: `/tasks/${task.id}` }}>
                    Title: {task.title}
                </Link>
            </h3>
            <p>Author: {task.user_id}</p>
            <p>Create Date & Time: {task.create_date_time}</p>
            <p>Category: {task.category_id}</p>
            <p>Title: {task.Title}</p>
            <p>Description: {task.description}</p>
            <p>Due Date & Time: {task.due_date_time}</p>
            
            <button>
            <Link
          to={{

            pathname:`/tasklist/edit/${task.id}`, 
            state:{chosenTask:task}
          }}
        >
          Edit Task!
        </Link>
        </button>

        <button
          className="btn--release"
          onClick={() => {
            deleteTask(task.id).then(() => {
              history.push("/tasks");
            });
          }}
        >
          Delete Task
        </button>
        </section>)

}
