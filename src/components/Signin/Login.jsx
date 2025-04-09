import { div } from 'framer-motion/client';
import { stringify } from 'postcss';
import { useState } from 'react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate();
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const[error,SetError]=useState("")
    const[validity,SetValidity]=useState()


    const changeEmail = (event) =>{
        setEmail(event.target.value)
    }
   const changePass = (event) =>{
        setPass(event.target.value)
    }

     const formhandler = async(event)=>{
      event.preventDefault()

        const response = await fetch("https://staging-laundry-free-cdd931a42c66.herokuapp.com/api/auth/login",{
            method: "POST",
            //....METHODS....
            //POST C
            //GET R
            //PUT U
            //DELETE D
            //CRUD 
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
               
              },
              body:JSON.stringify({ email: email, password: pass }),
             
              
        })
         
        const data = await response.json()
        
        console.log(data)
       
       if(data.success===true) {
        navigate("/home")
        SetError("")
       }
      else {
       SetError("Invalid Email Or Password...!")
      }

      if(pass.trim()=="" && email.trim()==""){
        SetError("Please Enter Details...!")
    }
    else if(email.trim()==""){
        SetError("Please Enter Email..!")
    }
    else if(pass.trim()==""){
        SetError("Please Enter Password..!")
    }

        }

 
    
  return (
    <>
   <div style={{backgroundImage:"url(/assets/loginbg.png)"}} className=" bg-cover">
   <div style={{backgroundImage:"url(/assets/loginoverlay.png)"}} className='bg-cover  '>

<div  className=" grid grid-cols-1 md:grid-cols-2 gap-20 text-white w-full px-10 sm:px-24 md:px-40 lg:px-60 pt-24 sm:pt-20 md:pt-28 lg:pt-36 " style={{ justifyItems:'center', alignItems:'center'}} >
    <div>
        <div className='flex gap-3'>
        <img src="/assets/logo.svg" alt="" className=' h-6 sm:h-8 md:h-10' />
        <p className='mt-2 sm:mt-1 md:mt-0 font-semibold md:text-5xl sm:text-3xl text-2xl '>
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
        <span className='font-semibold shadow md:text-base sm:text-sm text-xs'>WELCOME BACK</span>
        <p className='text-base mt-2 sm:text-lg md:text-xl lg:text-2xl font-semibold'>Login To Your Account </p>
       
      {/* <div className='relative mt-8 '> 

        <input type='text' id="name" className='  w-full border rounded p-2 md:p-3 outline-none '/>
<label For="name" className=' text-black/50 absolute left-0  -translate-y-2 md:-translate-y-3 ms-4 text-xs  tracking-wide pointer-events-none duration-200 bg-white  md:px-1 '>Your Name</label>
                </div> */}

                 <div className='relative mt-5'> 

        <input onChange={changeEmail}
              value={email} type='email' id="email" className=' w-full  border rounded p-2 md:p-3  outline-none 'required/>
<label For="email" className=' text-black/50 absolute left-0  -translate-y-2 md:-translate-y-3 ms-4 text-xs  tracking-wide pointer-events-none duration-200 bg-white  md:px-1  '> Email</label>
                </div>
                
                 <div className='relative mt-5'> 

        <input onChange={changePass}
              value={pass} type='password' id="pass" className=' w-full  border rounded p-2 md:p-3  outline-none 'required/>
<label For="pass" className=' text-black/50 absolute left-0  -translate-y-2 md:-translate-y-3 ms-4 text-xs  tracking-wide pointer-events-none duration-200 bg-white  md:px-1  '> Password</label>

<p className='text-red-600 mt-2 transform transform-transition duration-300 scale-100 ease-in-out'>{error}</p>

                </div>
                <div className='text-xs flex mt-4  justify-between'>
                    <div className='flex gap-1'>
                    <input type='checkbox'></input>
                    <label>Remember me</label>
                    </div>
                    <p className='underline'>Forgot Password?</p>
                </div>

<button onClick={formhandler} className='p-3 md:p-4 bg-bray text-center text-white rounded-lg mt-5 text-xs sm:text-sm md:text-base' >Continue</button>    
        <div className='flex gap-1 justify-center  mt-2'>
            
        <hr className=' w-28 mt-2 md:mt-3' />
        <p className='text-xs sm:text-sm md:text-base'> Or </p>
       
       <hr className='w-28 mt-2 md:mt-3'/>

        </div>
        <div>
            <div className='border  p-2  md:p-4 sm:p-2 md:p-3 lg:p-4 px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg flex gap-4 sm:gap-6 md:gap-8 lg:gap-10  mt-4'>
                <img src="/assets/google.svg" alt="" className='' />
            <p className='text-[9px] sm:text-xs text-black/50 mt-1 text-nowrap md:text-wrap'> Log In With Google </p>
            </div>
            <div className='border  p-2  md:p-4 px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg flex gap-4 sm:gap-6 md:gap-8 lg:gap-10  mt-4'>
                <img src="/assets/facebook.svg" alt="" className='' />
            <p className='text-[9px] sm:text-xs text-black/50 mt-1 text-nowrap md:text-wrap'> Log In With Facebook</p>
            </div>
            <div className='border  p-2  md:p-4 px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-4'>
                <img src="/assets/apple.svg" alt="" className='' />
            <p className=' text-[9px] sm:text-xs text-black/50 mt-1 text-nowrap md:text-wrap'> Log In With Apple </p>
            </div>
        </div>

        <p className='flex mt-10 text-xs sm:text-sm justify-center text-nowrap '>New User? &nbsp; <Link to="/signup" className='underline font-semibold'>Sign Up</Link></p>
    </form>

</div>
</div>
   </div>

    </>
  )
}

export default Login;
