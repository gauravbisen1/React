import { useState } from 'react'
import './App.css'

function App() {
  let [counter , setCounter] = useState(11);
  // let counter = 11;

  const addValue = () => {
    // console.log("clicked! " + counter);
    setCounter(counter + 1)
  }
  const decValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React Hooks</h1>
      <h3>Counter : {counter}</h3>

      <button onClick={addValue}>Add Value {counter}</button>
      <br /> <br />
      <button onClick={decValue}>Decrease {counter}</button>
    </>
  )
}

export default App
