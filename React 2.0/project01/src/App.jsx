import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <>
      <h1 className='mb-5 bg-orange-50 text-lime-700 rounded-xl text-3xl font-bold'>Tailwind CSS</h1>
      
      <Card username="Gaurav" btntxt="review" />
      <Card username="bisen" btntxt="code" />
    </>

  )
}

export default App