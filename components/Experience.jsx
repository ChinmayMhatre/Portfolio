import React from 'react'
import Skills from './Skills'

const Experience = () => {
  return (
    <div className='w-[100%] md:w-[70%] lg:w-[70%]  mx-auto py-20'>
        <h2 className='font-preahvihear text-4xl py-20 text-center'>
            Work Experience
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-4">
            <div className="absolute w-[50%] h-[100%] gradient blur-lg top-[50%] -translate-x-[50%] left-[50%] -translate-y-[50%] rounded-[100%]">
            </div>
            <div className="py-10 px-10 flex gap-4 items-center exgradient rounded-xl z-10 border-t-2 border-[#693B93]">
                <img src="/capg.png" alt="" />
                <div className="">
                    <h3 className='text-2xl'>Software Engineer</h3>
                    <h4 className='text-white text-md'>Capgemini</h4>
                </div>
            </div>
            <div className="py-10 px-10 flex gap-4 items-center exgradient2 rounded-xl z-10 border-t-2 border-[#693B93]">
            <img src="/author.png" alt="" />
                <div className="">
                    <h3 className='text-2xl'>Technical Author</h3>
                    <h4 className='text-white text-md'>Educative.inc</h4>
                </div>
            </div>
            <div className="py-10 px-10 flex gap-4 items-center exgradient3 rounded-xl z-10 border-t-2 border-[#693B93]">
            <img src="/alegria.png" alt="" />
                <div className="">
                    <h3 className='text-2xl'>Wordpress Developer</h3>
                    <h4 className='text-white text-md'>Alegria - the festival of joy</h4>
                </div>
            </div>
            <div className="py-10 px-10 flex gap-4 items-center exgradient4 rounded-xl z-10 border-t-2 border-[#693B93]">
            <img src="/freelance.png" alt="" />
                <div className="">
                    <h3 className='text-2xl'>Front End Developer</h3>
                    <h4 className='text-white text-md'>Freelancer</h4>
                </div>
            </div>
        </div>
        <Skills/>
    </div>
  )
}

export default Experience