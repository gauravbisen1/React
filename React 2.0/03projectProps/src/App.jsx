import React from 'react'
import Card from './components/Card'
import Temp from './components/temp'


const App = () => {
  return (
    <>
      <h1 className='mb-5 bg-orange-50 text-lime-700 rounded-xl text-3xl font-bold'>Tailwind CSS</h1>
      
      
      <br />
      <Temp name="gaurav bisen" age={22} />
      <Temp name="Ashlesha Chaurasia" age={22} />

      <br />
      <Card username="Gaurav" btntxt="review" />
      <Card username="bisen" btntxt="code" />
    </>

  )
}

export default App