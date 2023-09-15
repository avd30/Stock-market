import React from 'react'
import { Hero } from './Hero';
import { About } from './About';
import { Courses } from './Courses';
import { useRef } from 'react';
import { Navbar } from '../HeaderComp/Navbar';
import { Contact } from './Contact';

export const Home = () => {

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex flex-col '>
    <Navbar scrollToSection={scrollToSection} heroRef={heroRef} aboutRef={aboutRef} coursesRef={coursesRef} contactRef={contactRef}/>
      <Hero scrollToSection={scrollToSection}  coursesRef={coursesRef}/>
      <About forwardRef={aboutRef}/>
      <Courses forwardRef={coursesRef}/>
      <Contact forwardRef={contactRef}/>
    </div>
  )
}
