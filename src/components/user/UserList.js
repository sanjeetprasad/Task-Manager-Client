import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "./UserDataProvider";


export const UserList = () => {
  const {user, getCurrentUser} = useContext(UserContext)

  useEffect(()=> {

      getCurrentUser()

    }, [])

  return (
    <> 
            <div className="user">
           <p>Task Manager Welcome You {user.full_name}!</p> 
            </div>
    </>
  )
}