import React from 'react'

const Banner = ({src}) => {
  console.log(src)
  return (
    <div className='w-screen'>
      <img className='w-full xl:h-[230px] 2xl:h-[280px] object-contain' src={src} alt="" />
    </div>
  )
}

export default Banner