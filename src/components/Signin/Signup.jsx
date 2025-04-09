import { useState } from 'react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
        const [name,setName]=useState("")
 const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const navigate= useNavigate();
    const [error,SetError]=useState("")
    const changeName = (event) =>{
        setName(event.target.value)
    }
    const changeEmail = (event) =>{
        setEmail(event.target.value)
    }
   const changePass = (event) =>{
        setPass(event.target.value)
    }
    function navigating(){
if(email.trim() === "" || pass.trim()===""){
SetError("Email And Password Are Required")
}

else{
SetError("")

navigate("/home")
}
    }
  return (
    <>
    
   <div style={{backgroundImage:"url(/assets/signupbg.png)"}} className=" bg-cover">
   <div style={{backgroundImage:"url(/assets/signupoverlay.png)"}} className='bg-cover  '>

<div  className=" grid grid-cols-1 md:grid-cols-2 gap-20 text-white w-full px-10 sm:px-24 md:px-40 lg:px-60 pt-24 sm:pt-20 md:pt-28 lg:pt-36 " style={{ justifyItems:'center', alignItems:'center'}} >
    <div >
        <div className='flex gap-3'>
        <img src="/assets/logo.svg" alt="" className=' h-6 sm:h-8 md:h-10'/>
        <p className=' mt-2 sm:mt-1 md:mt-0 font-semibold md:text-5xl sm:text-3xl text-2xl '>
            Nexcent
        </p>
        </div>
        <div className='hidden sm:block'>
            <p className='font-semibold md:text-5xl sm:text-3xl text-2xl mt-16 sm:mt-24 md:mt-32 lg:mt-40'>
                Building The Future...
            </p>
        <p className='mt-5 md:text-base sm:text-sm text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
        elit, sed do eiusmod tempor incididunt ut labore et <br />
         dolore magna aliqua. </p>
         <img src="/assets/slider.svg" alt="" className="mt-5 w-12 sm:w-16 md:w-20 lg:w-32 " />
         </div>
    </div>


    <form className='bg-white rounded-lg md:rounded-2xl  text-black p-4 sm:p-6 md:p-8 lg:p-10 w-full grid grid-cols-1 col-span-1 px-10 py-10 '>
        <span className='font-semibold shadow md:text-base sm:text-sm text-xs'>LET'S GET YOU STARTED</span>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'>Create an Account</p>
       
      <div className='relative mt-8 '> 

        <input type='text' id="name" className='  w-full border rounded p-2 md:p-3 outline-none '/>
<label onChange={changeName}
value={name} For="name" className=' text-black/50 absolute left-0  -translate-y-2 md:-translate-y-3 ms-4 text-xs  tracking-wide pointer-events-none duration-200 bg-white  md:px-1 '>Your Name</label>
                </div>

                 <div className='relative mt-5'> 

        <input onChange={changeEmail}
        value={email} type='email' id="email" className=' w-full  border rounded p-2 md:p-3  outline-none ' required/>
<label For="email" className=' text-black/50 absolute left-0  -translate-y-2 md:-translate-y-3 ms-4 text-xs  tracking-wide pointer-events-none duration-200 bg-white  md:px-1  '> Email</label>
                </div>
                
                 <div className='relative mt-5'> 

        <input onChange={changePass} 
        value={pass} type='password' id="pass" className=' w-full  border rounded p-2 md:p-3  outline-none 'required/>
<label For="pass" className=' text-black/50 absolute left-0  -translate-y-2 md:-translate-y-3 ms-4 text-xs  tracking-wide pointer-events-none duration-200 bg-white  md:px-1  '> Password</label>
                </div>
<button onClick={navigating} type='submit' className='p-3 md:p-4 bg-bray text-white rounded-lg mt-5 text-xs sm:text-sm md:text-base'>Get Started</button>
        <div className='flex gap-1 justify-center'>
            
        <hr className=' w-28 mt-2 md:mt-3' />
        <p className='text-xs sm:text-sm md:text-base'> Or </p>
       
       <hr className='w-28 mt-2 md:mt-3'/>

        </div>
        <div>
            <div className='border p-2  md:p-4   px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg flex gap-4 sm:gap-6 md:gap-8 lg:gap-10  mt-4'>
                <img src="/assets/google.svg" alt="" className='' />
            <p className='text-[9px] sm:text-xs text-black/50 mt-1 text-nowrap md:text-wrap'> Sign up With Google </p>
            </div>
            <div className='border p-2  md:p-4  px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg flex gap-4 sm:gap-6 md:gap-8 lg:gap-10  mt-4'>
                <img src="/assets/facebook.svg" alt="" className='' />
            <p className='text-[9px] sm:text-xs text-black/50 mt-1 text-nowrap md:text-wrap'> Sign up With Facebook</p>
            </div>
            <div className='border p-2  md:p-4  px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-4'>
                <img src="/assets/apple.svg" alt="" className='' />
            <p className=' text-[9px] sm:text-xs text-black/50 mt-1 text-nowrap md:text-wrap'> Sign up With Apple </p>
            </div>
        </div>

        <p className='flex mt-10 text-xs sm:text-sm justify-center text-nowrap '>Already have an Account? &nbsp; <Link to="/" className='underline font-semibold'>Login Here</Link></p>
    </form>

</div>
</div>
   </div>
    </>
  )
}

export default Signup;
