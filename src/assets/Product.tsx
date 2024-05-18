import chair1 from './images/office.png'
import stars from './images/stars.jpeg'
import arrow from './images/Straight-Arrow_2.png'


const product = () => {
  const chairs =[
            {title : "Office Chair", price:"10", image:chair1},
            {title : "Office Chair", price:"16", image:chair1},
            {title : "Office Chair", price:"17", image:chair1},
            {title : "Office Chair", price:"12", image:chair1},
            {title : "Office Chair", price:"19", image:chair1},
  ];
  return (
    <div className='w-full bg-[#F7F7F7F7] py-[50px] md:px-[400px] flex flex-col items-center justify-center'>
      <span className="font-bold text-[42px] text-[#1e1e1e]">Best Selling Products</span>
      <div className="w-full flex md:flex-row flex-col items-center justify-between mt-10 gap-10">
        {chairs.map((chair) => (

        <div 
        key={chair.title}
        className='bg-white w-full rounded-[20px] flex flex-col items-center justify-center'>
          <div className='grid place-items-center w-ful bg-[#FAFAFA]'>
            <img src={chair.image} alt={chair.title} />
          </div>
          <div className='w-full px-[20px] pb-[27px] pt-4 flex flex-col'>
          <span className='text-[#8D8D8D]'>Chair</span>
          <span className="font-semibold text-[#0d1b39] text-[20px] my-[5px]">
            {chair.title}
          </span>
          <img src={stars} alt="Product-Rate" className='w-[30%]' />
          <div className="flex w-full items-center justify-between mt-7">
            <span className='font-semibold text-[22px] text-[#0D1839]'>
              $ {chair.price}
            </span>
            <div className='rounded-full grid place-items-center bg-[#0D1839] w-[48px] h-[48px] cursor-pointer'>
              <span className='text-white mt-[-1px] text-[35px]'>+</span>
            </div>
          </div>
          </div>
          </div>
        ))}
      </div>
      <div className='w-full flex items-center justify-center gap-3 mt-14'>
        <a href="#" className='font-medium text-[18px] text-[#E58411]'>View All<i className='bi bi-arrow-right' /></a>
        <img src={arrow} alt="arrow" className='w-[5%]' />
      </div>
    </div>
  )
}

export default product;
