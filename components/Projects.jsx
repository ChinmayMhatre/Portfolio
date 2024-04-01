import React from 'react'

const Projects = () => {

   const data = [
      {
         primary: true,
         category: 'Open Source Contributions',
         title: 'BioDrop',
         description: 'Connect to your audience with a single link. Showcase the content you create and your projects in one place',
         technologies: ['Next.js', 'TailwindCSS', 'MongoDB'],
         primaryLink: 'https://www.biodrop.io/',
         secondaryLink: 'https://github.com/EddieHubCommunity/BioDrop/pulls?q=is%3Apr+author%3AChinmayMhatre+is%3Aclosed+sort%3Acomments-desc',
         image: '/bioDrop.png',
         primaryButtonText: 'Live Project',
         secondaryButtonText: 'Contributions'
      },
      {
         primary: false,
         category: 'Featured Project',
         title: 'Helium Holiday Gift Guide',
         description: 'Celebrate the festive season with gifts that keep on giving',
         technologies: ['React.js', 'styled-components'],
         primaryLink: 'https://twitter.com/helium/status/1737233124042633256',
         secondaryLink: ' https://helium-gift-guide.vercel.app/',
         image: '/helium.png',
         primaryButtonText: 'Post From Helium',
         secondaryButtonText: 'Preview Link'
      },
      {
         primary: true,
         category: 'Hackathon Project',
         title: 'CryptoWave',
         description: 'Wave and pay via crypto',
         technologies: ['React.js', 'TailwindCSS', 'ShadCn', 'Web3Auth'],
         primaryLink: 'https://devfolio.co/projects/cryptowave-2ffa',
         image: '/cryptoWave.jpeg',
         primaryButtonText: 'Project Page',
      }
   ]

   return (
      <div className='container pb-10'>
         <div className='pb-10'>
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
         <div className=" grid grid-col-1 gap-y-10 md:gap-y-20">
            {
               data.map((project, index) => (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 ">
                     <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-ancor-placement="center-bottom"
                        className={`${project.primary ? 'md:order-1' : 'md:order-2'} order-2 `} >
                        <h4 className='text-secondary font-poppins'>{project.category}</h4>
                        <h3 className='text-2xl dont-semibold text-[#CCD6F6]'>{project.title}</h3>
                        <p className='font-poppins text-[#CCD6F6]'>
                           {project.description}
                        </p>
                        <h4 className='text-secondary pt-2'>Technologies Used</h4>
                        <div className="flex gap-2 pt-2 flex-wrap">
                           {
                              project.technologies.map((tech, index) => (
                                 <div key={index} className="projectTag">{tech}</div>
                              ))
                           }
                        </div>
                        <div className="flex gap-2 pt-4">
                           {
                              project.primaryLink && project.primaryButtonText && (
                                 <a href={project.primaryLink} className='projectButton'>
                                    {project.primaryButtonText}
                                 </a>
                              )
                           }
                           {
                              project.secondaryLink && project.secondaryButtonText && (
                                 <a href={project.secondaryLink} className='projectButton'>
                                    {project.secondaryButtonText}
                                 </a>
                              )
                           }
                        </div>
                     </div>
                     <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        data-aos-ancor-placement="center-bottom"
                        className={` ${project.primary ? 'md:order-2' : 'md:order-1'} order-1 bg-project-pattern object-contain bg-no-repeat   bg-cover flex items-center justify-center rounded-md`}>
                        <img src={project.image} className='w-[90%] py-10 object-contain shadow-lg rounded-md' alt="" />
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default Projects