import React, { useEffect, useState } from 'react';

function Eyes() {
    const [rotate, setRotate] = useState(0);
    const [eyeOffsetX, setEyeOffsetX] = useState(0);
    const [eyeOffsetY, setEyeOffsetY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);

            // Calculate offset for eye
            let radius = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            let offsetX = (radius * Math.cos(angle * Math.PI / 180)) / (window.innerWidth / 2);
            let offsetY = (radius * Math.sin(angle * Math.PI / 180)) / (window.innerHeight / 2);
            setEyeOffsetX(offsetX * 20); // Adjust the multiplier as needed for desired movement
            setEyeOffsetY(offsetY * 20); // Adjust the multiplier as needed for desired movement
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed="-.7" className='h-full relative w-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
                <div  className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center'>
                        <div style={{ transform: `translate(-0%, -0%) translate(${eyeOffsetX}px, ${eyeOffsetY}px)` }} className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-fit'>
                                <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                            </div>
                            <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl" >PLAY</div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center'>
                        <div style={{ transform: `translate(-0%, -0%) translate(${eyeOffsetX}px, ${eyeOffsetY}px)` }} className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-fit'>
                                <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                            </div>
                            <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl" >PLAY</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;
