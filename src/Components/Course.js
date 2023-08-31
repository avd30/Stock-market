


export const Course = () => {

    const videoUrl = 'https://www.youtube.com/watch?v=Wf1muyoy3Wo'; // Replace VIDEO_ID with your actual video's ID
  
    const videoId = videoUrl.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
    return (
      <div className=' bg-[#fbf2ea]'>
        <div className='container mx-auto h-full relative'>
          <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-4 lg:pt-20 pb-8'>
          {/*text */}
          <div className="text-black">
           <h1 className='text-[38px] lg:text-[68px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2'>2-day Stock Market <br/>Workshop</h1><br/>
           <p className='text-[24px] lg:text-[24px] font-secondary mb-4 lg:mb-12 max-w-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          </div>
           {/*images */}
          <div>
          <div>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={embedUrl}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
          </div>
  
          </div>
        </div>
      </div>
    )
  }