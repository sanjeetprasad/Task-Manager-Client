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

            <li className="navbar__item">
            <Link className="navbar__link" to="/createtask">Create Tasks</Link>
            </li>

            <li className="navbar__item">
            <Link className="navbar__link" to="/tasks">Tasks Manager</Link>
            </li>

            <li className="navbar__item">
            <Link className="navbar__link" to="/tags">Tags Manager</Link>
            </li>
            
                <button className="nav-link"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                props.history.push({ pathname: "/" })
                            }}
                >Logout</button>
     
        </ul>
    )
}