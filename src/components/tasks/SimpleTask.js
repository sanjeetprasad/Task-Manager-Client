import React, { useContext, useEffect, useState, useRef } from "react";
import { TaskContext } from "./TaskProvider";
import { Link } from "react-router-dom";





export const SimpleTask = ({ task }) => {
   
    
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

        </section>)

}