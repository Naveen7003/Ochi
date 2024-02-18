import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div  className='w-full py-20 px-10 tracking-tightier bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-NeueMontreal text-[3.6vw] leading-[3.5vw]'>Ochi is a strategic partner for fast-grow­ing tech<br></br> businesses that need to <span className='underline'>raise funds</span>,<span className='underline'>sell prod­ucts</span>,<br></br><span className='underline'>ex­plain com­plex ideas</span>, and<span className='underline'>hire great peo­ple</span>.</h1>
        <div className='w-full flex gap-5 border-t-[1px] border-[#6d7c36] mt-20'>
            <div className='w-1/2 pt-4'>
                <h1 className='text-6xl tracking-tighter text-light'>Our approach:</h1>
                <button className='flex gap-6  px-10 mt-6 py-4 bg-zinc-900 rounded-full text-white' >Read More
                <div className='w-2 h-2 mt-[10px] bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] bg-red-600 mt-3 rounded-3xl'>
                <img className='w-full h-full object-cover rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>
    </motion.div>
    
  )
}

export default About