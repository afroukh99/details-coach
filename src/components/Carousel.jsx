import React from 'react';
import MyCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const CustomLeftArrow = ({ onClick }) => (
  <button onClick={onClick} className="absolute left-0 text-[20px] sm:text-[24px] text-primary bg-white rounded-full shadow-sm hidden md:flex p-2">
    <IoIosArrowBack />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button onClick={onClick} className="absolute right-0 text-[20px]  sm:text-[24px] text-primary bg-white shadow-sm rounded-full hidden md:flex p-2">
    <IoIosArrowForward />
  </button>
);

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const Carousel = ({ children }) => {
  return (
    <div className="w-full p-2">
      <MyCarousel
        responsive={responsive}
        infinite={false}
        minimumTouchDrag={80}
        rewind={false}
        rewindWithAnimation={false}
        slidesToSlide={1}
        swipeable
        rtl={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {children}
      </MyCarousel>
    </div>
  );
}

export default Carousel;
