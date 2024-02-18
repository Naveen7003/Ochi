import { motion, useAnimation } from 'framer-motion';
import React from 'react';

function Featured() {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
    
    const handleHover = (index)=>{
        cards[index].start({y:"0"})
    }   
    
    const handleHoverEnd = (index)=>{
        cards[index].start({y:"100%"})
    }   

    const imageVariants = {
        hover: {
            scale: 0.9,
            transition: {
                duration: 0.3,
            },
        },
        initial: {
            scale: 1,
        },
    };

    const buttonVariants = {
        hover: {
            backgroundColor: '#000',
            color: '#fff',
            y: -5,
            transition: {
                duration: 0.2,
            },
        },
        initial: {
            backgroundColor: '#fff',
            color: '#000',
        },
    };

    return (
        <div className='w-full py-20 bg-[#f1f1f1]'>
            <h1 className="text-6xl px-20 tracking-tight border-b-[1px] border-zinc-400 pb-10">Featured Projects</h1>
            <div className=' cards w-full h-[80vh] flex px-16 py10 gap-4 mt-20'>
                <div className='flex h-fit w-[40px absolute'>
                    <div className='h-[10px] w-[10px] rounded-full bg-zinc-900'></div>
                    <h1 className='text-zinc-900 -mt-[10px] text-xl ml-2'>FYDE</h1>
                    <div className='h-[10px] w-[10px] rounded-full bg-zinc-900 ml-[645px]'></div>
                    <h1 className='text-zinc-900 -mt-[10px] text-xl ml-2'>VISE</h1>
                </div>
                <motion.div 
                    onHoverStart={() => handleHover(0)}
                    onHoverEnd={() => handleHoverEnd(0)}
                    className='cardcontainer relative w-1/2 h-full mt-8'
                >
                    <h1 className='absolute flex left-full -translate-x-1/2 overflow-hidden top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl font-semibold text-[#cdea68]'>
                        {"FYDE".split('').map((item, index)=>(
                            <motion.span 
                                initial={{y:"100%"}}
                                animate={cards[0]} 
                                transition={{ease: [0.22,1,0.36,1], delay: index*.05}}
                                className='inline-block'
                                key={index}
                            >
                                {item}
                            </motion.span>
                        ))} 
                    </h1>
                    <motion.div 
                        variants={imageVariants}
                        whileHover="hover"
                        className='h-full w-full overflow-hidden rounded-[15px]'
                    >
                        <img className="h-full w-full object-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </motion.div>
                </motion.div>
                <motion.div 
                    onHoverStart={() => handleHover(1)}
                    onHoverEnd={() => handleHoverEnd(1)}
                    className='cardcontainer w-1/2 h-full relative mt-8'
                >
                    <div className='card h-full w-full overflow-hidden rounded-[15px]'>
                        <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl font-semibold text-[#cdea68]'>
                            {"VISE".split('').map((item, index)=>(
                                <motion.span 
                                    initial={{y:"100%"}}
                                    animate={cards[1]} 
                                    transition={{ease: [0.22,1,0.36,1], delay: index*.05}}
                                    className='inline-block'
                                    key={index}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <motion.div 
                            variants={imageVariants}
                            whileHover="hover"
                            className='h-full w-full overflow-hidden rounded-[15px]'
                        >
                            <img className="h-full w-full object-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <div className='flex h-fit w-fit'>
            <motion.button 
                    variants={buttonVariants}
                    whileHover="hover"
                    className='text-[1.1vw] mt-14 border-2 border-zinc-900 rounded-[20px] py-[2px] px-[10px] font-semibold ml-14'
                >
                    AUDIT
                </motion.button>
                <motion.button 
                    variants={buttonVariants}
                    whileHover="hover"
                    className='text-[1.1vw] mt-14 border-2 border-zinc-900 rounded-[20px] py-[2px] px-[10px] font-semibold ml-4'
                >
                    COPYWRITING
                </motion.button>
                <motion.button 
                    variants={buttonVariants}
                    whileHover="hover"
                    className='text-[1.1vw] mt-14 border-2 border-zinc-900 rounded-[20px] py-[2px] px-[10px] font-semibold ml-4'
                >
                    SALES DECK
                </motion.button>
                <motion.button 
                    variants={buttonVariants}
                    whileHover="hover"
                    className='text-[1.1vw] mt-14 border-2 border-zinc-900 rounded-[20px] py-[2px] px-[10px] font-semibold ml-4'
                >
                    SLIDES DESIGN
                </motion.button>
                <motion.button 
                    variants={buttonVariants}
                    whileHover="hover"
                    className='text-[1.1vw] mt-14 border-2 border-zinc-900 rounded-[20px] py-[2px] px-[10px] font-semibold ml-52'
                >
                    AGENCY
                </motion.button>
                <motion.button 
                    variants={buttonVariants}
                    whileHover="hover"
                    className='text-[1.1vw] mt-14 border-2 border-zinc-900 rounded-[20px] py-[2px] px-[10px] font-semibold ml-4'
                >
                    COMPANY PRESENTATION
                </motion.button>
            </div>
            <div className=' cards w-full h-[80vh] flex px-16 py10 gap-4 mt-20'>
                <div className='flex h-fit w-[40px absolute'>
                    <div className='h-[10px] w-[10px] rounded-full bg-zinc-900'></div>
                    <h1 className='text-zinc-900 -mt-[10px] text-xl ml-2'>TRAWA</h1>
                    <div className='h-[10px] w-[10px] rounded-full bg-zinc-900 ml-[645px]'></div>
                    <h1 className='text-zinc-900 -mt-[10px] text-xl ml-2'>PREMIUM BLEND</h1>
                </div>
                <motion.div 
                    onHoverStart={() => handleHover(2)}
                    onHoverEnd={() => handleHoverEnd(2)}
                    className='cardcontainer relative w-1/2 h-full mt-8'
                >
                    <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl font-semibold text-[#cdea68]'>
                    {"TRAWA".split('').map((item, index)=>(
                        <motion.span 
                        initial={{y:"100%"}}
                        animate={cards[2]} 
                        transition={{ease: [0.22,1,0.36,1], delay: index*.05}}
                        className='inline-block'
                        key={index}
                    >
                        {item}
                    </motion.span>))} 
                    </h1>
                    <motion.div 
                        variants={imageVariants}
                        whileHover="hover"
                        className='h-full w-full overflow-hidden rounded-[15px]'
                    >
                        <img className="h-full w-full object-cover" src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                    </motion.div>
                </motion.div>
                <motion.div 
                    onHoverStart={() => handleHover(3)}
                    onHoverEnd={() => handleHoverEnd(3)}
                    className='cardcontainer w-1/2 h-full relative mt-8'
                >
                    <div className='card h-full w-full overflow-hidden rounded-[15px]'>
                        <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl font-semibold text-[#cdea68]'>
                        {"PREMIUM BLEND".split('').map((item, index)=>(
                            <motion.span 
                            initial={{y:"100%"}}
                            animate={cards[3]} 
                            transition={{ease: [0.22,1,0.36,1], delay: index*.05}}
                            className='inline-block'
                            key={index}
                        >
                            {item}
                        </motion.span>))}
                        </h1>
                        <motion.div 
                            variants={imageVariants}
                            whileHover="hover"
                            className='h-full w-full overflow-hidden rounded-[15px]'
                        >
                            <img className="h-full w-full object-cover" src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <div className='flex h-fit w-fit'>
            <motion.button 
                    variants={buttonVariants}
                    whileHover="hover"
                    className='text-[1.1vw] mt-14 border-2 border-zinc-900 rounded-[20px] py-[2px] px-[10px] font-semibold ml-14'
                >
                    BRAND IDENTITY
                </motion.button>
                <motion.button 
                    variants={buttonVariants}
                    whileHover="hover"
                    className='text-[1.1vw] mt-14 border-2 border-zinc-900 rounded-[20px] py-[2px] px-[10px] font-semibold ml-4'
                >
                    DESIGN RESEARCH
                </motion.button>
                <motion.button 
                    variants={buttonVariants}
                    whileHover="hover"
                    className='text-[1.1vw] mt-14 border-2 border-zinc-900 rounded-[20px] py-[2px] px-[10px] font-semibold ml-4'
                >
                    INVEST DECK
                </motion.button>
                <motion.button 
                    variants={buttonVariants}
                    whileHover="hover"
                    className='text-[1.1vw] mt-14 border-2 border-zinc-900 rounded-[20px] py-[2px] px-[10px] font-semibold ml-60'
                >
                    SLIDES DESIGN
                </motion.button>
            </div>
        </div>
    );
}

export default Featured;
