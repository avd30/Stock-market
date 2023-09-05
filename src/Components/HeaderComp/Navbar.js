import React from 'react';
import {Socials} from './Socials'
import Logo from '../../pics/logo.png'
import {MobileNav} from './MobileNav'



export const Navbar = ({scrollToSection , heroRef, aboutRef, coursesRef}) => {

 

  return (
  <header className=' w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[100px] flex items-center bg-[#d2d2d2]'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      {/*Logo*/}
      <a className='  max-w-[60px]' href={'/'}>
        <img className=' ' src={Logo} alt=''/>
      </a>

      <nav className='hidden xl:flex gap-x-12 font-semibold'>
        <button onClick={() => scrollToSection(heroRef)} className='text-[#696c6d] hover:text-primary transition'>Home</button>
        <button onClick={() => scrollToSection(aboutRef)}   className='text-[#696c6d] hover:text-primary transition'>About</button>
        <button onClick={() => scrollToSection(coursesRef)} className='text-[#696c6d] hover:text-primary transition'>Courses</button>
        <a href={'/'} className='text-[#696c6d] hover:text-primary transition'>Contact</a>

      </nav>
      
    </div>
    <Socials/>
      <MobileNav  scrollToSection={scrollToSection} heroRef={heroRef} aboutRef={aboutRef} coursesRef={coursesRef}/>
  </header>  
  )
}
