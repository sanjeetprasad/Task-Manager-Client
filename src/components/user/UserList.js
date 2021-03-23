import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "./UserDataProvider";
import "./user.css"


export const UserList = (props) => {
  const {user, getCurrentUser} = useContext(UserContext)

  useEffect(()=> {
      
      getCurrentUser()

    }, [])

  return (
    <> 
        <div className="user">
           <h2>Welcome back {user.full_name}!</h2> 
        </div>
    </>
  )
}
