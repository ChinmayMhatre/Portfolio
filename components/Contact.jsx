import React from 'react'
import {AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'

const Contact = () => {
   return (
      <div className='w-[90%] md:w-[70%] lg:w-[70%]  mx-auto pb-10'>
         {/* <div className='py-10'>
            <h3
               className="font-preahvihear text-4xl "

            >
               Contact
            </h3>
            <p
               className="text-xl text-gray-400 py-2 "
            >
               Let's get in touch
            </p>
         </div> */}
         <div className="flex justify-between items-center pt-4 w-full">
            <div className="">
               {/* social icons */}
               <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/chinmaymhatre/" target="_blank" rel="noreferrer">
                     <AiFillLinkedin className='text-white transition-all duration-150 hover:text-[#9857D3]'/>
                  </a>
                  <a href="https://github.com/ChinmayMhatre" target="_blank" rel="noreferrer">
                     <FiGithub className='text-white transition-all duration-150 hover:text-[#9857D3]'/>
                  </a>
                  <a href="https://twitter.com/chinmaysmhatre" target="_blank" rel="noreferrer">
                     <AiOutlineTwitter className='text-white transition-all duration-150 hover:text-[#9857D3]' />
                  </a>
                  </div>
            </div>
            <div className="">
               <h4 className='text-white text-md font-poppins '>
                  <a href="mailto:chinmaymhatre12@gmail.com" className='text-white transition-all duration-150 hover:text-[#9857D3]'>chinmaymhatre12@gmail.com</a>
               </h4>

            </div>
         </div>
      </div>
   )
}

export default Contact