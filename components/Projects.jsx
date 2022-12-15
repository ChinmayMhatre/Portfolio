import React from 'react'

const Projects = () => {
   return (
      <div className='w-[100%] md:w-[70%] lg:w-[70%]  mx-auto py-20'>
         <h2 className='font-preahvihear text-4xl py-20 text-center'>Projects</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
            <div className="">
               <h4 className='text-[#9857D3] font-poppins'>Featured Project</h4>
               <h3 className='font-poppins text-2xl dont-semibold text-[#CCD6F6]'>Guitar Practice</h3>
               <p className='font-poppins text-[#CCD6F6]'>
                  A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.
               </p>
               <h4 className='text-[#9857D3] pt-10'>Technologies Used</h4>
               <div className="flex gap-2 pt-2">
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
               </div>
            </div>
            <div className="bg-project-pattern object-contain flex items-center justify-center rounded-md">
               <img src="/dashboard.png" className='w-[80%] py-10 object-contain shadow-lg rounded-md' alt="" />
            </div>
            <div className="bg-project-pattern object-contain flex items-center justify-center rounded-md">
               <img src="/gif.png" className='w-[80%] py-10 object-contain shadow-lg rounded-md' alt="" />
            </div>
            <div className="">
               <h4 className='text-[#9857D3] font-poppins'>Featured Project</h4>
               <h3 className='font-poppins text-2xl dont-semibold text-[#CCD6F6]'>Guitar Practice</h3>
               <p className='font-poppins text-[#CCD6F6]'>
                  A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.
               </p>
               <h4 className='text-[#9857D3] pt-10'>Technologies Used</h4>
               <div className="flex gap-2 pt-2">
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
               </div>
            </div>

            <div className="">
               <h4 className='text-[#9857D3] font-poppins'>Featured Project</h4>
               <h3 className='font-poppins text-2xl dont-semibold text-[#CCD6F6]'>Guitar Practice</h3>
               <p className='font-poppins text-[#CCD6F6]'>
                  A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.
               </p>
               <h4 className='text-[#9857D3] pt-10'>Technologies Used</h4>
               <div className="flex gap-2 pt-2">
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
                  <div className="rounded-md px-2  bg-gray-700 text-[#CCD6F6]">Next.js</div>
               </div>
            </div>
            <div className="bg-project-pattern py-10 object-contain flex items-center justify-center rounded-md">
               <img src="/dashboard.png" className='w-[80%] object-contain shadow-lg rounded-md' alt="" />
            </div>
         </div>
      </div>
   )
}

export default Projects