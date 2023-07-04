import React from 'react'
import images from '../images'


const SecondSec = () => {
  return (
    <div className='w-full h-screen text-black'>
        <div className='flex flex-col justify-center items-center w-full h-full bg-[#f5f5f5]'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 relative'>
                <div className='flex flex-col justify-evenly z-20'>
                    <div className='p-6'>
                        <img src={images.eggbene} className='transform hover:scale-105 transition-all duration-300' />
                    </div>
                    <div className='font-Cormorant flex flex-col text-5xl'>
                        <div className='p-2'>
                            <span className=''>Our Special for Today -</span>
                            <span className='italic'>Breakfast!</span>
                        </div>
                        <div className='p-2'>
                            <span className=''>All Day.</span>
                            <span className=''> Every Day.</span>
                        </div>
                        
                    </div>
                </div>
                <div className='flex flex-col p-4 items-center z-20'>
                    <div className='p-4'>
                        <img src={images.burg} className='h-[450px] transform hover:scale-105 transition-all duration-300' />
                    </div>
                    <div className='p-4'>
                        <img src={images.coffee} className='transform hover:scale-105 transition-all duration-300' />
                    </div>
                </div>
                <div className='absolute bg-slate-300 w-[400px] h-[300px] top-[12%] left-0'></div>
                <div className='absolute bg-slate-200 w-[200px] h-[150px] top-[38%] left-[30%]'></div>
                <div className='absolute bg-slate-300 w-[300px] h-[400px] top-[12%] right-[5%]'></div>
                <div className='absolute bg-slate-300 w-[420px] h-[250px] bottom-0 right-[8%]'></div>
                <div className='absolute bg-slate-200 w-[300px] h-[200px] bottom-[10%] left-0'></div>
            </div>
        </div>
    </div>
  )
}

export default SecondSec