import React, { useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import { Task } from "./Task"


// This module populates the tasks page by returning the individual task cards from task.js
export const TaskList = ({ props }) => {
    const { tasks, getTasks } = useContext(TaskContext)
    console.log(tasks)
    useEffect(() => {
        getTasks()
    }, [])

    return (
        <>
            <h3>Tasks</h3>
            {
                tasks.map(t => {
                    return <Task key={t.id} task={t} props={props} />
                })
            }
        </>
    )

}