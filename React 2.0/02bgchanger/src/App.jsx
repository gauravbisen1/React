import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor] = useState("black")



  return (
    <div className=' w-full h-screen duration-200' style={{backgroundColor : color}}>
      
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2'>
                <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{color:"black",backgroundColor:"red"}}>Red</button>

                <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{color:"black",backgroundColor:"Blue"}}>Blue</button>

                <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{color:"black",backgroundColor:"Green"}}>Green</button>

                <button onClick={()=>setColor("gray")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{color:"black",backgroundColor:"gray"}}>Gray</button>

                <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{color:"black",backgroundColor:"yellow"}}>Yellow</button>

                <button onClick={()=>setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{color:"black",backgroundColor:"pink"}}>Pink</button>

                <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{color:"black",backgroundColor:"purple"}}>Purple</button>

                <button onClick={()=>setColor("white")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{color:"black",backgroundColor:"white"}}>White</button>
            </div>
        </div>
    </div>
  )
}

export default App
