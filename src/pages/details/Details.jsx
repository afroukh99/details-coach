import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from "../../components/Banner"
import NavLink from '../../components/navbar/NavLink';
import DetailsTable from '../../components/DetailsTable';

const schedules = [
    { days: 'Mon - Fri', time: '8.00 am - 9.00 am' },
    { days: 'Sat - Sun', time: '10.00 am - 12.00 pm' },
    { days: 'Sunday', time: '14.00 pm - 16.00 pm' }
];

const links = [
    { label: "Services", path: "/details/services" },
    { label: "Gallery", path: "/details/gallery" },
    { label: "Reviews", path: "/details/reviews" },

];


const Details = () => {
    return (
        <div className='w-full flex flex-col items-center sm:items-start  gap-14 mb-[10rem]'>
            <Banner src={"/images/banner.jpg"} />
            <div className="w-full flex flex-col  sm:flex-row gap-8 sm:gap-6 md:gap-12  px-[2.5rem] xl:px-[5rem] ">
                <section className=' flex-[1] h-full w-full  flex flex-col justify-center gap-7 xl:gap-14'>
                    <img className=' object-contain' src="/images/Omar2.png" alt="" />
                    <div className="min-h-max flex flex-col gap-10  p-6  bg-bgGray  rounded-[20px]">
                        <h2 className='text-black text-[1.4rem] md:text-[1.7rem] xl:text-[2rem] 2xl:text-[2.5rem]'>My Time Schedule</h2>
                        {
                            schedules.map((schedule, index) => (
                                <div key={index} className="flex items-center justify-between text-txt-200 text-[1.1rem] md:text-[1.3rem] xl:text-[1.6rem] 2xl:text-[1.8rem] p-3 border-t">
                                    <span>{schedule.days}:</span>
                                    <span>{schedule.time}</span>
                                </div>
                            ))}
                    </div>
                    <button className='text-white bg-primary h-[40px] md:h-[45px]  xl:h-[68px] w-full text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 2xl:text-[1.6rem] rounded-[5px] mt-4 xl:mt-10 hover:bg-secondary'>Book An Appointment</button>
                </section>
                <section className='flex-[2] w-full flex items-center justify-center'>
                    <div className="w-[90%]  flex flex-col gap-6">
                        <h1 className='text-dark-200 text-[2.2rem] sm:text-[2.7rem] md:text-[3.2rem] xl:text-[4rem] 2xl:text-[4.5rem] font-[700]'>Oussama Ben Omar</h1>
                        <div className="flex sm:gap-4 justify-between sm:justify-normal items-center">
                            <div className="flex gap-4 items-center">
                                <img className='w-[12px] h-[12px] md:w-[15px] md:h-[15px]' src="/images/star.png" alt="" />
                                <img className='w-[12px]  h-[12px] md:w-[15px] md:h-[15px]' src="/images/star.png" alt="" />
                                <img className='w-[12px]  h-[12px] md:w-[15px] md:h-[15px]' src="/images/star.png" alt="" />
                                <img className='w-[17px] h-[17px] md:w-[20px] md:h-[20px]' src="/images/halfStar.png" alt="" />
                                <img className='w-[12px]  h-[12px] md:w-[15px] md:h-[15px]' src="/images/emptyStar.png" alt="" />
                            </div>
                            <span className='text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem]  xl:text-[1.7rem] 2xl:text-[2rem] text-txt-400 font-[600]'>Rated 3.8/5.0 | <span className='underline'>2537 reviews</span></span>
                        </div>
                        <h2 className='text-primary text-[1.7rem] 2xl:text-[2rem] font-[600]'>Fitness Trainer</h2>
                        <p className='text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2rem]  text-txt-400 '>
                            Proactively  envisioned multimedia based expertise crosses media growth strategies.  Seamlessly visualize quality intelectual captal without superor collaboration idea sharing Holistically pontficate installed based portals after maintainabled products. engaged world wide methodologies with enabled  Completely pursue scalable customer service through sustainable potentialitiesProactively  envisioned multimedia based expertise crosses media growth strategies.  Seamlessly visualize quality intelectual captal without superor collaboration idea sharing Holistically pontficate installed based portals after maintainabled products.
                            engaged world wide methodologies with enabled  Completely pursue scalable customer service through sustainable potentialities
                        </p>
                        <DetailsTable />
                    </div>
                </section>
            </div>

            <div className='w-[80%] md:w-[70%] lg:w-[60%] xl:w-[820px] p-1 min-h-max flex flex-col gap-16 sm:ml-auto sm:mr-36 mt-20'>
                <section className='text-txt-100 text-[1.6rem] flex items-center justify-around sm:justify-center md:justify-normal sm:gap-32  '>
                    {
                        links.map((link) => (
                            <NavLink key={link.label} path={link.path}>{link.label}</NavLink>
                        ))
                    }
                </section>
                <Outlet />
            </div>

          

        </div>
    )
}

export default Details