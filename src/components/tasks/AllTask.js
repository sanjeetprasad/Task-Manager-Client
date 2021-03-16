import React, { useContext, useEffect, useState, useRef } from "react";
import { TaskContext } from "./TaskProvider";


export const AllTask = () => {
    const {tasks, getTask} = useContext(TaskContext)
}