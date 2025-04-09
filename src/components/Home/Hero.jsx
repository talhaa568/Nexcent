import React from 'react'
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <>
        <div className='bg-bray h-full py-10 sm:py-16 md:py-20 lg:py-28 text-bray/85 px-10'>
<div className='grid grid-cols-2 gap-5' style={{justifyItems:'center', alignItems:'center'}}  >
<div style={{alignItems:'center'}}>
    <div className='text-xl sm:text-2xl md:text-4xl lg:text-6xl  font-semibold text-silver'>
    <p>Lessons and insights</p>
    <p className='text-parrot'>
    from 8 years
    </p>
    </div>
    <div className='mt-10 text-xs sm:text-sm md:text-base text-silver' >
    <p>Where to grow your business as a photographer : site or social media?</p>
</div>
<div className='mt-10'>
<button className=' mt-2 sm:mt-0 bg-parrot flex gap-2 rounded px-5 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-2 md:py-3 lg:py-4 text-white text-nowrap  text-[10px] sm:text-xs md:text-sm lg:text-base 
        hover:scale-105 transform transform-transition duration-200 '>Register </button>
</div>
</div>


<div>
    <img src="/assets/heropic.png" alt=""  />
</div>
</div>
        </div>
        </>
    )
}

export default Hero;