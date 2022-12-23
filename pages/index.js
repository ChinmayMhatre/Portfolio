/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Blog from "../components/Blog";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import previewImage from "../public/animoji.png";

export default function Home() {
    return (
        <div >
            <Head>
                <title>Chinmay Mhatre Portfolio</title>
                <meta
                    name="description"
                    content="A FrontEnd Developer Portfolio"
                />
                <meta property="og:image" content={previewImage} key="ogimage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=" bg-primary ">
                <Header />
                <Experience />
                <Projects />
                <Blog />
                <ScrollToTop />
                <Contact />
            </main>
        </div>
    );
}
