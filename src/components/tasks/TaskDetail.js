import React, { useContext, useEffect, useState, useRef } from "react";
import { TaskContext } from "./TaskProvider";
import { TagContext } from "../tags/TagProvider";
import { Link } from "react-router-dom"

//This module renders the detail page for each task

export const TaskDetails = (props) => {
  const { getTaskById, deleteTask, task, setTask, deleteTaskTag, tasks } = useContext(TaskContext);
  
  const [taskTags, setTaskTags] = useState([])
  
  useEffect(() => {
    const taskId = parseInt(props.match.params.id);
    // console.log("props", props)
    getTaskById(taskId)
      // Need below .then if you do not setTask in the taskProvider
      .then(console.log(task))
  }, [tasks]);

const removeTag=(taskId, tt) =>{
  const tagId = {tagId : tt}
  deleteTaskTag(taskId, tagId)

}
console.log(task)

  return (
    <>

      <section className="task">
        <h3>Task Detail</h3>
        <h3 className="task__dateTime">{task.createDateTime}</h3>
        <h3 className="task__title">{task.title}</h3>
        <div className="task__description">{task.description}</div>
        <h3 className="task__dateTime">{task.dueDateTime}</h3>
        <h3>Tags</h3>
        <Link to={{
                pathname: `/tasks/${task.id}/addtag`,
                state: { chosenTask: task }}}>Add a Tag</Link>
        {
          task.tags ? task.tags.map((tt)=>{
            return(
              <div>{tt.label}<button onClick={()=>{removeTag(task.id, tt.id)}}>Delete Tag From Task</button></div>
            )
          }) : <></>
        }
        
        {/* <button
          onClick={() => {
            props.history.push(`/tasklist/edit/${task.id}`);
          }}
        >
          Edit Task!
        </button>

        <button
          className="btn--release"
          onClick={() => {
            deleteTask(task.id).then(() => {
              props.history.push("/tasks");
            });
          }}
        >
          Delete Task
        </button> */}
 
        
      </section>
    </>
  );
};
