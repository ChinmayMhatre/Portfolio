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
            className=" shadow-lg  rounded-xl my-10 font-poppins flex-1 bg-[#251C31] border-b-4  border-[#693B93] lg:max-w-xs"
        // data-aos="fade-up"
        // data-aos-delay={delay}
        // data-aos-duration="1000"
        >
            <a href={blog.url} target="_blank">

            <img
                src={blog.img}
                alt="blog"
                className="rounded-lg w-full object-cover"
                />
            <div className="px-10 py-4">
                <h3 className="text-xl font-bold p-0 m-0 font-poppins text-white ">
                    {blog.title}
                </h3>
                <p className="pb-4 text-xs font-poppins  text-gray-400">
                    {/* Creating elegant designs suited for your needs following core
                design theory. */}
                    {trimText(blog.description)}
                </p>
                <div className="flex gap-2 text-xs items-center ">
                    {blog.tag_list.map((tag, index) => {
                        return (
                            <p key={index} className="text-gray-300 py-1 bg-[#2C1250] border border-[#693B93] rounded-lg px-2 ">
                                {tag}
                            </p>
                        );
                    })}
                </div>
            </div>
                    </a>
        </div>
    );
};

export default Card;
