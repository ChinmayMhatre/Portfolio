import React,{useEffect,useState} from "react";
import Card from "../components/Card";



const Blog = () => {

    useEffect(() => {
        getBlog();
    }, []);

    const [blogs,setBlogs] = useState([]);

    const getBlog = async () => {
        const response = await fetch("https://dev.to/api/articles?username=chinmaymhatre");
        const data = await response.json();
        let list = [];
        for(let i=0;i<3;i++){
            list.push(data[i]);
        }
        console.log(list);
        setBlogs(list);
    }


    return (
        <section className="pt-10 pb-20">
            <div>
                <h3
                    className="text-6xl py-1 mt-5 dark:text-white text-center "
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    My Blogs
                </h3>
                <p
                    className="text-xl dark:text-gray-400 text-center mt-6 "
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                >
                    I write about my learnings and share my knowledge
                </p>
            </div>
            <div className="flex lg:flex-row md:flex-col flex-col gap-0 md:gap-10 justify-center items-center">
                {blogs && blogs.map((blog,index) => {
                    return (
                        <Card key={index} blog={blog} index={index} />
                    )
                })}
                    
                {/* <Card delay={0} />
                <Card delay={200} />
                <Card delay={400} /> */}
            </div>
        </section>
    );
};

export default Blog;
