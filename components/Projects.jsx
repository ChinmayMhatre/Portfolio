import React from 'react'

const Projects = () => {
   return (
      <div className='container pb-10'>
         <div className='pb-20'>
            <h3
               className="font-preahvihear text-4xl pt-10 text-center "
               data-aos-duration="1000"
               data-aos="fade-up"
            >
               My Projects
            </h3>
            <p
               className="text-xl text-gray-400 text-center py-2 "
               data-aos-duration="1000"
               data-aos="fade-up"
               data-aos-delay="100"
            >
               I build projects to learn new technologies and to showcase my skills
            </p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-20">
            <div
               data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-ancor-placement="center-bottom"
               className="order-1">
               <h4 className='text-secondary font-poppins'>Featured Project</h4>
               <h3 className='text-2xl dont-semibold text-[#CCD6F6]'>Guitar Practice</h3>
               <p className='font-poppins text-[#CCD6F6]'>
                  Helps guitar players to plan their guitar sessions effectively and keep a track of it at the same time . It is a helpful tool for all levels of guitar player, be it beginner or advanced .
               </p>
               <h4 className='text-secondary pt-2'>Technologies Used</h4>
               <div className="flex gap-2 pt-2">
                  <div className="projectTag">React.js</div>
                  <div className="projectTag">MongoDB</div>
                  <div className="projectTag">Express</div>
               </div>
               <div className="flex gap-2 pt-4">
                  <a href="https://smiling-cyan-bathing-suit.cyclic.app/" className='projectButton'>
                     Live Project
                  </a>
                  <a href="https://github.com/ChinmayMhatre/Guitar-Practise" className='projectButton'>
                     Repository
                  </a>
               </div>
            </div>
            <div
               data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-delay="200"
               data-aos-ancor-placement="center-bottom"
               className=" order-2 bg-project-pattern object-contain flex items-center justify-center rounded-md">
               <img src="/dashboard.png" className='w-[90%] py-10 object-contain shadow-lg rounded-md' alt="" />
            </div>
            <div
               data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-ancor-placement="center-bottom"
               className=" order-4 md:order-3 bg-project-pattern object-contain flex items-center justify-center rounded-md">
               <img src="/gif.png" className='w-[90%] py-10 object-contain shadow-lg rounded-md' alt="" />
            </div>
            <div
               data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-delay="200"
               data-aos-ancor-placement="center-bottom"
               className="order-3 md:order-4">
               <h4 className='text-secondary font-poppins'>Featured Project</h4>
               <h3 className='text-2xl dont-semibold text-[#CCD6F6]'>Gif Jif</h3>
               <p className='font-poppins text-[#CCD6F6]'>
                  A place to upload your favorite gifs and share them with the world. Users can upload, view and like gifs.
               </p>
               <h4 className='text-secondary pt-2'>Technologies Used</h4>
               <div className="flex gap-2 pt-2">
                  <div className="projectTag">Next.js</div>
                  <div className="projectTag">TailwindCSS</div>
                  <div className="projectTag">Firebase</div>
               </div>
               <div className="flex gap-2 pt-4">
                  <a href="https://resplendent-bunny-3098d4.netlify.app/" className='projectButton'>
                     Live Project
                  </a>
                  <a href="https://github.com/ChinmayMhatre/Gif-Or-Jif" className='projectButton'>
                     Repository
                  </a>
               </div>
            </div>

            <div
               data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-ancor-placement="center-bottom"
               className="order-5">
               <h4 className='text-secondary font-poppins'>Featured Project</h4>
               <h3 className=' text-2xl dont-semibold text-[#CCD6F6]'>Gumroad Clone</h3>
               <p className='font-poppins text-[#CCD6F6]'>
                  A landing page clone of Gumroad, a platform for creators to sell their digital products. 
               </p>
               <h4 className='text-secondary pt-2'>Technologies Used</h4>
               <div className="flex gap-2 pt-2">
                  <div className="projectTag">Next.js</div>
                  <div className="projectTag">TailwindCSS</div>
                  <div className="projectTag">Netlify</div>
               </div>
               <div className="flex gap-2 pt-4">
                  <a href="https://cute-truffle-ba32fc.netlify.app/" target="_blank" className='projectButton'>
                     Live Project
                  </a>
                  <a href="https://github.com/ChinmayMhatre/gumroad-clone" target="_blank" className='projectButton'>
                     Repository
                  </a>
               </div>
            </div>
            <div
               data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-delay="200"
               data-aos-ancor-placement="center-bottom"
               className="order-6 bg-project-pattern py-10 object-contain flex items-center justify-center rounded-md">
               <img src="/gumroad.png" className='w-[90%] object-contain shadow-lg rounded-md' alt="" />
            </div>
         </div>
      </div>
   )
}

export default Projects