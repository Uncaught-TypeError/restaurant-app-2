import React, { useState } from 'react'
import images from '../images';

const SideNavs = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const [isOn, setIsOn] = useState(false);

    const OnHover = () => {
        setIsOn(true);
    };

    const OnMouseLeave = () => {
        setIsOn(false);
    };
  return (
    <div className='fixed text-black z-30'>
        <div className='2xl:fixed 2xl:block hidden top-[45%] left-[200px]'>
            <span className='2xl:rotate-90 rotate-0 fixed font-Cormorant hover:text-yellow-400 text-2xl text-black tracking-wider'>
                <a href=''>See Our Menu</a>
            </span>
        </div>
        <div className='fixed top-[90%] xl:left-[250px] md:left-[100px] left-[1rem]'>
            <img src={isHovered ? images.egg2 : images.egg1} className='h-12 z-50' onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave} />
        </div>
        <div className='2xl:fixed 2xl:block hidden top-[40%] right-[250px]'>
            <div className='bg-black h-[150px] w-1'></div>
        </div>
        <div className='fixed top-[90%] xl:right-[200px] md:right-[100px] right-[1rem]'>
            <img src={isOn ? images.msg1 : images.msg2} className='h-11' onMouseEnter={OnHover}
            onMouseLeave={OnMouseLeave} />
        </div>
    </div>
  )
}

export default SideNavs