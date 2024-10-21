import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[450px] w-full  flex justify-center py-4 lg:pt-[70px] font-inter '>
      <div className="w-[80%] h-full flex flex-col items-center justify-between gap-12 py-4 ">
        <section className='w-full flex justify-between'> 
          <div className="flex flex-col gap-4 sm:gap-8 w-1/3">
            <img src="/images/Group.png" alt="" className='w-[90px] h-[13px] sm:w-[165px] sm:h-[20px]' />
            <p className='text-xsmall text-txt-200'>Your platform to connect with certified sport coaches and personal trainers for tailored workout plans in easy steps.
              Join us for a better experience.</p>
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className='text-medium text-dark-100 font-[600]'>Menu</h1>
            <Link className='text-txt-200 text-small font-[400]' to={""}>Home</Link>
            <Link className='text-txt-200 text-small font-[400]' to={""}>About</Link>
            <Link className='text-txt-200 text-small font-[400]' to={""}>Trainers</Link>
            <Link className='text-txt-200 text-small font-[400]' to={""}>Plans</Link>
            <Link className='text-txt-200 text-small font-[400]' to={""}>Reviews</Link>
          </div>
          <div className=" flex flex-col gap-4 ">
            <h1 className='text-medium text-dark-100 font-[600]'>Social Media</h1>
            <a href='' className='cursor-pointer flex items-center gap-3  text-txt-200 text-small  font-[500]'><img className='size-[15px] sm:size-[21px]' src="/images/linkedin.png" alt="" /> LinkedIn</a>
            <a href='' className='cursor-pointer flex items-center gap-3 text-txt-200 text-small  font-[500]'><img className='size-[15px] sm:size-[21px]' src="/images/facebook.png" alt="" /> Facebook</a>
            <a href='' className='cursor-pointer flex items-center gap-3 text-txt-200 text-small  font-[500]'><img className='size-[15px] sm:size-[21px]' src="/images/instagram.png" alt="" /> Instagram</a>
            <a href='' className='cursor-pointer flex items-center gap-3 text-txt-200 text-small  font-[500]'><img className='size-[15px] sm:size-[21px]' src="/images/github.png" alt="" /> Github</a>
          </div>
        </section>
        <span className='font-[500] text-small text-dark-400 '> ©  My Coach 2024</span>
      </div>
    </div>
  )
}

export default Footer