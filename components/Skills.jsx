import React from "react";
import { ArcherContainer, ArcherElement } from 'react-archer';


const Skills = () => {
    return (
        <div className="pt-20">

            <h2 className="pt-10 text-2xl text-white w-[60%] mx-auto text-center">I'm currently looking to join a <span className="text-[#A362FF]">cross-functional</span> team
            </h2>
            <h3 className="  text-white w-[60%] mx-auto text-center">
                that values improving people's lives through accessible design
            </h3>
            <div className="flex justify-center items-center flex-col">

                <div className="skills flex gap-4 pt-20">
                    <div className="circle w-14 h-14 bg-gray-800 rounded-full">

                    </div>
                    <div className="circle w-14 h-14 bg-gray-800 rounded-full">

                    </div>
                    <div className="circle w-14 h-14 bg-gray-800 rounded-full">

                    </div>
                    <div className="circle w-14 h-14 bg-gray-800 rounded-full">

                    </div>
                    <div className="circle w-14 h-14 bg-gray-800 rounded-full">

                    </div>
                    <div className="circle w-14 h-14 bg-gray-800 rounded-full">
                        
                    </div>
                    <div className="circle w-14 h-14 bg-gray-800 rounded-full">
                        
                    </div>
                </div>
                <ArcherContainer endMarker={false} >
                    <div className="skills flex justify-center items-center gap-4 pt-10">
                        <ArcherElement
                            id="1"
                            relations={[
                                {
                                    targetId: 'img',
                                    targetAnchor: 'top',
                                    sourceAnchor: 'bottom',
                                    style: { strokeColor: '#3D1768', strokeWidth: 1 },
                                },
                            ]}
                        >
                            <div className="circle w-14 h-14 bg-gray-800 rounded-full"></div>
                        </ArcherElement>
                        <ArcherElement
                            id="2"
                            relations={[
                                {
                                    targetId: 'img',
                                    targetAnchor: 'top',
                                    sourceAnchor: 'bottom',
                                    style: { strokeColor: '#3D1768', strokeWidth: 1 },
                                },
                            ]}
                        >
                            <div className="circle w-14 h-14 bg-gray-800 rounded-full"></div>
                        </ArcherElement>
                        <ArcherElement
                            id="3"
                            relations={[
                                {
                                    targetId: 'img',
                                    targetAnchor: 'top',
                                    sourceAnchor: 'bottom',
                                    style: { strokeColor: '#3D1768', strokeWidth: 1 },
                                },
                            ]}
                        >
                            <div className="circle w-14 h-14 bg-gray-800 rounded-full"></div>
                        </ArcherElement>
                        <ArcherElement
                            id="4"
                            relations={[
                                {
                                    targetId: 'img',
                                    targetAnchor: 'top',
                                    sourceAnchor: 'bottom',
                                    style: { strokeColor: '#3D1768', strokeWidth: 1 },
                                },
                            ]}
                        >
                            <div className="circle w-14 h-14 bg-gray-800 rounded-full"></div>
                        </ArcherElement>
                        <ArcherElement
                            id="5"
                            relations={[
                                {
                                    targetId: 'img',
                                    targetAnchor: 'top',
                                    sourceAnchor: 'bottom',
                                    style: { strokeColor: '#3D1768', strokeWidth: 1 },
                                },
                            ]}
                        >
                            <div className="circle w-14 h-14 bg-gray-800 rounded-full"></div>
                        </ArcherElement>
                        <ArcherElement
                            id="6"
                            relations={[
                                {
                                    targetId: 'img',
                                    targetAnchor: 'top',
                                    sourceAnchor: 'bottom',
                                    style: { strokeColor: '#3D1768', strokeWidth: 1 },
                                },
                            ]}
                        >
                            <div className="circle w-14 h-14 bg-gray-800 rounded-full"></div>
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
                        <img src="/system.png" className="mt-40" alt="" />
                    </ArcherElement>
                </ArcherContainer>
            </div>

            {/* <h3
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
            </h4> */}
        </div>
    );
};

export default Skills;
