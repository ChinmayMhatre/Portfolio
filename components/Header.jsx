import React from "react";
import Image from "next/image";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
} from "react-icons/ai";


const Header = () => {
    return (
        <div className="flex lg:flex-row md:flex-col flex-col lg:gap-32 justify-center items-center h-screen">
            <div className=" text-center p-10 flex flex-col items-center justify-center">
                <h2
                    className="lg:text-[100px] text-6xl py-2 font-greenlondon tracking-wider font-medium text-teal-600 "
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                >
                    Chinmay Mhatre
                </h2>
                <h3
                    className="text-2xl py-2 md:text-4xl pt-4 dark:text-white"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    Front End Developer.
                </h3>
                <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    className="text-lg py-5 leading-8 max-w-xl mx-auto text-gray-500 md:text-xl"
                >
                    Join me down below and let&apos;s get cracking!
                </p>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="text-5xl flex justify-center gap-10 py-3 text-gray-600   "
                >
                    <a
                        className="hover:text-teal-600 transition-all"
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/chinmaysmhatre"
                    >
                        <AiFillTwitterCircle />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chinmaymhatre/"
                        className="hover:text-teal-600 transition-all "
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillLinkedin />
                    </a>
                </div>
            </div>

            {/* <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="relative bg-gradient-to-b from-teal-500 overflow-hidden rounded-full w-80 h-80 mt-20  lg:h-96 lg:w-96 "
            >
                <Image
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    src="/profile.webp"
                    layout="fill"
                    objectFit="contain"
                    alt="Picture of the author"
                    width={300}
                    height={300}
                    style={{ transform: "translateX(-20px)" }}
                />
            </div> */}
        </div>
    );
};

export default Header;
