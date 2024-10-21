import React from 'react'
import Carousel from "../../../components/Carousel"

const slides = [
  {
    img: "https://images.pexels.com/photos/5327541/pexels-photo-5327541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    img: "https://images.pexels.com/photos/4720242/pexels-photo-4720242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    img: "https://images.pexels.com/photos/13896072/pexels-photo-13896072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    img: "https://images.pexels.com/photos/13896072/pexels-photo-13896072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  } , 
  {
    img: "https://images.pexels.com/photos/4720242/pexels-photo-4720242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    img: "https://images.pexels.com/photos/4720242/pexels-photo-4720242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
]

const Gallery = () => {
  return (
    <div className='bg-bgGray w-full h-[250px] sm:h-[350px] flex items-center rounded-[10px]  px-10'>
      <Carousel >
        {
          slides.map((item, index) => (
            <img className='h-[150px] w-[120px] sm:h-[200px] sm:w-[250px] object-fill rounded-[5px] px-2' key={index} src={item.img} alt="" />
          ))
        }
      </Carousel>
    </div>
  )
}

export default Gallery