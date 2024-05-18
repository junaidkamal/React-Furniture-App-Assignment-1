
import React from 'react'
import bg from './assets/images/R.jpeg'
import bag from './assets/images/OIP.jpeg'
import Choose from './assets/Choose'
import Cards from './assets/Cards'
import Product from './assets/Product'
import Experiences from './assets/Experiences'
import Materials from './assets/Materials'
import Footer from './assets/Footer'


const App = () => {
  return(
    <>
    <div className='w-full flex flex-col'>

    <div className="w-full  md:h-[105vh] h-screen bg-cover relative bg-center md:px-[80px] px-8 py-[40px]"
     style={{
      backgroundImage: `url(${bg})`
      
     }}
  >
    <div className='w-full flex items-center justify-between'>
      <span className='text-black font-bold text-[28px] cursor-pointer'>Furnilux</span>
      <div className=' md:flex items-center gap-[62px]'>
      <a href="/" className='text-white no-underline font-medium text-[18px] transition-all duration-300 hover:text-[#E58411]'>
       Furniture 
      </a>
      <a href="/" className='text-white no-underline font-medium text-[18px] transition-all duration-300 hover:text-[#E58411]'>
       Shop
      </a>
      <a href="/" className='text-white no-underline font-medium text-[18px] transition-all duration-300 hover:text-[#E58411]'>
       Contact
      </a>
      <a href="/" className='text-white no-underline font-medium text-[18px] transition-all duration-300 hover:text-[#E58411]'>
       About Us
      </a>
      </div>
      <img src={bag} alt="cart"  className='cursor-pointer w-[25px]' />
    </div>

    <div className='w-full flex flex-col gap-5 items-center md:mt-[100px] mt-5'>
      <div className='text-center text-black font-bold md:text-[80px] text-[60px] md:max-w-[900pc] leading-[90px]'>
       Make Your Interior More Minimalistic & Modern
      </div>
   <p className='text-[#E58411] md:text-[24px] text-[18px] font-[200] max-w-[500px] text-center'>
    Turn your room with furnilux into a lot more minimalist with ease and speed
    </p>
    </div>
      
      <div className="w-full h-[80px] bg-gradient-to-t from-white-to-transparent absolute bottom-0 left-0"></div>
    </div>
    
    <Choose />
    <Cards />
    <Product />
    <Experiences />
    <Materials />
    <Footer />
    </div>
   
    </>
  )
}

export default App;
