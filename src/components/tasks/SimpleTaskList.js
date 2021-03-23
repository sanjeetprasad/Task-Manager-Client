import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "./TaskProvider";
import { CategoryContext } from "../categories/categoryProvider";
import { SimpleTask } from "./SimpleTask";
import "./Task.css";

// This module populates the tasks page by returning the individual task cards from task.js
export const SimpleTaskList = ({ props }) => {
  const { tasks, getTasks, getTaskByCategoryId } = useContext(TaskContext);
  const { categories, getCategories } = useContext(CategoryContext);

  const [lessImportantTasks, setLessImportantTasks] = useState([]);
  const [importantTasks, setImportantTasks] = useState([]);
  const [moreImportantTasks, setMoreImportantTasks] = useState([]);
  const [veryImportantTasks, setVeryImportantTasks] = useState([]);

  // console.log(lessImportantTasks)
  // console.log(importantTasks)
  // console.log(moreImportantTasks)
  // console.log(veryImportantTasks)

  // console.log(tasks)

  useEffect(() => {
    getTasks();
    
  }, []);

  useEffect(() => {
    
    const filteredLessImportantTasks = tasks.filter((t) => t.category.id === 1);
    setLessImportantTasks(filteredLessImportantTasks);
    const filteredImportantTasks = tasks.filter((t) => t.category.id === 2);
    setImportantTasks(filteredImportantTasks);
    const filteredMoreImportantTasks = tasks.filter((t) => t.category.id === 3);
    setMoreImportantTasks(filteredMoreImportantTasks);
    const filteredVeryImportantTasks = tasks.filter((t) => t.category.id === 4);
    setVeryImportantTasks(filteredVeryImportantTasks);
  }, [tasks]);

  
    return (
      <>
        <h2 className="header">All The Tasks With Priority</h2>
        <section className="simpleTask">
          {Object.keys(tasks).length > 0 && (
            <div>
              <h2>Less Important</h2>

              {lessImportantTasks.map((t) => {
                return <SimpleTask key={t.id} task={t} props={props} />;
              })}
            </div>
          )}
          {Object.keys(tasks).length > 0 && (
            <div>
              <h2>Important</h2>
              {importantTasks.map((t) => {
                return <SimpleTask key={t.id} task={t} props={props} />;
              })}
            </div>
          )}
          {Object.keys(tasks).length > 0 && (
            <div>
              <h2>More Important</h2>
              {moreImportantTasks.map((t) => {
                return <SimpleTask key={t.id} task={t} props={props} />;
              })}
            </div>
          )}
          {Object.keys(tasks).length > 0 && (
            <div>
              <h2>Very Important</h2>
              {veryImportantTasks.map((t) => {
                return <SimpleTask key={t.id} task={t} props={props} />;
              })}
            </div>
          )}
        </section>
      </>
    );
  
};
