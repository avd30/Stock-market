import React from 'react'
import { Link } from 'react-router-dom';
import stock from "../../pics/stock.jpg";
import {Gray} from '../../pics/gray-background.jpg'





export const Hero = () => {
  return (
    <div className=" h-100vh bg-image:{Gray}">
    <div className='container mx-auto h-full relative'>
      {/*Text and img*/}
      <div className='flex flex-col justify-center'>
        {/*text*/}
      <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
        <h1 className='text-[54px] lg:text-[108px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2 text-center lg:text-left'>
        Master Stock <br/>Market
        </h1>
        <p className='text-[26px] lg:text-[36px] font-secondary mb-4 lg:mb-12'>By Aviral Dixit</p>
        <Link to={'/course'} className="py-[18px] px-[50px] h-[66px] flex items-center justify-center text-base uppercase font-secondary font-semibold bg-primary text-white mb-[30px]">KNOW MORE</Link>
      </div>
      {/*image */}
      <div className='flex justify-end max-h-96 lg:max-h-max '>
        <div className='realtive lg:-right-40 overflow-hidden'>
          <img className=' rounded-md lg:h-[512px] lg:w-[648px]'src={stock} alt='profile pic'></img>
        </div>
      </div>

      </div>
    </div>
    <div className='h-[30px]'>
    <br/>
      <hr/>
    </div>

</div>
  )
}