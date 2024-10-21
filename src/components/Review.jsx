import React from 'react'
import { AiOutlineLike } from "react-icons/ai";


const Review = ({ review }) => {
    return (
        <div className='flex flex-col gap-6 border-t border-[#EDEDED] py-12'>
            <div className="flex flex-row gap-6">
                <img className='size-[40px] rounded-full object-cover' src={review.profilePic || "/images/Omar2.png"} alt="" />
                <div className="flex flex-col gap-2">
                    <span className='text-small-400 text-dark-50 flex items-center gap-3'>{review.name} <time className="text-txt-500 font-[400] text-small-50">3 Days ago</time> </span>
                    <div className="flex items-center gap-2">
                        {Array(review.starsNum).fill().map((_, index) => (
                            <img className='size-[10px]' key={index} src="/images/star.png" alt="star" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h2 className='text-smal-100 text-dark-50'>{review.title}</h2>
                <p className='text-small-50 text-txt-600 leading-6 sm:leading-[26px]'>{review.desc}</p>
            </div>
            <div className="flex items-center gap-6">
                <span className='flex items-center gap-2 text-small-50 cursor-pointer'><AiOutlineLike /> Like</span>
                <span className='text-red-500 text-small-50 cursor-pointer'>Replay</span>
            </div>
        </div>
    )
}

export default Review