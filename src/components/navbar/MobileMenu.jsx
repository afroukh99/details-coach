import React from 'react'
import NavLink from './NavLink'
import { links } from './NavBar'

const MobileMenu = ({isOpenMenu}) => {


  return (
    <div className={`sm:hidden h-full w-[200px] flex  justify-center items-center  bg-[#fdfcfc]  shadow-md fixed  right-[-100%] duration-500 ease-in-out   ${isOpenMenu && 'right-[0%]'}`}>
      <div className="h-[70%] w-full p-10 flex flex-col  justify-between  items-center">
        {
          links.map((link) => (
            <NavLink key={link.label} path={link.path}>{link.label}</NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default MobileMenu