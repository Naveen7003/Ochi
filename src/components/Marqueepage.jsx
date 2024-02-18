import { motion } from 'framer-motion'
import React from 'react'

function Marqueepage() { 
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]'>
        <div className='text flex border-t-2 border-b-2 border-zinc-300 whitespace-nowrap uppercase overflow-hidden '>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[18vw] mt-[4vw] leading-none font-["Founders_Grotesk"] font-light tracking-tighter text-white pr-20'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[18vw] mt-[4vw] leading-none font-["Founders_Grotesk"] font-light tracking-tighter text-white pr-20'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[18vw] mt-[4vw] leading-none font-["Founders_Grotesk"] font-light tracking-tighter text-white pr-20'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marqueepage