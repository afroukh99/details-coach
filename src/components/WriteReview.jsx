import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";



const WriteReview = () => {
  const [active, setActive] = useState(true);

  const handlClickStar = (e) => {
    console.log(e.target)
  }
  return (
    <div className='flex flex-col gap-10 font-inter'>
      <h1 className='text-dark-50 text-medium-100 font-[600]'>Write a Review</h1>
      <div className="flex flex-col gap-1">
        <h2 className='font-[400] text-small-300'>What is it like to Product?</h2>
        <div className="flex items-center gap-1">
          {
            Array(5).fill().map((_, index) => (
              active ? (
                <FaStar key={index} className={`cursor-pointer text-yellow-500`} onClick={handlClickStar} />
              ) : (
                <FaRegStar key={index} className={`cursor-pointer `} onClick={handlClickStar} />
              )
            ))
          }
        </div>
      </div>
      <form className='flex flex-col gap-6' action="">
        <div className="flex flex-col gap-2">
          <label className='text-small-300 text-dark-50' htmlFor="">Review Title</label>
          <input className='border rounded-[15px] h-[40px] md:h-[55px] px-4 placeholder:text-small-100 text-txt-600' type="text" placeholder='' />
        </div>
        <div className="flex flex-col gap-2">
          <label className='text-small-300 text-dark-50' htmlFor="">Review Content</label>
          <textarea cols={10} rows={10} className='w-full border p-4 rounded-[15px] placeholder:text-small-100 text-txt-600 leading-[26px]' placeholder='Write a review' />
        </div>
        <button className='bg-primary text-white text-small-400  sm:w-[135px] xl:w-[180px] px-2 py-4 rounded-[10px] sm:rounded-[45px] hover:bg-secondary'>Submit Review</button>
      </form>
    </div>
  )
}

export default WriteReview