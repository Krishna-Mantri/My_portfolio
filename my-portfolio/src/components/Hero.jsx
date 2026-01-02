import React from "react";
import Navbar from "./Navbar";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import resume from "/resume.pdf";
import robo from "/robo.png";


export default function Hero() {
    return (
        <div className='relative overflow-hidden min-h-137.5 sm:min-h-150 flex flex-col items-center'>
            <div className='md-h-[550px] h-125 w-112.5 bg-linear-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl'></div>
            <Navbar />
            <main
                id="home"
                className="flex flex-col md:flex-row items-center justify-center  w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32  pt-24 mt-14 md:mt-0 z-10">
                    <section
                    className="flex-1 mr:28 md:text-left mt-10 relative "
                    data-aos="fade-up"
                    data-aos-delay="500" >
                        <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
                        <header>
                            <h1 className="text-4xl sm:text-4xlmd:text-5xl font-bold text-white mb-4">Krishna Mantri</h1>
                            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2">FullStack Developer</h2>
                        </header>
                        <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">I build responsive websites and applications with modern technologies.</p>
                        <div className="flex items-center space-x-4 mb-6">
                            <a href="https://www.linkedin.com/in/krishna-mantri-41165628a/">
                                <FaLinkedin className='w-11 h-11 bg-gray-200 hover:text-purple-400 transition'/>
                            </a>
                            <a href="https://github.com/Krishna-Mantri">
                                <FaGithub className='w-11 h-11 bg-gray-200 hover:text-purple-400 transition'/>
                            </a>
                        </div>
                        <a href={resume} download>
                            <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0,7)] rounded-full text-lg">
                                Download Resume
                            </button>
                        </a>
                    </section>
                    <figure data-aos='fade-up' data-aos-delay='700' className="flex-1 flex justify-center md:justify-end mt-0">
                        <img src={robo} alt="Robot Illustration" className="h-75 sm:h-100 md:h-121.25 w-62.5 sm:w-120 object-cover rounded-lg"/>

                    </figure>

            </main> 

        </div>
    );
}