import React from 'react'
import Stars from './Stars'

const Feedback = () => {
  return (
    <div className='flex flex-col gap-5 w-full'>
      <h1 className='text-medium-300 text-dark-500 font-[700]'>Customers Feedback</h1>
      <section className='flex flex-col sm:flex-row gap-3 h-[230px]'>
        <div className="flex-[1] bg-bgGray2 flex  flex-col gap-2 p-4 sm:p-0 sm:gap-5 bg- items-center justify-center rounded-[8px]">
          <h1 className='text-primary font-[700] text-larger'>4.8</h1>
          <Stars starsNumber={5} size={"size-[10px] md:size-[14px]"} />
          <span className='text-small-200 text-txt-500'>Product Rating</span>
        </div>
        <div className="flex-[3] flex flex-col justify-between bg-bgGray2 rounded-[8px] p-5 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <input type="range" className='w-[60%] sm:w-[80%]' value={60} />
            <Stars starsNumber={5} size={'size-[8px] sm:size-[10px]'} />
            <span className='text-primary text-small-200'>60%</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <input type="range" className='w-[60%] sm:w-[80%]' value={20} />
            <Stars starsNumber={5} size={'size-[8px] sm:size-[10px]'} />
            <span className='text-primary text-small-200'>20%</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <input type="range" className='w-[60%] sm:w-[80%]' value={10} />
            <Stars starsNumber={5} size={'size-[8px] sm:size-[10px]'} />
            <span className='text-primary text-small-200'>10%</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <input type="range" className='w-[60%] sm:w-[80%]' value={4} />
            <Stars starsNumber={5} size={'size-[8px] sm:size-[10px]'} />
            <span className='text-primary text-small-200'>4%</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <input type="range" className='w-[60%] sm:w-[80%] ' value={6} />
            <Stars starsNumber={5} size={'size-[8px] sm:size-[10px]'} />
            <span className='text-primary text-small-200'>6%</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Feedback