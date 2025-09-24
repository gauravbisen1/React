import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {//prop ,jo bhi apke pas aarha hai as it is usko pass krdo

    const[user , setUser] = useState(null)

  return (
        <UserContext.Provider value={{user , setUser}}>
            {/* //obj - providing access     */}
            {children}
        </UserContext.Provider>
  )
}

export default UserContextProvider 