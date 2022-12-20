import React from 'react'

const Projects = () => {
   return (
      <div className='w-[90%] md:w-[70%] lg:w-[70%]  mx-auto pb-10'>
         <div className='pb-20'>
            <h3
               className="font-preahvihear text-4xl pt-10 text-center "
            >
               My Projects
            </h3>
            <p
               className="text-xl text-gray-400 text-center py-2 "
            >
               I build projects to learn new technologies and to showcase my skills
            </p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-20">
            <div
               data-aos="fade-right"
               data-aos-duration="1000"
               data-aos-ancor-placement="center-bottom"
               className="order-1">
               <h4 className='text-[#9857D3] font-poppins'>Featured Project</h4>
               <h3 className='text-2xl dont-semibold text-[#CCD6F6]'>Guitar Practice</h3>
               <p className='font-poppins text-[#CCD6F6]'>
                  A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.
               </p>
               <h4 className='text-[#9857D3] pt-2'>Technologies Used</h4>
               <div className="flex gap-2 pt-2">
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
               </div>
               <div className="flex gap-2 pt-4">
                  <a href="" className='text-white border-1 transition-all duration-150 border hover:text-[#9857D3] hover:border-[#9857D3] rounded-md border-white py-2 px-2'>
                     Live Project
                  </a>
                  <a href="" className='text-white transition-all duration-150 border-1  border border-white py-2 px-2 hover:text-[#9857D3] hover:border-[#9857D3] rounded-md'>
                     Repository
                  </a>
               </div>
            </div>
            <div
               data-aos="fade-right"
               data-aos-duration="1000"
               data-aos-delay="200"
               data-aos-ancor-placement="center-bottom"
               className=" order-2 bg-project-pattern object-contain flex items-center justify-center rounded-md">
               <img src="/dashboard.png" className='w-[90%] py-10 object-contain shadow-lg rounded-md' alt="" />
            </div>
            <div
               data-aos="fade-right"
               data-aos-duration="1000"
               data-aos-ancor-placement="center-bottom"
               className=" order-4 md:order-3 bg-project-pattern object-contain flex items-center justify-center rounded-md">
               <img src="/gif.png" className='w-[90%] py-10 object-contain shadow-lg rounded-md' alt="" />
            </div>
            <div
               data-aos="fade-right"
               data-aos-duration="1000"
               data-aos-delay="200"
               data-aos-ancor-placement="center-bottom"
               className="order-3 md:order-4">
               <h4 className='text-[#9857D3] font-poppins'>Featured Project</h4>
               <h3 className='text-2xl dont-semibold text-[#CCD6F6]'>Guitar Practice</h3>
               <p className='font-poppins text-[#CCD6F6]'>
                  A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.
               </p>
               <h4 className='text-[#9857D3] pt-2'>Technologies Used</h4>
               <div className="flex gap-2 pt-2">
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
               </div>
               <div className="flex gap-2 pt-4">
                  <a href="" className='text-white border-1 transition-all duration-150 border hover:text-[#9857D3] hover:border-[#9857D3] rounded-md border-white py-2 px-2'>
                     Live Project
                  </a>
                  <a href="" className='text-white transition-all duration-150 border-1  border border-white py-2 px-2 hover:text-[#9857D3] hover:border-[#9857D3] rounded-md'>
                     Repository
                  </a>
               </div>
            </div>

            <div 
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-ancor-placement="center-bottom"
            className="order-5">
               <h4 className='text-[#9857D3] font-poppins'>Featured Project</h4>
               <h3 className=' text-2xl dont-semibold text-[#CCD6F6]'>Gumroad Clone</h3>
               <p className='font-poppins text-[#CCD6F6]'>
                  A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.
               </p>
               <h4 className='text-[#9857D3] pt-2'>Technologies Used</h4>
               <div className="flex gap-2 pt-2">
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
               </div>
               <div className="flex gap-2 pt-4">
                  <a href="https://cute-truffle-ba32fc.netlify.app/" className='text-white border-1 transition-all duration-150 border hover:text-[#9857D3] hover:border-[#9857D3] rounded-md border-white py-2 px-2'>
                     Live Project
                  </a>
                  <a href="" className='text-white transition-all duration-150 border-1  border border-white py-2 px-2 hover:text-[#9857D3] hover:border-[#9857D3] rounded-md'>
                     Repository
                  </a>
               </div>
            </div>
            <div
               data-aos="fade-right"
               data-aos-duration="1000"
               data-aos-delay="200"
               data-aos-ancor-placement="center-bottom"
               className="order-6 bg-project-pattern py-10 object-contain flex items-center justify-center rounded-md">
               <img src="/dashboard.png" className='w-[90%] object-contain shadow-lg rounded-md' alt="" />
            </div>
         </div>
      </div>
   )
}

export default Projects