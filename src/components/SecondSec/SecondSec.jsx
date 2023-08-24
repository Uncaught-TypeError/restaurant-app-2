import React from 'react'
import images from '../images'


const SecondSec = () => {
  return (
    <div className='w-full h-screen text-black'>
        <div className='flex flex-col justify-center items-center w-full h-full bg-[#f5f5f5]'>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 relative'>
                <div className='flex flex-col justify-evenly items-center z-20'>
                    <div className='p-6'>
                        <img src={images.eggbene} className='xl:h-[300px] h-[250px] transform hover:scale-105 transition-all duration-300' />
                    </div>
                    <div className='font-Cormorant flex flex-col md:text-5xl sm:text-4xl text-3xl'>
                        <div className='p-2 flex flex-col sm:items-start items-center'>
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
                    <div className='p-4 sm:block hidden'>
                        <img src={images.burg} className='lg:h-[400px] md:h-[350px] h-[300px] transform hover:scale-105 transition-all duration-300' />
                    </div>
                    <div className='p-4'>
                        <img src={images.coffee} className='xl:h-[300px] h-[250px] transform hover:scale-105 transition-all duration-300' />
                    </div>
                </div>
                <div className='sm:block hidden'>
                    <div className='absolute bg-slate-300 xl:w-[400px] md:w-[350px] w-[300px] xl:h-[300px] h-[250px] top-[12%] xl:left-0 left-[10%]'></div>
                    <div className='absolute xl:block hidden bg-slate-200 xl:w-[200px] xl:h-[150px] top-[38%] left-[30%]'></div>
                    <div className='absolute bg-slate-300 xl:w-[300px] xl:h-[400px] w-[200px] h-[300px] xl:top-[12%] top-0 xl:right-[5%] right-[10%]'></div>
                    <div className='absolute bg-slate-300 xl:w-[420px] w-[380px] h-[250px] bottom-0 right-[8%]'></div>
                    <div className='absolute bg-slate-200 xl:w-[300px] h-[200px] w-[280px] bottom-[10%] xl:left-0 left-[5%]'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondSec