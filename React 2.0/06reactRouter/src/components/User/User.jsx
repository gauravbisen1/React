import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    const {userId} = useParams()

  return (
    <div className='bg-amber-900 text-amber-200 text-3xl p-10 m-10 text-center font-bold'>User: {userId}</div>
  )
}

export default User