import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen bg-[#f1f1f1] py-6 px-20 flex gap-5'>
        <div className='w-1/2 font-["Founders_Grotesk"]'>
          <div className='heading'>
            <h1 className='text-[6vw] leading-none font-bold tracking-tightier'>EYE-</h1>
            <h1 className='text-[6vw] leading-none font-bold tracking-tightier'>OPENING</h1>
          </div>
          <div className='mt-[20vw]'>
            <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          </div>
          
        </div>
        <div className='w-1/2'>
          <h1 className='text-[6vw] leading-none font-bold tracking-tightier'>PRESENTATIONS</h1>
          <div className='flex gap-80'>
            <div className='text-xl mt-7'>
              <h1>S:</h1>
              <h1 className='mt-4 underline'>Instagram</h1>
              <h1 className='underline'>Behance</h1>
              <h1 className='underline'>Facebook</h1>
              <h1 className='underline'>LinkedIn</h1>
              <h1 className='mt-8'>L:</h1>
              <h1 className='mt-4 underline'>202-1965 W 4th Ave</h1>
              <h1 className='underline'>Vancouver, Canada</h1>
              <h1 className='underline'>30 Chukarina St</h1>
              <h1 className='underline'>Lviv, Ukraine</h1>
              <h1 className='mt-8'>L:</h1>
              <h1 className='mt-4 underline'>202-1965 W 4th Ave</h1>
              <h1 className='mt-16 text-zinc-300 text-[1.2vw]'>© ochi design 2024. Legal</h1>
            </div>
            <div className='text-xl mt-32'>
              <h1 className='mt-[5vw]'>M:</h1>
              <h1 className='underline'>Home</h1>
              <h1 className='underline'>Services</h1>
              <h1 className='underline'>Our Work</h1>
              <h1 className='underline'>About us</h1>
              <h1 className='underline'>Insights</h1>
              <h1 className='underline'>Contact us</h1>
              <h1 className='mt-28 text-zinc-300 text-[1.2vw]'>Website by Obys</h1>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer