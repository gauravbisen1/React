import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    
    <UserContextProvider >
      {/* //we have directly access in components here */}
      <h1>React - Context Api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>

    //OR

    // <UserContext.Provider value>
    //   <h1>React - Context Api</h1>
    // </UserContext.Provider>
  )
}

export default App
