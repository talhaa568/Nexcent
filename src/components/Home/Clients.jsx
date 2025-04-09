import React from "react";
import { Link } from "react-router-dom";
function Clients() {
  
  return (
    <>
      <div  className="text-bray/90 pb-96 px-8 sm:px-14 md:px-20 lg:px-28 ">
        <div className="text-center hidden sm:block ">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold mt-4">
            Our Clients
          </h1>
          <p className="mt-3 mt-10 text-xs sm:text-sm md:text-base ">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="hidden sm:flex justify-between justify-center  gap-4 mt-7  ">
          <img src="/assets/logo1.svg" alt="" className="h-14 " />
          <img src="/assets/logo2.svg" alt="" className="h-14" />
          <img src="/assets/logo3.svg" alt="" className="h-14" />
          <img src="/assets/logo4.svg" alt="" className="h-14" />
          <img src="/assets/logo5.svg" alt="" className="h-14" />
          <img src="/assets/logo6.svg" alt="" className="h-14" />
          <img src="/assets/logo3.svg" alt="" className="h-14" />
        </div>
        <div className="text-center ">
          <p className=" mt-10 text-lg sm:text-xl md:text-3xl lg:text-5xl font-semibold text-nowrap">
            Manage your entire community <br />
            in a single system
          </p>
          <p className="mt-2 md:mt-5 text-xs sm:text-sm md:text-base">
            Who is Nexcent suitable for?
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 mt-10 gap-10">
          <div className=" place-items-center text-center shadow p-4 rounded-xl">
            <img src="/assets/member.svg" alt="" className="h-10" />
            <h1 className="text-sm sm:text-xl md:text-3xl lg:text-5xl font-semibold mt-2">
              Membership Organisations
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm mt-4">
              Our membership management
              <br />
              software provides full automation of <br />
              membership renewals and payments
            </p>
          </div>
          <div className="place-items-center text-center shadow p-4 rounded-xl">
            <img src="/assets/national.svg" alt="" className="h-10" />
            <h1 className="text-sm sm:text-xl md:text-3xl lg:text-5xl font-semibold mt-2">
              National Associations
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm mt-5">
              Our membership management
              <br />
              software provides full automation of <br />
              membership renewals and payments
            </p>
          </div>
          <div className="place-items-center text-center sm:col-span-1 col-span-2 shadow p-4 rounded-xl ">
            <img src="/assets/club.svg" alt="" className="h-10" />
            <h1 className="text-sm sm:text-xl md:text-3xl lg:text-5xl font-semibold mt-2">
              Clubs And <br /> Groups
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm mt-5 ">
              Our membership management
              <br />
              software provides full automation of <br />
              membership renewals and payments
            </p>
          </div>
        </div>


<footer>
        <div className="grid grid-cols-2 h-full mt-8 sm:mt-10 md:mt-16 lg:mt-24 " style={{alignItems:'center'}}>

          <div className="">
<img src="/assets/sechero.svg" alt="" className="hidden sm:block h-44 sm:h-64 md:h-80 lg:h-96"/>

</div>
<div className="col-span-2 sm:col-span-1">
<h1 className="text-xl  md:text-3xl lg:text-5xl font-semibold ">The unseen of spending three years at Pixelgrade</h1>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-xs sm:text-sm md:text-base">When joining the JustGo Community, your success becomes our success. In other words, our Customer Success team will be on hand from day one to ensure we understand your requirements, share your goals and work with you for a smooth adoption of our software.</p>
<button className=' mt-4 sm:mt-6 md:mt-8 lg:mt-10 bg-parrot  rounded px-5 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-2 md:py-3 lg:py-4 text-white text-nowrap  text-[10px] sm:text-xs md:text-sm lg:text-base 
        hover:scale-105 transform transform-transition duration-200 '>Learn More </button>
</div>


        </div>
        </footer>
      </div>
    </>
  );
}
export default Clients;
