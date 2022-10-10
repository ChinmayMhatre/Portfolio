import React, { useEffect, useState } from "react";

const Card = ({ index, blog }) => {
    let [delay, setDelay] = useState(0);

    const trimText = (text) => {
        if (text.length > 60) {
            return text.substring(0, 60) + "...";
        } else {
            return text;
        }
    };

    useEffect(() => {
        console.log(index);
        if (index == 0) {
            setDelay(0);
        } else if (index == 1) {
            setDelay(200);
        } else {
            setDelay(400);
        }
    }, [index]);
    return (
        <div
            className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-800 lg:max-w-xs"
            data-aos="fade-up"
            data-aos-delay={delay}
            data-aos-duration="1000"
        >
            <h3 className="text-lg font-medium pb-2 dark:text-white ">
                {blog.title}
            </h3>
            <p className="py-2  dark:text-gray-400">
                {/* Creating elegant designs suited for your needs following core
                design theory. */}
                {trimText(blog.description)}
            </p>
            <h4 className="py-4 text-teal-600">Technologies Used</h4>
            <div className="flex gap-2 text-xs items-center justify-center">
                {blog.tag_list.map((tag, index) => {
                    return (
                        <p key={index} className="text-gray-300 py-1 bg-gray-700 rounded-lg px-2 ">
                            {tag}
                        </p>
                    );
                })}

                {/* <p className="text-gray-300 py-1 bg-gray-700 rounded-lg px-2">
                    Illustrator
                </p>
                <p className="text-gray-300 py-1 bg-gray-700 rounded-lg px-2">
                    Figma
                </p>
                <p className="text-gray-300 py-1 bg-gray-700 rounded-lg px-2">
                    Indesign
                </p> */}
            </div>
            <div className=" pt-8">
                <a
                    href={blog.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-teal-600 hover:bg-teal-700 transition-all text-white py-1 px-4 rounded-lg"
                >
                    Check it out!
                </a>
            </div>
        </div>
    );
};

export default Card;
