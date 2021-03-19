import React from "react"
import { Route, Redirect } from 'react-router-dom'
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { NavBar } from "./nav/NavBar"


export const TaskOrg = (props) => (
   
   <>

    {/* <h1>Task manager.</h1> */}

    <Route render={() => {
            if (localStorage.getItem("lu_token")) {
                return <>
                    <Route render={NavBar} />
                    <Route render={props => <ApplicationViews {...props} />} />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
    

    </>
   )
    
