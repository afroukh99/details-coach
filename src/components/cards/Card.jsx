import React from 'react'

const Card = () => {
  return (
    <div className='w-[350px] min-h-max shadow-lg p-3'>
        <img className='w-full flex-[1]' src="/images/Omar2.png" alt="" />
        <div className="flex flex-col gap-3">
            <h2 className='text-[1.5rem] sm:text-[1.6rem] lg:text-[1.8rem] 2xl:text-[2rem] text-dark-200'></h2>
            <span className='text-[1.2rem] lg:text-[1.3rem]'>Grossfit Trainer</span>
            <div className="flex items-center gap-3">
                <span className='text-[1.3rem] sm:text-[1.4rem] lg:text-[1.5rem] text-dark-100'>5</span>
                <img className='w-[12px] h-[12px] md:w-[15px] md:h-[15px]' src="/images/star.png" alt="" />
                <img className='w-[12px] h-[12px] md:w-[15px] md:h-[15px]' src="/images/star.png" alt="" />
                <img className='w-[12px] h-[12px] md:w-[15px] md:h-[15px]' src="/images/star.png" alt="" />
                <img className='w-[12px] h-[12px] md:w-[15px] md:h-[15px]' src="/images/star.png" alt="" />
                <span className='text-[1.3rem] sm:text-[1.4rem] lg:text-[1.5rem] text-dark-100'>(32)</span>
            </div>
            <button className='bg-primary text-white rounded-md p-3'>View Profile</button>
        </div>
    </div>
  )
}

export default Card