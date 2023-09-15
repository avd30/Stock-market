import { Navbar } from "./HeaderComp/Navbar";


export const Course999 = () => {

    const videoUrl = 'https://www.youtube.com/watch?v=Wf1muyoy3Wo'; // Replace VIDEO_ID with your actual video's ID
  
    const videoId = videoUrl.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
    return (
      <div className=' lg:h-screen bg-[#d2d2d2] '>
      <Navbar/>
        <div className='container mx-auto h-full relative'>
          <div className='flex flex-col lg:flex-row h-full items-center lg:items-start justify-center gap-x-24 text-center lg:text-left pt-4 lg:pt-16  pb-8'>
          {/*text */}
          <div className="text-black">
           <h1 className='text-[38px] lg:text-[68px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2'>2-day Stock Market <br/>Workshop</h1><br/>
           <h2 className="text-[30px] lg:text-[42px] font-primary font-bold capitalize leading-[100%]  mb-1">₹4000 | ⭐⭐⭐⭐</h2><br/>
           <p className='text-[24px] lg:text-[24px] font-secondary mb-4 lg:mb-12 max-w-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          </div>
           {/*images */}
          <div>
          <div>
        <div className="video-container items-center justify-center pt-4 pb-10 lg:pt-10 lg:pb-12">
          <iframe
            width="560"
            height="315"
            src={embedUrl}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <button className=" rounded-lg lg:w-[560px] py-[18px] px-[50px] h-[66px] lg:text-[20px] flex items-center justify-center text-base uppercase  font-semibold bg-primary hover:bg-orange-500 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-200 hover:text-black text-white mb-[30px]">Pay and Register</button>
      </div>
          </div>
  
          </div>
        </div>
      </div>
    )
  }