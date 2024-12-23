import React,{useState} from 'react'
import userContext from './UserContext'


export const UserContextProvider = ({children}) => {
    const[user,setUser]=useState(null);
  return (
    <userContext.Provider value={{user,setUser}}>
        {children}

    </userContext.Provider>
  )
}
