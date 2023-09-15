import React from 'react'
import photo from '../../pics/Profile.png'

export const About = ({forwardRef}) => {
  return (
<div ref={forwardRef} className='lg:h-screen h-max bg-[#f8f8f8]' >
  <div className='container mx-auto h-full relative'>
  {/*wrapper*/}
  <div className='flex flex-col lg:flex-row h-full items-center lg:items-start justify-start gap-x-24 text-center lg:text-left pt-4 lg:pt-16 pb-8'>
   {/*image*/}
   <div className=' flex lg:max-h-max order-2 lg:pt-[100px] lg:order-none overflow-hidden'>
    <img className='h-[500px] w-[500px] rounded-lg' src={photo} alt='Profile Pic'/>
   </div>
   {/*text */}
   <div >
      <h1 className='text-[38px] lg:text-[68px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2 '>About Me</h1>
      <hr className='lg:w-[35vw] '/>
      <p className='text-[24px] lg:text-[24px] font-secondary mb-4 my-6 lg:my-6  max-w-xl'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper tortor vel vulputate placerat. Donec sed orci id ante tincidunt dictum. Sed nec metus elementum, tempor ex a, feugiat mauris.</p>
        
        <hr/>
        <br/>
        <p className='text-[24px] lg:text-[24px] font-secondary mb-8 lg:mb-12 max-w-xl'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>

   </div>
  
  </div>
  

</div>
  )
}
