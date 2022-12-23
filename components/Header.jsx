import React from "react";
import Image from "next/image";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
} from "react-icons/ai";


const Header = () => {
    return (
        <div className="container">
            <div className=" py-10 flex-col md:flex-row flex items-center">
                <div className="relative md:overflow-visible ">
                    <div className="gradient blur-lg w-[300px] mx-auto  h-[300px] md:block rounded-[100%]">

                    </div>
                    <img src="/animoji.png"
                        className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[150px] z-20" alt="" />
                </div>
                <div className=" block">
                    <div className=" justify-center relative flex flex-col w-[90%]">
                        <img src="/arrow.png" className="absolute hidden md:block z-20 -top-0 -left-28" alt="" />
                        <div className="py-5 "
                            data-aos-duration="1000"
                            data-aos="fade-right"
                        >
                            <p className="text-white font-preahvihear w-60">Hello! I Am <span className=" text-[#7127BA]">Chinmay Mhatre</span></p>
                            <h3 className="text-white text-xl mt-12 hidden md:block">A Developer who
                            </h3>
                            <h2 className="text-4xl pt-2 font-semibold hidden md:block">Judges a website
                                by its repo... </h2>
                        </div>
                        <p
                            data-aos-duration="1000"
                            data-aos="fade-right"
                            data-aos-delay="100"
                            className="text-white text-xs font-preahvihear font-thin hidden md:block">
                            Because if the repo does not impress you what else can?

                        </p>
                    </div>
                </div>

            </div>
            <div className=" justify-center flex flex-col ">
                <div className="py-5"
                    data-aos-duration="1000"
                    data-aos="fade-right"
                    data-aos-delay="100"
                >

                    <h2 className="text-4xl md:text-[50px] font-semibold">I'm a Front End Developer. </h2>
                    <h3 className="text-white text-[21px] pt-2 ">Currently, I'm a Software Engineer at
                        <img src="/Capgemini.svg" alt="" className="w-36 inline-block ml-2" />
                    </h3>
                </div>
                <p 
                data-aos-duration="1000"
                data-aos="fade-right"
                data-aos-delay="200"
                className="text-white text-[22px] font-preahvihear leading-8 pt-2 md:pr-40">
                    I specialize in building (and occasionally designing)  digital experiences.

                </p>
                <p
                data-aos-duration="1000"
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-white text-[22px] font-preahvihear leading-8 pt-2 md:pr-40">I make meaningful and delightful website. I also like to write about all things JavaScript.</p>
            </div>

        </div>
    );
};

export default Header;
