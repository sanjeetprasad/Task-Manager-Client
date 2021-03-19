import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import taskmanager from "./taskmanager.png"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
             <div className="logo">
            <img src={taskmanager} width="100" height="100" alt="logo" />
            </div>
            <li className="navbar__item">
            <Link className="navbar__link" to="/tasklist">Tasks</Link>
            </li>
            {/* <li className="navbar__item">
            <Link className="navbar__link" to="/tasks">Tasks</Link>
            </li> */}
            <li className="navbar__item">
            <Link className="navbar__link" to="/createtask">Create Tasks</Link>
            </li>
            {/* <li className="navbar__item">
            <Link className="navbar__link" to="/tasklist">Task List</Link>
            </li> */}
            <li className="navbar__item">
            <Link className="navbar__link" to="/tasks">Task Manager</Link>
            </li>
            {/* <li className="navbar__item">
            <Link className="navbar__link" to="/categories">Create Category</Link>
            </li> */}
            <li className="navbar__item">
            <Link className="navbar__link" to="/tags">Create Tags</Link>
            </li>
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}