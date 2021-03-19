import React, { useContext, useRef, useState, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import { CategoryContext } from "../categories/categoryProvider"
import "./Task.css"

// This module renders the create post form and edit post form
export const TaskForm = (props) => {
    
    const [task, setTask] = useState({})

    const { tasks, getTasks, addTask, updateTask, getTaskById } = useContext(TaskContext)
    const { categories, getCategories } = useContext(CategoryContext)

    // This puts us in edit mode because of the URL end point
    // HasOwnProperty is react function
    const editMode = props.match.params.hasOwnProperty("taskId")

    const title = useRef(null)
    const description = useRef(null)
    const createDateTime = useRef(null)
    const dueDateTime = useRef(null)

    // const userId = localStorage.getItem("lu_token")
    // console.log(userId)

    const handleControlledInputChange = (event) => {
        const newTask = Object.assign({}, task)
        newTask[event.target.name] = event.target.value
        setTask(newTask)
        console.log("task", task)
    }

    useEffect(() => {
        getCategories()
        if (props.match.params.taskId) {
        getTaskById(props.match.params.taskId)
        }
        
        // console.log(props.match.params.taskId)
    }, [])

    // console.log(categories)
    const constructNewTask = () => {

        let currentDate = new Date()
        if (editMode) {

            const editedTask = {
                id: parseInt(props.match.params.taskId),
                // userId: parseInt(localStorage.getItem("lu_token")),
                categoryId: parseInt(task.category),
                title: title.current.value,
                description: description.current.value,
                createDateTime: createDateTime.current.value,
                dueDateTime: dueDateTime.current.value,
                
            }
            updateTask(editedTask).then(props.history.push("/tasks"))
        } else {
            addTask({

                // userId: parseInt(localStorage.getItem("lu_token")),
                categoryId: parseInt(task.category),
                title: title.current.value,
                description: description.current.value,
                createDateTime: createDateTime.current.value,
                dueDateTime: dueDateTime.current.value,

                

            })
            
                .then((task) => {
                    props.history.push(`/tasks`)

                })
        }
    }
    console.log(props)
    //if the props.location.state exist, then chosen task = props.location.state.chosenTask, If props.location.state dosenot exist then chosenTask= empty object{}
    const chosenTask = props.location.state ? props.location.state.chosenTask: {}

    return (
        <form className="taskForm">
            <h2 className="taskForm__title">{editMode ? "Update Task" : "Create Your Task Here..."}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="category">Task category: </label>
                    <select
                        name="category" id="category" className="form-control"
                        onChange={handleControlledInputChange}
                    >
                        <option value="0">Category Select</option>
                        {
                            categories.map(c => (
                                <option key={c.id} value={c.id}>
                                    {c.label}
                                </option>
                            ))

                        }
                    </select >
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="taskTitle">Task title: </label>
                    <textarea type="text" id="taskTitle" ref={title}
                        required autoFocus className="form-control" placeholder="Task title"
                        proptype="varchar"
                        defaultValue={chosenTask.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="taskDescription">Task Description: </label>
                    <textarea type="text" id="taskDescription" ref={description}
                        required autoFocus className="form-control"
                        proptype="varchar"
                        rows="8" cols="130"
                        placeholder="Task Description"
                        defaultValue={chosenTask.description}
                        onChange={handleControlledInputChange}

                    />

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="createDateTime">Create Date & Time: </label>
                    <input type="datetime-local" id="createDateTime" ref={createDateTime}
                        required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Create Date & Time"
                        defaultValue={chosenTask.createDateTime}
                        onChange={handleControlledInputChange}
                    />

                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="dueDateTime">Due Date & Time: </label>
                    <input type="datetime-local" id="dueDateTime" ref={dueDateTime}
                        required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Due Date & Time"
                        defaultValue={chosenTask.dueDateTime}
                        onChange={handleControlledInputChange}
                    />

                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewTask()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Create Task"}
                {/* Save Task */}
            </button>
        </form>
    )
}