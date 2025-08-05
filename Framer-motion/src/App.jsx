import React from 'react'
import {motion} from 'motion/react'

const App = () => {
  return (
    <div>
      <motion.div
       className='box'
       animate={{
        x:1200,
        rotate:360
       }}
       transition={{
        duration:3,
        delay:1
       }}
      >

      </motion.div>

    </div>
  )
}

export default App