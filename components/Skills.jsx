import React from "react";
import { ArcherContainer, ArcherElement } from 'react-archer';
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { SiFirebase, SiMongodb, SiExpress, SiFigma, SiTailwindcss } from "react-icons/si";
import { DiGit, DiCss3, DiJavascript1 } from "react-icons/di";
import { AiFillGithub, AiOutlineHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa"
import SkillCircle from "./SkillCircle";

let relations= [
    {
        targetId: 'img',
        targetAnchor: 'top',
        sourceAnchor: 'bottom',
        style: { strokeColor: '#3D1768', strokeWidth: 1 },
    },
]


const Skills = () => {
    return (
        <div className="pt-20">

            <h2
                data-aos-duration="1000"
                data-aos="fade-up"
                className="pt-10 text-2xl text-white md:w-[60%] mx-auto text-center">I'm currently looking to join a <span className="text-[#A362FF]">cross-functional</span> team
            </h2>
            <h3
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-delay="100"
                className="  text-white md:w-[60%] mx-auto text-center">
                that values improving people's lives through accessible design
            </h3>
            <div className="flex justify-center items-center flex-col">

                <div className="skills flex gap-2 md:gap-4 pt-20">
                        <SkillCircle Icon={GrReactjs} delay="100" />
                        <SkillCircle Icon={TbBrandNextjs} delay="200" />
                        <SkillCircle Icon={DiJavascript1} delay="300" />
                        <SkillCircle Icon={DiCss3} delay="400" />
                        <SkillCircle Icon={AiOutlineHtml5} delay="500" />
                        <SkillCircle Icon={SiTailwindcss} delay="600" />
                        <SkillCircle Icon={SiFigma} delay="700" />
                </div>
                <ArcherContainer endMarker={false} >
                    <div className="skills flex justify-center items-center gap-2 md:gap-4 pt-10">
                        <ArcherElement
                            id="1"
                            relations={relations}
                        >
                            <div
                                data-aos-duration="1000"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                                className="circle">
                                <SiFirebase
                                    className="text-[#9857D3] text-lg md:text-2xl" />
                            </div>
                        </ArcherElement>
                        <ArcherElement
                            id="2"
                            relations={relations}
                        >
                            <div
                                data-aos-duration="1000"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                                className="circle">
                                <DiGit className="text-[#9857D3] text-lg md:text-2xl" />
                            </div>
                        </ArcherElement>
                        <ArcherElement
                            id="3"
                            relations={relations}
                        >
                            <div data-aos-duration="1000"
                                data-aos="zoom-in"
                                data-aos-delay="300" className="circle ">
                                <AiFillGithub className="text-[#9857D3] text-lg md:text-2xl" />
                            </div>
                        </ArcherElement>
                        <ArcherElement
                            id="4"
                            relations={relations}
                        >
                            <div data-aos-duration="1000"
                                data-aos="zoom-in"
                                data-aos-delay="400" className="circle ">
                                <FaNodeJs className="text-[#9857D3] text-lg md:text-2xl" />
                            </div>
                        </ArcherElement>
                        <ArcherElement
                            id="5"
                            relations={relations}
                        >
                            <div data-aos-duration="1000"
                                data-aos="zoom-in"
                                data-aos-delay="500" className="circle ">
                                <SiMongodb className="text-[#9857D3] text-lg md:text-2xl" />
                            </div>
                        </ArcherElement>
                        <ArcherElement
                            id="6"
                            relations={relations}
                        >
                            <div data-aos-duration="1000"
                                data-aos="zoom-in"
                                data-aos-delay="600" className="circle ">
                                <SiExpress className="text-[#9857D3] text-lg md:text-2xl" />
                            </div>
                        </ArcherElement>


                    </div>
                    <ArcherElement
                        id="img"
                        relations={[
                            {
                                targetAnchor: 'middle',
                                sourceAnchor: 'middle',
                                style: { strokeColor: 'blue', strokeWidth: 1 },
                                label: <div style={{ marginTop: '-20px' }}>Arrow 2</div>,
                            },
                        ]}
                    >
                        <img id="system" src="/system.png" className="mt-40" alt="" />
                    </ArcherElement>
                </ArcherContainer>
            </div>
        </div>
    );
};

export default Skills;
