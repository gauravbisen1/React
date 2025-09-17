import React from 'react'

const temp = ({name,age=18}) => {
  return (
    <>
        <div className='bg-amber-300 text-amber-800 border-black-950 w-100' >
        <h1>Username : {name}</h1>
        <h2>Age: {age}</h2>
        </div>
        
    </>
  )
}

export default temp