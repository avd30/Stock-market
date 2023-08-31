import React from 'react';
import {Socials} from './Socials'
import Logo from '../../pics/logo.png'
import {MobileNav} from './MobileNav'
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
  <header className=' w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center '>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      {/*Logo*/}
      <a className='  max-w-[60px]' href={''}>
        <img className=' ' src={Logo} alt=''/>
      </a>

      <nav className='hidden xl:flex gap-x-12 font-semibold'>
        <a href={''} className='text-[#696c6d] hover:text-primary transition'>Home</a>
        <a href={''} className='text-[#696c6d] hover:text-primary transition'>Courses</a>

        <a href={''} className='text-[#696c6d] hover:text-primary transition'>About</a>

        <a href={''} className='text-[#696c6d] hover:text-primary transition'>Contact</a>

      </nav>
      
    </div>
    <Socials/>
      <MobileNav/>
  </header>  
  )
}
