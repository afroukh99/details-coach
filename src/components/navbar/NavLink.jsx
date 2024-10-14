import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


const NavLink = ({ path, children }) => {
    const pathname = useLocation().pathname;


    return (
        <Link className={`text-link font-light text-[1.4rem]  md:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2rem] 
              ${pathname == path && 'text-secondary font-semibold'}`}
            to={path}>
            {children}
        </Link>
    )
}

export default NavLink