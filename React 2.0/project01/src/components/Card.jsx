import React from 'react'

const Card = ({username,btntxt="default"}) => {
  return (
    <>
      <div className='mx-auto mt-5 relative h-[400px] w-[300px] rounded-xl'>
        <img src="https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D" alt="card img" className='z-0 h-full w-full rounded-md object-cover'/>
        <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
        <div className='absolute bottom-4 left-4 text-left'>
          <h1 className='text-lg font-semibold text-white'>{username}</h1>
          <p className='mt-2 text-sm text-gray-300'>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
          </p>
          <button className='rounded-xl mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white '>{btntxt} → </button>
        </div>
      </div>
    </>
  )
}

export default Card