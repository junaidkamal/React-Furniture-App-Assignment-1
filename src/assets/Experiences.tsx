import React from 'react'
import experiences from './images/chair2.jpeg'
import arrow from './images/Straight-Arrow_2.png'

const Experiences = () => {
  return (
    <div className='w-full flex md:flex-row flex-col items-center md:gap-48 gap-20 mt-[240px] mb-[120px]'>
      <div className="relative">
        <div className="absolute bg-[#F7F7F7] rounded-tr-[20px] left-0 top-[-66px] w-[450px] h-[300px] z-[-1]"></div>
          <img src={experiences} alt="experiences" />
          <div className="absolute bg-[#F7F7F7] rounded-[20px] right-0 top-[45%] -translate-y-1/2 translate-x-[50px] w-[450px] h-[300px] z-[-1]"></div>
      </div>
      <div className="flex flex-col mt-[-60px] md:px-0 px-8">
        <span className="font-medium text-[#E58411] text-[18px] tracking-[0.2em]">
            EXPERIENCES
        </span>
        <div className='font-bold text-[#1E1E1E] text-[42px] max-w-[450px] leading-[50px] mt-5'>
         We Provide You The Best Experiences
        </div>
        <p className='mt-5 max-w-[500px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae 
            doloremque nesciunt, tempora ab alias amet eaque facere, corrupti 
            quisquam nisi unde harum ipsam omnis.
             Expedita fugiat laudantium quaerat libero.
        </p>
        <div className="w-full flex items-center justify-start gap-3 mt-6">
            <a href="#" className='font-medium text-[14px] text-[#E58411]'>More Info</a>
            <img src={arrow} alt="arrow" className='w-[5%]' />
        </div>
      </div>
    </div>
  )
}

export default Experiences;
