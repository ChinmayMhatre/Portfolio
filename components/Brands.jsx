import React,{useEffect,useState} from "react";
import Card from "../components/Card";



const Brands = () => {

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
        <section className="pt-10 pb-20  lg:h-screen flex flex-col items-center justify-center">
            <div>
                <h3
                    className="text-6xl py-1 mt-5 dark:text-white text-center "
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    Brands
                </h3>
                <p
                    className="text-xl dark:text-gray-400 text-center mt-6 "
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                >
                    Brands I have worked with
                </p>
            </div>
           
        </section>
    );
};

export default Brands;
