import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from "./components/Footer"
import NavBar from "./components/navbar/NavBar"

const Layout = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-between'>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout