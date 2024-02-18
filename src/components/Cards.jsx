import React from 'react'

function Cards() {
  return (  
    <div className='w-full h-screen bg-[#f1f1f1] flex gap-5 py-28 px-10'>
        <div className='cardcontainer w-1/2 h-[57vh]'>
            <div className=' relative card w-full rounded-xl h-full flex items-center justify-center bg-[#004d43]'>
                <img className='w-40 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className=' absolute top-[22vw] left-5 text-[#cdea68] text-[1vw] border-2 border-[#cdea68] rounded-[20px] py-[2px] px-[10px] font-semibold '>@2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer w-1/2 h-[57vh] flex gap-5'>
            <div className='relative card flex items-center justify-center w-1/2 rounded-xl h-full bg-[#212121]'>
                <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />            
                <button className=' absolute top-[22vw] left-5 text-zinc-100 text-[1vw] border-2 border-zinc-100 rounded-[20px] py-[2px] px-[10px] font-semibold'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className=' relative flex justify-center items-center card w-1/2 rounded-xl h-full bg-[#212121]'>
                <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />            
                <button className=' absolute top-[22vw] left-5 text-zinc-100 text-[1vw] border-2 border-zinc-100 rounded-[20px] py-[2px] px-[10px] font-semibold'>BUSINESS BOOTCAMP ALUMINI</button>
            </div>
            </div>
    </div>
    
  )
}

export default Cards