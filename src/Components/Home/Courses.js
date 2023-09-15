import React from "react";
import { Card } from "../Card";

export const Courses = ({ forwardRef }) => {

  const card2={
    name: "Stock Market Bootcamp",
    discpt:"Learn different algoritms and gain insights in predicting the market.",
    cost:"₹599",
    link:"/course-999",
  }
  const card1={
    name: "Stock Algorithms",
    discpt:"Get to know the basics of stock market with insights of trading.",
    cost:"FREE",
    link:"/course-free",
  }
  return (
    <div ref={forwardRef} className=" min-h-max bg-[#f8f8f8] justify-center">
      <div className="container mx-auto h-full relative w-full">
        <div className="flex flex-col  h-full items-center justify-center text-center lg:text-left pt-4 lg:pt-12 pb-8 px-20 lg:px-0 w-full" >
          {/*text */}
          <div className="text-black">
            <h1 className=" text-center text-[38px] lg:text-[96px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2">
              Courses
            </h1>
            <br />
            <p className="text-[24px] lg:text-[24px] text-center font-secondary mb-4 lg:mb-12 max-w-3xl">
              Learn the art of making money consistently & more importantly the
              art of not losing money in adverse situations using the best
              adjustment and firefighting strategies devised by India's top
              Options Trader P R Sundar
            </p>
          </div>
          {/*images */}
          <div className="flex flex-col lg:flex-row justify-center">
            <Card card={card1}/>
            <Card card={card2}/>
          </div>
        </div>
      </div>
    </div>
  );
};
