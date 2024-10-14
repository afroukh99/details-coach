import React from 'react'

const Service = ({service}) => {
  return (
    <div className='flex flex-col gap-8 lg:gap-4 border-t border-[txt-300] py-2'>
        <h2 className='text-primary text-[1.4rem] sm:text-[1.5rem] md:text-[1.8rem] 2xl:text-[2rem] font-[600]'>{service.title}</h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-14">
             <p className='  text-txt-300 text-[1.2rem] sm:text-[1.3rem] xl:text-[1.5rem]'>{service.description}</p>
             <div className=" flex sm:flex-col   justify-between sm:justify-normal items-center  sm:gap-2">
                <span className='text-txt-300 text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem]'>Price of service</span>
                <span className='text-txt-300 font-[900] text-[1.3rem] sm:text-[1.7rem] xl:text-[2.2rem] 2xl:text-[2.5rem]'>250 MAD</span>
                <button className='w-[80px] sm:w-[120px] lg:w-[150px]  p-1 sm:p-2 bg-primary text-white 
                text-[1.2rem] sm:text-[1.4rem] lg:text-[1.5rem] rounded-[5px] hover:bg-secondary'>Book</button>
             </div>
        </div>
        <div className="flex gap-8  items-center text-primary text-[.8rem] sm:text-[1rem] lg:text-[1.1rem]  2xl:text-[1.2rem] font-[600] ">
            <span className='flex items-center gap-4'><img src="/images/timer.png" alt="" />{service.duration}</span>
            <span className='flex items-center gap-4'><img src="/images/location.png" alt="" />{service.location}</span>
        </div>
    </div>
  )
}

export default Service