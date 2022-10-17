import React from "react";
import Cube from "../components/Cube";


const Skills = () => {
    return (
        <div className="h-screen ">
            <h3
                className="text-6xl py-1  dark:text-white text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                Skills
            </h3>
            <h4
                className="text-xl dark:text-gray-400 text-center mt-6 "
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
            >
                Here are some of the technologies I&apos;ve been working with
            </h4>
            <Cube />
        </div>
    );
};

export default Skills;
