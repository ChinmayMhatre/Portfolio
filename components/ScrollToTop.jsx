import React,{useEffect,useState} from 'react'

const ScrollToTop = () => {

    const [isVisible,setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 300){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",toggleVisibility);
        return () => {
            window.removeEventListener("scroll",toggleVisibility);
        }
    },[]);

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }



    return (
        <div>
                <div onClick={scrollToTop} className={`${isVisible?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}  fixed bottom-10 right-10 duration-500 focus:outline-none transition-all bg-[#2C1250] hover:bg-[#240f42] text-white p-2 rounded-full cursor-pointer`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
        </div>
        </div>
    )
}

export default ScrollToTop