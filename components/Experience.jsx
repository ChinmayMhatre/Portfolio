import React from 'react'
import Skills from './Skills'

const Experience = () => {
    return (
        <div className='w-[90%] md:w-[70%] lg:w-[70%]  mx-auto pb-20'>
            <div className='py-10'>
                <h3
                    className="font-preahvihear text-4xl pt-10 text-center "
                    data-aos-duration="1000"
                    data-aos="fade-up"
                >
                    Work Experience
                </h3>
                <p
                    className="text-xl text-gray-400 text-center py-2 "
                    data-aos-duration="1000"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    My journey so far
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-4">
                <div className="absolute w-[50%] h-[100%] gradient blur-lg top-[50%] -translate-x-[50%] left-[50%] -translate-y-[50%] rounded-[100%]">
                </div>
                <div
                    data-aos-duration="1000"
                    data-aos="fade-up"
                    className="py-10 px-10 flex gap-4 items-center exgradient rounded-xl z-10 border-t-2 border-[#693B93]">
                    <img src="/capg.png" alt="" />
                    <div className="">
                        <h3 className='text-2xl font-preahvihear'>Software Engineer</h3>
                        <h4 className='text-white text-md font-poppins'>Capgemini</h4>
                    </div>
                </div>
                <div
                    data-aos-duration="1000"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="py-10 px-10 flex gap-4 items-center exgradient2 rounded-xl z-10 border-t-2 border-[#693B93]">
                    <img src="/author.png" alt="" />
                    <div className="">
                        <h3 className='text-2xl font-preahvihear'>Technical Author</h3>
                        <h4 className='text-white text-md font-poppins'>Educative.inc</h4>
                    </div>
                </div>
                <div
                    data-aos-duration="1000"
                    data-aos="fade-up"
                    className="py-10 px-10 flex gap-4 items-center exgradient3 rounded-xl z-10 border-t-2 border-[#693B93]">
                    <img src="/alegria.png" alt="" />
                    <div className="">
                        <h3 className='text-2xl font-preahvihear'>Wordpress Developer</h3>
                        <h4 className='text-white text-md font-poppins'>Alegria - the festival of joy</h4>
                    </div>
                </div>
                <div
                    data-aos-duration="1000"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="py-10 px-10 flex font-poppins gap-4 items-center exgradient4 rounded-xl z-10 border-t-2 border-[#693B93]">
                    <img src="/freelance.png" alt="" />
                    <div className="">
                        <h3 className='text-2xl font-preahvihear'>Front End Developer</h3>
                        <h4 className='text-white text-md'>Freelancer</h4>
                    </div>
                </div>
            </div>
            <Skills />
        </div>
    )
}

export default Experience