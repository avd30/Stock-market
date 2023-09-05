import React,{useState} from 'react'
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import {motion} from 'framer-motion';

const menuVariants={
    hidden:{
        x:'100%',
    },
    show:{
        x:0,
        transition:{
            ease:[0.6,0.01,0.05,0.9],
        },
    },
}



export const MobileNav = ({scrollToSection , heroRef, aboutRef, coursesRef}) => {

    const[openMenu,setOpenMenu]=useState(false);

  return (
    <nav className='text-primary xl:hidden'>
    {/*open button*/}
        <div onClick={()=>setOpenMenu(true)} className='text-3xl cursor-pointer'>
            <CgMenuRight/>
        </div>

        <motion.div variants={menuVariants} initial='hidden' animate={openMenu?'show':''}
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
            <div onClick={()=>setOpenMenu(false)} className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
                <IoMdClose />
            </div>
            <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'>
                <li><button onClick={()=>{scrollToSection(heroRef); setOpenMenu(false)}}>Home</button></li>
                <li><button onClick={()=>{scrollToSection(aboutRef); setOpenMenu(false)}}>About</button></li>

                <li><button onClick={()=>{scrollToSection(coursesRef); setOpenMenu(false)}}>Courses</button></li>
                <li><button onClick={()=>{scrollToSection(coursesRef); setOpenMenu(false)}}>Contact</button></li>

            </ul>

        </motion.div>
    </nav>
  )
}
