import React,{useEffect,useState} from "react";
import Card from "../components/Card";



const Blog = () => {




    // const getBlog = async () => {
    //     const response = await fetch("https://dev.to/api/articles?username=chinmaymhatre");
    //     const data = await response.json();
    //     let list = [];
    //     for(let i=0;i<3;i++){
    //         list.push(data[i]);
    //     }
    //     console.log(list);
    //     setBlogs(list);
    // }

    const blogs = [
        {
            "id": 1,
            "title": "Glass Effect With CSS",
            "description": "We have seen this UI in many website. It is a very simple effect but it looks very cool.",
            "tag_list": [
                "css",
                "html",
                "webdev"
            ],
            "img": "/glass.png",
            "url": "https://dev.to/chinmaymhatre/create-a-glass-ui-using-only-two-css-properties-3k9h",
        },
        {
            "id": 2,
            "title": "Intro to Typescript",
            "description": "Typescript has gained a lot of popularity over the years since it was made.",
            "tag_list": [
                "typescript",
                "beginner",
                "webdev"
            ],
            "img": "/ts.png",
            "url": "https://dev.to/chinmaymhatre/getting-started-with-typescript-cnh",
        },
        {
            "id": 2,
            "title": "Fingerprint auth in expo",
            "description": "We have seen apps that use Biometric Prompts as a layer of security in the application.",
            "tag_list": [
                "reactnative",
                "javascript",
                "tutorial"
            ],
            "img": "/fp.png",
            "url": "https://dev.to/chinmaymhatre/fingerprint-authentication-in-expo-hc3",
        },
    ] 

    return (
        <section className="py-10 w-[90%] md:w-[70%] lg:w-[70%]  mx-auto lg:h-screen flex flex-col items-center justify-center">
            <div>
                <h3
                    className="font-preahvihear text-4xl pt-10 text-center "
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    My Blogs
                </h3>
                <p
                    className="text-xl text-gray-400 text-center py-2 "
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                >
                    I write about my learnings and share my knowledge
                </p>
            </div>
            <div className="flex lg:flex-row md:flex-col flex-col gap-0 md:gap-6 justify-center items-center">
                {blogs && blogs.map((blog,index) => {
                    return (
                        <Card key={index} blog={blog} index={index} />
                    )
                })}
                    
                {/* <Card delay={0} />
                <Card delay={200} />
                <Card delay={400} /> */}
            </div>

            <button
                className=" text-white transition-all duration-150 hover:text-[#9857D3] font-poppins px-10 py-3 rounded-lg "
            >
                See more of my Blogs →
            </button>
        </section>
    );
};

export default Blog;
