import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiOutlineHtml5,
} from "react-icons/ai";
import { FaNodeJs, FaReact, FaGit } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiFirebase } from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";
import { DiJavascript1, DiMongodb } from "react-icons/di";

const Cube = () => {
    return (
        <section className="cube-section">
                    <div className="container">
                        <div className="cube">
                            <div style={{ "--x": -1, "--y": 0 }}>
                                <span style={{ "--i": 3 }}></span>
                                <span style={{ "--i": 2 }}></span>
                                <span style={{ "--i": 1 }}></span>
                            </div>
                            <div style={{ "--x": 0, "--y": 0 }}>
                                <span style={{ "--i": 3 }}></span>
                                <span style={{ "--i": 2 }}></span>
                                <span style={{ "--i": 1 }}></span>
                            </div>
                            <div style={{ "--x": 1, "--y": 0 }}>
                                <span style={{ "--i": 3 }}></span>
                                <span style={{ "--i": 2 }}></span>
                                <span style={{ "--i": 1 }}></span>
                            </div>
                        </div>
                        <div className="cube">
                            <div style={{ "--x": -1, "--y": 0 }}>
                                <span style={{ "--i": 3 }}></span>
                                <span style={{ "--i": 2 }}></span>
                                <span style={{ "--i": 1 }}></span>
                            </div>
                            <div style={{ "--x": 0, "--y": 0 }}>
                                <span style={{ "--i": 3 }}></span>
                                <span style={{ "--i": 2 }}></span>
                                <span style={{ "--i": 1 }}></span>
                            </div>
                            <div style={{ "--x": 1, "--y": 0 }}>
                                <span style={{ "--i": 3 }}></span>
                                <span style={{ "--i": 2 }}></span>
                                <span style={{ "--i": 1 }}></span>
                            </div>
                        </div>
                        <div className="cube">
                            <div style={{ "--x": -1, "--y": 0 }}>
                                <span style={{ "--i": 3 }}>
                                    <button
                                        data-tooltip-target="tooltip-click"
                                        data-tooltip-trigger="click"
                                        type="button"
                                    >
                                        <DiJavascript1 />
                                    </button>
                                </span>
                                <span style={{ "--i": 2 }}>
                                    <FaNodeJs />
                                </span>
                                <span style={{ "--i": 1 }}>
                                    <FaGit />
                                </span>
                            </div>
                            <div style={{ "--x": 0, "--y": 0 }}>
                                <span style={{ "--i": 3 }}>
                                    <AiOutlineHtml5 />
                                </span>
                                <span style={{ "--i": 2 }}>
                                    <FaReact />
                                </span>
                                <span style={{ "--i": 1 }}>
                                    <FiGithub />
                                </span>
                            </div>
                            <div style={{ "--x": 1, "--y": 0 }}>
                                <span style={{ "--i": 3 }}>
                                    <TbBrandCss3 />
                                </span>
                                <span style={{ "--i": 2 }}>
                                    <DiMongodb />
                                </span>
                                <span style={{ "--i": 1 }}>
                                    <SiFirebase />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        id="tooltip-click"
                        role="tooltip"
                        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        Tooltip content
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </section>
    )
};

export default Cube;
