import React, { createContext, useState } from "react";



export const UserContext = createContext();


export const UserDataProvider = (props) => {
  const[user, setUser] = useState({})

  const getCurrentUser = ()=>{
   
    return fetch(`http://localhost:8000/users`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }).then((res) => res.json())
    .then(setUser)
  };



return(
  <UserContext.Provider value={{
    user,
    getCurrentUser

  }}>
    {props.children}
  </UserContext.Provider>
)
}