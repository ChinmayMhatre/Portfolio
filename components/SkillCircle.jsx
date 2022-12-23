import React from 'react'

const SkillCircle = ({Icon, delay}) => {
   return (
      <div
         data-aos-duration="1000"
         data-aos="zoom-in"
         data-aos-delay={delay}
         className="circle">
         <Icon
            className="text-secondary text-lg md:text-2xl"

         />
      </div>
   )
}

export default SkillCircle