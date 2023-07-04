import React, { useState } from 'react'
import images from '../images';

const FirstSec = () => {
    const [isHovered, setIsHovered] = useState(false);
    const words = ['yummy breakfast', 'fabulous drinks', 'authentic dinner', 'great lunch', 'lovely dates'];
    const [shuffledWord, setShuffledWord] = useState(words[0]);

    const handleHover = () => {
        setIsHovered(true);
        shuffleWords();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const shuffleWords = () => {
        let currentIndex = words.length;
        let temporaryValue, randomIndex;

        while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = words[currentIndex];
        words[currentIndex] = words[randomIndex];
        words[randomIndex] = temporaryValue;
        }

        setShuffledWord(words[0]);
    };
    return (
    
    <div className='w-full h-screen' style={{
        backgroundImage: `url(${images.plate})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'}}>
        <div className='max-w-[900px] mt-[-96px] md:w-full w-[80%] h-screen mx-auto text-center flex flex-col justify-center' onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}>
            <span className='lg:text-[4rem] md:text-[3rem] sm:text-[3rem] text-[2.5rem] font-Cormorant'> The best place to kick off your day or just take a break and enjoy a{' '} 
                <span className={`italic font-bold text-yellow-400 cursor-pointer ${isHovered ? 'hover-animation' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>{shuffledWord}</span>.
            </span>
        </div>

    </div>
  )
}

export default FirstSec