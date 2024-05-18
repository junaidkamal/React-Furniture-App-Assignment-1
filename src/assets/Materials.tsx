import React from 'react'
import material1 from './images/material1.jpeg'
import material2 from './images/material2.jpeg'
import arrow from './images/Straight-Arrow_2.png'

const Materials = () => {
  return (
    <div className='w-full flex md:flex-row-reverse flex-col items-center justify-between md:pl-[80px] pl-0 mb-[120px]'>
      <div className="relative flex item-center md:gap-[42px] gap-0">
        <div className="absolute bg-[#F7F7F7] rounded-tl-[20px] right-0 top-3 w-[300px] h-[300px] z-[-1] md:block hidden"></div>
         <img src={material1} alt="material" className='w-[40%]' />   
         <img src={material2} alt="material" className='w-[40%]' />
      </div>
      <div className="flex flex-col md:mt-[-60px] mt-5 md:px-0 px-8">
        <span className='font-medium text-[#E58411] text-[18px] tracking-[0.2em]'>
            Materials
        </span>
        <span className='font-bold text-[#1E1E1E] text-[42px] max-w-[450px] leading-[50px] mt-5'>
            Very Serious Materisl For Making Furniture
        </span>
        <p className="mt-5 max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Assumenda, illo esse accusamus incidunt neque accusantium 
             consequatur animi. Excepturi in non quas alias animi
              vero, neque asperiores veniam ut ipsam vitae?
        </p>
        <div className="w-full flex items-center justify-start gap-3 mt-6">
            <a href="#" className='font-medium text-[14px] text-[#E58411]'>
                More Info
            </a>
            <img src={arrow} alt="arrow" className='w-[5%]' />
        </div>
      </div>

    </div>
  )
}

export default Materials;
