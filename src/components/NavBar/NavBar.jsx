import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const NavBar = () => {
  return (
    <div className='flex justify-around items-center border-2'>
        <div className='flex justify-center p-4 items-center'>
            <GiHamburgerMenu className='text-2xl fixed cursor-pointer z-10 hover:text-yellow-400' />
        </div>
        <div className='flex justify-center p-4'>
            <h1 className='text-4xl font-bold'>White & Yellow</h1>
        </div>
        <div className='sm:flex hidden justify-center p-4 items-center'>
            <h1 className='fixed text-2xl font-[500] font-Cormorant hover:text-yellow-400 cursor-pointer'><a href="">Book a table</a></h1>
        </div>
    </div>
  )
}

export default NavBar