import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#F7F7F7F7] pt-[120px] md:px-[190px] px-20 pb-[56px] mt-[120px]'>
      <div className="w-full flex md:flex-row flex-col md:items-center justify-between md:gap-0 gap-8">
        <div className="flex flex-col gap-7">
            <span className="font-bold text-[#1e1e1e] text-[28px]">Furnilux</span>
            <p className="font-medium text-[15px] max-w-[300px] text-[#1e1e1e]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem et, illum beatae corporis cum.
            </p>
        </div>
        <div className="flex flex-col md:mb-0 mb-5">
            <span className="font-medium text-[17px] mb-5 text-[#E58411]">Services</span>
            <a href="#" className='font-medium text-[15px] mb-4 text-[#1e1e1e]'>Email Marketing</a>
            <a href="#" className='font-medium text-[15px] mb-4 text-[#1e1e1e]'>Compaigns</a>
            <a href="#" className='font-medium text-[15px]  text-[#1e1e1e]'>Branding</a>
        </div>
        <div className="flex flex-col md:mb-0 mb-5">
            <span className="font-medium text-[17px] mb-5 text-[#E58411]">Furniture</span>
            <a href="#" className='font-medium text-[15px] mb-4 text-[#1e1e1e]'>Bed</a>
            <a href="#" className='font-medium text-[15px] mb-4 text-[#1e1e1e]'>Chairs</a>
            <a href="#" className='font-medium text-[15px]  text-[#1e1e1e]'>All</a>
        </div>
        <div className="flex flex-col">
            <span className="font-medium text-[17px] mb-5 text-[#E58411]">Follow Us</span>
            <a href="#" className='font-medium text-[15px] mb-4 text-[#1e1e1e]'>Facebook</a>
            <a href="#" className='font-medium text-[15px] mb-4 text-[#1e1e1e]'>Instagram</a>
            <a href="#" className='font-medium text-[15px]  text-[#1e1e1e]'>X</a>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center justify-between w-full md:gap-0 gap-4 mt-[120px]">
        <span className="opacity-70 text-[#1E2833] text-[15px]">Copyright @Junaid 2024</span>
        <div className="flex items-center gap-[18px]">
            <a href="#" className='font-medium text-[15px] text-[#1e1e1e]'>Terms and Conditions</a>
            <a href="#" className='font-medium text-[15px] text-[#1e1e1e]'>Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
