import React from 'react'
import NavLink from './NavLink'



const NavLinks = ({links}) => {
    return (
        <div className='hidden md:flex items-center gap-12'>
            {
                links.map((link) => (
                    <NavLink key={link.label} path={link.path}>{link.label}</NavLink>
                ))
            }
        </div>
    )
}

export default NavLinks