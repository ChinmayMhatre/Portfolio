/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,} from 'react-icons/ai'
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [darkMode,setDarkMode] = useState(true);
  return (
    <div className={darkMode?'dark':""} >
      <Head>
        <title>Chinmay Mhatre Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className = "bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 "
      >
        <section
          className = "min-h-screen"
        >
          <nav
            className='py-10 mb-12 flex justify-between dark:text-white lg:mb-0'
          >
            <h1
              className='text-xl font-burtons'
            >Chinmay Mhatre</h1>
            <ul
              className='flex items-center'
            >
              <li><BsFillMoonStarsFill
              onClick={()=>setDarkMode(!darkMode)}
                className='cursor-pointer text-xl'
              /></li>
              <li><a href=""
                className='bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 '
              >Resume</a></li>
            </ul>
          </nav>
          <div className=" text-center p-10 ">
            <h2 className='text-5xl py-2 font-medium text-teal-600 md:text-6xl'>Chinmay Mhatre</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer.</h3>
            <p className='text-lg py-5 leading-8 max-w-xl mx-auto text-gray-500 md:text-xl'>Join me down below and let&apos;s get cracking!</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="">
              <AiFillTwitterCircle/>
            </a>
            <a href="">
              <AiFillLinkedin/>
            </a>
          </div>
          <div className="relative bg-gradient-to-b overflow-hidden from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto md:h-96 md:w-96 ">
            <Image
              src="/dev-ed-wave.png"
              layout='fill'
              objectFit='cover'
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 mt-5 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <Image src="/design.png" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white ">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-gray-200">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <Image src="/code.png" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Code your dream project
              </h3>
              <p className="py-2 dark:text-gray-200">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <Image src="/consulting.png" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Consulting</h3>
              <p className="py-2 dark:text-gray-200">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 ">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src="/web1.png"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src="/web2.png"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src="/web3.png"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src="/web4.png"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src="/web5.png"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src="/web6.png"
              />
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
