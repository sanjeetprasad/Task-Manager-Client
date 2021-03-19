import React from "react";
import { Route } from "react-router-dom";
import { CategoryProvider } from "./categories/categoryProvider";
import { CategoryList } from "./categories/categoryList";
import { CategoryForm } from "./categories/categoryForm";
import { TagProvider } from "./tags/TagProvider";
import {TagList} from "./tags/TagList";
import {TagForm} from "./tags/TagForm";
import {TaskProvider} from "./tasks/TaskProvider";
import {TaskList} from "./tasks/TaskList";
import {TaskForm} from "./tasks/TaskForm";
import {TaskDetails} from "./tasks/TaskDetail";
import {AddTagToTask} from "./tasks/AddTagToTask"
import {SimpleTaskList} from "./tasks/SimpleTaskList"
import {UserDataProvider} from "./user/UserDataProvider"
import {UserList} from "./user/UserList"


export const ApplicationViews = (props) => (
     <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
        </main>
        
        {/* <UserDataProvider> */}
        <CategoryProvider>
            <TaskProvider>
                <TagProvider>
                {/* <Route
                    path="/"
                    render={(props) => <UserList {...props} />}
                /> */}

                <Route exact path="/tasks/:taskId(\d+)/addtag" render={(props)=><AddTagToTask {...props}/>}/>
                <Route
                    exact
                    path="/tasks"
                    render={
                  (props) => <TaskList {...props} />
                    }
                    />

                <Route
                    exact
                    path="/tasks/:id(\d+)"
                    render={(props) => <TaskDetails {...props} />}
                />
                <Route
                    exact
                    path="/createtask"
                    render={(props) => <TaskForm {...props} />}
                />
                <Route
                    path="/tasklist/edit/:taskId(\d+)"
                    render={(props) => <TaskForm {...props} />}
                />
                <Route
                    exact
                    path="/tasklist"
                    render={(props) => <SimpleTaskList {...props} />}
                />

              </TagProvider>
            </TaskProvider>
        </CategoryProvider>
        {/* </UserDataProvider> */}

        <CategoryProvider>
            <Route
                exact
                path="/categories"
                render={(props) => <CategoryList {...props} />}
                />
            <Route
                exact
                path="/categories/create"
                render={(props) => <CategoryForm {...props} />}
                />
            <Route
                exact
                path="/categories/edit/:categoryId(\d+)"
                render={(props) => <CategoryForm {...props} />}
                />
        </CategoryProvider>

            <TagProvider>
                <Route exact path="/tags" render={(props) => <TagList {...props} />} />
                    <Route
                        exact
                        path="/tags/create"
                        render={(props) => <TagForm {...props} />}
                    />
                    <Route
                        path="/tags/edit/:tagId(\d+)"
                        render={(props) => <TagForm {...props} />}
                    />
            </TagProvider>

    </>
)
