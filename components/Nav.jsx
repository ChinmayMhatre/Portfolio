import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";


const Nav = ({darkMode,setDarkMode}) => {
    return (
        <nav className=" h-16 flex justify-between items-center dark:text-white lg:mb-0 md:mb-0 md:pb-0">
            <h1 className="text-xl font-burtons">Chinmay Mhatre</h1>
            <ul className="flex items-center">
                <li>
                    <BsFillMoonStarsFill
                        onClick={() => setDarkMode(!darkMode)}
                        className="cursor-pointer text-xl"
                    />
                </li>
                <li>
                    <a
                        href=""
                        className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 "
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
