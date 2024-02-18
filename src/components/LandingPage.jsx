import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full h-screen bg-[#f1f1f1] pt-1"
    >
      <div className="textstructure px-20 mt-56">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker -mt-5">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7vw" }}
                    transition={{ ease: [0.7, 0, 0.84, 0], duration: 0.6, delay: 1 }}
                    className="w-[8vw] h-[5.5vw] relative -top-[2.3vw] bg-red-500"
                  >
                    <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                  </motion.div>
                )}
                <h1 className="text-[7vw] leading-[6.5vw] tracking-tighter uppercase font-['Founders_Grotesk'] font-medium mt-2">
                  {[item]}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[0.7px] border-zinc-500 mt-20 flex justify-between items-center py-2 px-14">
        {["For public and private companies", "For the first pitch to IPO"].map((item, index) => (
          <p className="text-md font-me tracking-tight leading-none">{item}</p>
        ))}
        <div className="start flex items-center gap-4">
          <motion.div
            className={`px-7 py-2 border-[2px] border-zinc-500 rounded-full uppercase font-medium ${isHovered ? 'bg-black text-white' : ''}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            whileHover={{ scale: 1.1 }}
          >
            Start the project
          </motion.div>
          <div className="w-10 h-10 rounded-full border-[2px] border-zinc-500 flex-item-center rotate-[45deg] px-3 py-3">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
