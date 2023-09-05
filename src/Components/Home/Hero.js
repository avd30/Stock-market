import React from 'react'
import stock from '../../pics/stock.jpg';

export const Hero = ({scrollToSection, coursesRef}) => {

  return (
    <div  className="  bg-[#d2d2d2] overflow-hidden lg:pt-10 lg:h-[90vh] bg-">
    <div className='container mx-auto h-full relative'>
      {/*Text and img*/}
      <div className='flex flex-col justify-center'>
        {/*text*/}
      <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
        <h1 className='text-[54px] lg:text-[108px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2 text-center lg:text-left'>
        Master Stock <br/>Market
        </h1>
        <p className='text-[26px] lg:text-[36px] font-secondary mb-2 lg:mb-4 text-center lg:text-left'>Discover effective investment strategies<br/> guided by Aviral Dixit.</p>
        <button onClick={()=>scrollToSection(coursesRef)} className="py-[18px] px-[50px] h-[66px] lg:text-[20px] flex items-center justify-center text-base uppercase font-secondary font-semibold bg-primary hover:bg-orange-500 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-200 hover:text-black text-white mb-[30px]">KNOW MORE</button>
      </div>
      {/*image */}
      <div className='flex justify-end max-h-96 lg:max-h-max '>
        <div className='realtive lg:-right-40 overflow-hidden'>
          <img className=' rounded-md lg:h-[510px] lg:w-[612px] 'src={stock} alt='profile pic'></img>
        </div>
      </div>

      </div>
    </div>
   

</div>
  )
}