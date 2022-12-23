import React from 'react'
import {AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'

const Contact = () => {
   return (
      <div className='container pb-10'>
         <div className="flex justify-between items-center pt-4 w-full">
            <div className="">
               {/* social icons */}
               <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/chinmaymhatre/" target="_blank" rel="noreferrer">
                     <AiFillLinkedin className='text-white transition-all duration-150 hover:text-secondary'/>
                  </a>
                  <a href="https://github.com/ChinmayMhatre" target="_blank" rel="noreferrer">
                     <FiGithub className='text-white transition-all duration-150 hover:text-secondary'/>
                  </a>
                  <a href="https://twitter.com/chinmaysmhatre" target="_blank" rel="noreferrer">
                     <AiOutlineTwitter className='text-white transition-all duration-150 hover:text-secondary' />
                  </a>
                  </div>
            </div>
            <div className="">
               <h4 className='text-white text-md font-poppins '>
                  <a href="mailto:chinmaymhatre12@gmail.com" className='text-white transition-all duration-150 hover:text-secondary'>chinmaymhatre12@gmail.com</a>
               </h4>

            </div>
         </div>
      </div>
   )
}

export default Contact