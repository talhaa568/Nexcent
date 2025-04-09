import { div } from 'framer-motion/client';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';



function Nav() {
    const[menuClick,setMenuClick]=useState(false)
    const[dark,setDark]=useState(false)
    const location =useLocation()
   
    function menu(){
        setMenuClick(!menuClick)
    }
function changemode(){
    setDark(!dark)
}
    
    return (
        <>
<div>

     
                    <div>
<nav className={`flex justify-between px-6 sm:px-10 md:px-14 lg:px-20   py-4 font-inter text-bray ${dark? "bg-bray text-white":"bg-white" }`}>
        <div className='flex gap-2 mt-2'>
      
        <span className=" fa-solid fa-bars sm:hidden mt-2 " onClick={menu}></span>
      

            <img src="/assets/logo.svg" alt="" className=' hidden sm:flex h-8' />
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ' >Nexcent</p>
<div className={` rounded rounded-3xl pt-3 text-white px-3 ml-3 ${dark? " bg-gray-900":"bg-parrot"}`}>
   <span className='mr-2 fa-solid fa-moon '></span> 
            <label class="switch">
                <input type="checkbox" value={dark} onClick={changemode}/>
                <span class="slider round "></span>
              </label>
              </div>

             
             
        </div>
        <div className=' sm:text-xs md:text-sm lg:text-base '>         
            <div className='flex gap-4 sm:gap-7 md:gap-10  '>
                <div className='hidden sm:flex  gap-2 sm:gap-4 md:gap-6 lg:gap-10 mt-3'>
        <Link to="/home" className={` ${location.pathname ==="/home" ? " underline underline-offset-10 text-parrot scale-110" : "hover:underline hover:text-parrot hover:underline-offset-10 hover:scale-110 transform transform-transition duration-200"} `}>Home</Link>
        <Link className='hover:underline hover:text-parrot hover:underline-offset-10 hover:scale-110 transform transform-transition duration-200'>Features</Link>
        <Link className='hover:underline hover:text-parrot hover:underline-offset-10 hover:scale-110 transform transform-transition duration-200'>Community</Link>
        <Link className='hover:underline hover:text-parrot hover:underline-offset-10 hover:scale-110 transform transform-transition duration-200'>Blog</Link>
        <Link className='hover:underline hover:text-parrot hover:underline-offset-10 hover:scale-110 transform transform-transition duration-200'>Pricing</Link>
        </div>
        <Link to="/signup"  className={` mt-2 sm:mt-0 bg-parrot flex gap-2 rounded px-5 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-2 md:py-3 lg:py-4 text-white text-nowrap  text-[10px] sm:text-xs md:text-sm lg:text-base 
        hover:scale-105 transform transform-transition duration-300 `}>Register Now <img src="/assets/arrow.svg" alt="" className='w-3 sm:w-4' /></Link>

        </div>

        </div>
      
    </nav>
                    </div>
                
    
    {menuClick && (
  <div className='bg-parrot h-screen block sm:hidden   text-white'>
    <br />
    <hr className='border border-silver mx-1' />
    <ul className=' px-1 '>
        
        <li className='flex gap-1 px-10 py-3 hover:underline   transform transform-transition duration-200'>Home<img src="/assets/arrow.svg" alt="" className='w-3 mt-1'/></li>
        <hr className='border border-sliver' />
        <li className='flex gap-1 px-10 py-3 hover:underline   transform transform-transition duration-200'>Features<img src="/assets/arrow.svg" alt="" className='w-3 mt-1'/></li>
        <hr className='border border-sliver' />
        <li className='flex gap-1 px-10 py-3 hover:underline   transform transform-transition duration-200'>Community<img src="/assets/arrow.svg" alt="" className='w-3 mt-1'/></li>
        <hr className='border border-sliver' />
        <li className='flex gap-1 px-10 py-3 hover:underline   transform transform-transition duration-200'>Blog<img src="/assets/arrow.svg" alt="" className='w-3 mt-1'/></li>
        <hr className='border border-sliver' />
        <li className='flex gap-1 px-10 py-3 hover:underline   transform transform-transition duration-200'>Pricing<img src="/assets/arrow.svg" alt="" className='w-3 mt-1'/></li>
        <hr className='border border-sliver' />
        </ul>
  </div>
)}
</div>
        </>
    )
}

export default Nav;