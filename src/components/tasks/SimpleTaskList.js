import React, { useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import { SimpleTask } from "./SimpleTask"


// This module populates the tasks page by returning the individual task cards from task.js
export const SimpleTaskList = ({ props }) => {
    const { tasks, getTasks } = useContext(TaskContext)
    console.log(tasks)
    useEffect(() => {
        getTasks()
    }, [])

    return (
        <>
            <h2>Tasks With Priority.</h2>
            {
                tasks.map(t => {
                    return <SimpleTask key={t.id} task={t} props={props} />
                })
            }
        </>
    )

}