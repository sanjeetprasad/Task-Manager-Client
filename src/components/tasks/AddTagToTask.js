import React, {useContext, useRef, useEffect, useState} from "react"
import {TagContext} from "../tags/TagProvider"
import {TaskContext} from "./TaskProvider"
import { Link } from "react-router-dom"

export const AddTagToTask = (props) =>{
const {getTaskById, task, addTaskTag} = useContext(TaskContext)
const {tags, getTags} = useContext(TagContext)

useEffect(()=>{
getTags()
.then(getTaskById(parseInt(props.match.params.taskId)))
},[])

const taskTagLabel = (task.tags? task.tags.map(tt=>{
    return tt.id
}) : [])

console.log(props)

return(
    <form>
        <Link  to={{
                pathname: `/tasks/${task.id}`}}>Back To Tasks</Link>
        <fieldset>
            <div>
                {
                    tags.map((t)=>{
                        if(!taskTagLabel.find(tt=>parseInt(tt) === parseInt(t.id)))
                      return(
                          <div>{t.label}<button onClick={()=>{addTaskTag(task.id, {tagId:parseInt(t.id)})}}>Add Tag To Task</button></div>
                      )
                    }
                    )
                }
            </div>
        </fieldset>
    </form>
)
}
