import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data , setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/hiteshchoudhary')
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
    }, [])
    

  return (
    <div className='h-150 text-center m-5 bg-gray-700 text-white p-4 text-3xl'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="git pictur" width={300} />
    </div>
  )
}

export default Github