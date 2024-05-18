import arrow from './images/Straight-Arrow_2.png'

const Choose = () => {
  
    const whyItems = [
        {
          title:"Luxury Facilities",
          description:"The advantage of hiring a workspace with us is that gives you comfortable services and all-around and best"
        },
        {
            title:"Affordable Price",
            description:"The advantage of hiring a workspace with us is that gives you comfortable services and all-around and best"
          },
          {
            title:"Many Choices",
            description:"The advantage of hiring a workspace with us is that gives you comfortable services and all-around and best"
          },
    ];
  return (
    <div className="w-full flex md:flex-row flex-col md:items-center items-start justify-between md:px-[80px] px-[40px] py-[120px]">
    <span className="text-black font-bold text-[42px]">
         Why <br /> Choose Us
    </span>
    <div className="flex md:flex-row flex-col items-center gap-[28px] md:mt-0 mt-8">
        {whyItems.map((item) => (
            <div 
            key={item.title}
            className="flex flex-col"
            >
           <span className="font-bold text-[#1E1E1E] text-[24px]">{item.title}</span>
           <p className="mt-5 font-[300] text-[#1E1E1E] max-w-[300px]">{item.description}</p>
           <div className="flex items-start gap-4 cursor-pointer">
            <a href="#" className="font-medium text-[14px] text-[#E58411]">
                Read More
            </a>
            <img src={arrow} alt="" className='w-[5%]'  />

           </div>
           </div>
        ))}
    </div>
    </div>
  )
}

export default Choose;
