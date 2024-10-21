import React, { useState } from 'react'
import NavLink from './NavLink'
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';


export const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Why Us", path: "/why-us" },
  { label: "Coaches", path: "/coaches" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" }
];


const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div className='h-[60px] sm:h-[80px] 2xl:h-[100px]  flex px-12 '>
      <nav className='w-full flex items-center justify-between font-signika'>
        <Link><img className='w-[120px] h-[12px] sm:w-[165px] sm:h-[20px] cursor-pointer ' src="/images/Group.png" alt="" /></Link>
        <NavLinks links={links} />
        <img onClick={() => setIsOpenMenu(!isOpenMenu)} className='md:hidden w-[25px] h-[25px] z-20 cursor-pointer ' src="/images/menu.png" alt="" />
        <button className='hidden md:block bg-secondary text-white py-2 px-4 text-[16px] font-semibold'>Join Now</button>
      </nav>
      <MobileMenu isOpenMenu={isOpenMenu} />
    </div>
  )
}

export default NavBar