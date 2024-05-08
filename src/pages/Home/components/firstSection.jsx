
import { useContext } from 'react';

import React, { useEffect, useState } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/contextProvider';
import Header from '../../../layouts/header';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

import myphone from '../../../assets/img/myphone.jpg'

export const FirstSection = () => {
    const [test, setTest] = useContext(MyContext)
    const [count, setCount] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (count < 20) { // Corrected the condition
                setCount((prevCount) => prevCount + 3);
            } else {
                clearInterval(intervalId); // Stop the interval when reaching 30
            }
        }, 80); // Corrected the interval to 1 second (1000 milliseconds)

        return () => clearInterval(intervalId); // Cleanup function to stop the interval on unmount
    }, [count]);

    return (
        <>
            <Header />
            <body className=' text-white '>
                {/* herosection */}
                <section className="home w-full h-[100vh] p-8 px-52 flex flex-col justify-center items-center">
                    <div className=' w-[60vw] h-[42vh] flex flex-col justify-between '>
                        <h1 className='text-md text-teal-200  ' >Hello, and Welcome</h1>
                        <h1 className='text-4xl font-bold '>I'm IMANE NEJMAOUI <span className='text-teal-200'>.</span></h1>
                        <h1 className='text-5xl font-bold '>I build things for the web<span className='text-teal-200'>,</span></h1>
                        <p className='text-lg w-[41vw] '> I'm a full-stack developer specializing in the <span className='text-teal-200'>front-end.</span> I love designing, developing, and animating websites, focusing on turning your vision into reality.</p>
                        {/* <button className='border-slate-500 rounded-md border-2 w-40 h-10'>Download CV   </button> */}
                        <button class="cv-btn  w-52 mt-6 bg-green-400 flex items-center justify-center">
                            <span className='text-md mr-8  '>Download CV</span><span>
                            </span>
                            <ul className='text-2xl text-md border-slate-500 border-2 w-40 h-10 text-center rounded-md font-semibold'>
                                <li>
                                    <a href="">
                                        <FaCloudDownloadAlt />
                                    </a>
                                </li>
                            </ul>
                        </button>
                    </div>
                </section>
                {/* about - skills */}
                <section className='about flex justify-center items-center w-[100%] h-[100vh]'>
                    <div class="relative w-[85vw] h-[80vh] bg-slate-900 border-2 rounded-md border-gray-500 shadow-gray-400 shadow-xl">
                        <h1 class="text-5xl ml-48  border-gray-500   bg-slate-900 p-3 px-6  font-bold absolute top-1/2 left-0 mt-[-28%] ">
                            About <span class="text-teal-200">Me.</span>
                        </h1>
                        <div className=' my-10 px-10  '>
                            <div className=' py-3   '>
                                <h1 className='text-3xl font-thin  ' >I'm <span className='font-bold '>NEJMAOUI Imane</span> , Web Developer / Web Designer</h1>
                            </div>
                            <p className='font-thin text-lg    '>
                                Front-end web developer with a passion for transforming ideas into tangible, user-friendly web experiences. I love the challenge of taking a concept from scratch and building it into a beautiful and functional reality. My expertise lies in crafting the visual elements and interactive features that users see and interact with on websites and applications.</p>
                            <h1>Skills</h1>
                            {/* had l3ayba y9dar ykoun fiha prob */}
                            <div className=' flex flex-row  '>
                                <div className='left w-[60%] bg-red-300 flex flex-wrap'>
                                    <div className='w-[50%] h-[50%] bg-yellow-200'>html , css , javascript , php</div>
                                    <div className='w-[50%] h-[50%] bg-yellow-300'>bootstrap, sass, tailwind</div>
                                    <div className='w-[50%] h-[50%] bg-yellow-400'>react js , laravel </div>
                                    <div className='w-[50%] h-[50%] bg-yellow-500'>git , github</div>


                                </div>
                                <div className='right w-[40%]'>
                                    <h1 className='text-2xl '>What i do ?</h1>
                                    <div className='flex flex-row'>
                                        <div className='w-[30%] text-5xl'> <FaCloudDownloadAlt /></div>
                                        <div>
                                            <h1 className='text-2xl '>WEB DESISGN</h1>
                                            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className='flex flex-row'>
                                        <div className='w-[30%] text-5xl'> <FaCloudDownloadAlt /></div>
                                        <div>
                                            <h1 className='text-2xl '>Front-end Development</h1>
                                            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className='flex flex-row'>
                                        <div className='w-[30%] text-5xl'> <FaCloudDownloadAlt /></div>
                                        <div>
                                            <h1 className='text-2xl '>Back-end Development</h1>
                                            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* project */}
                <h1 className='myprojects px-40 text-5xl w-48  text-left  rounded-md  py3  font-bold'> <span className='text-teal-300 '> My </span>Projects</h1> 
                <section className='projects  px-52 w-[100%] h-fit bg-slate-900   '>
                    <div className='flex flex-wrap py-8 justify-center       gap-3'>
                        {/*  */}
                        <div className="mt-6 w-80   bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-3 ">
                                <img className='w-100 h-52 rounded-md' src={myphone} alt="phone" />
                                <h1 className='text-gray-800 text-2xl  '>E-Commerce store</h1>
                                <p className="text-gray-600">
                                    Because it's about motivating the doers. Because I'm here to follow my
                                    dreams and inspire others.
                                </p>
                            </div>
                            <div className="bg-gray-100 px-6 py-4">
                                <a href="#" className="inline-block text-blue-800">
                                    <button className="flex items-center gap-2 text-sm focus:outline-none">
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </a>
                                    <button className='text-blue-800 ml-36  text-lg  '> <FaGithub /></button>
                            </div>
                        </div>
                        {/*  */}
                        <div className="mt-6 w-80   bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-3 ">
                                <img className='w-100 h-52 rounded-md' src={myphone} alt="phone" />
                                <h1 className='text-gray-800 text-2xl  '>E-Commerce store</h1>
                                <p className="text-gray-600">
                                    Because it's about motivating the doers. Because I'm here to follow my
                                    dreams and inspire others.
                                </p>
                            </div>
                            <div className="bg-gray-100 px-6 py-4">
                                <a href="#" className="inline-block text-blue-800">
                                    <button className="flex items-center gap-2 text-sm focus:outline-none">
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </a>
                                    <button className='text-blue-800 ml-36  text-lg  '> <FaGithub /></button>
                            </div>
                        </div>
                        {/*  */}
                        <div className="mt-6 w-80   bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-3 ">
                                <img className='w-100 h-52 rounded-md' src={myphone} alt="phone" />
                                <h1 className='text-gray-800 text-2xl  '>E-Commerce store</h1>
                                <p className="text-gray-600">
                                    Because it's about motivating the doers. Because I'm here to follow my
                                    dreams and inspire others.
                                </p>
                            </div>
                            <div className="bg-gray-100 px-6 py-4">
                                <a href="#" className="inline-block text-blue-800">
                                    <button className="flex items-center gap-2 text-sm focus:outline-none">
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </a>
                                    <button className='text-blue-800 ml-36  text-lg  '> <FaGithub /></button>
                            </div>
                        </div>
                        {/*  */}
                        <div className="mt-6 w-80   bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-3 ">
                                <img className='w-100 h-52 rounded-md' src={myphone} alt="phone" />
                                <h1 className='text-gray-800 text-2xl  '>E-Commerce store</h1>
                                <p className="text-gray-600">
                                    Because it's about motivating the doers. Because I'm here to follow my
                                    dreams and inspire others.
                                </p>
                            </div>
                            <div className="bg-gray-100 px-6 py-4">
                                <a href="#" className="inline-block text-blue-800">
                                    <button className="flex items-center gap-2 text-sm focus:outline-none">
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </a>
                                    <button className='text-blue-800 ml-36  text-lg  '> <FaGithub /></button>
                            </div>
                        </div>
                        {/*  */}
                        <div className="mt-6 w-80   bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-3 ">
                                <img className='w-100 h-52 rounded-md' src={myphone} alt="phone" />
                                <h1 className='text-gray-800 text-2xl  '>E-Commerce store</h1>
                                <p className="text-gray-600">
                                    Because it's about motivating the doers. Because I'm here to follow my
                                    dreams and inspire others.
                                </p>
                            </div>
                            <div className="bg-gray-100 px-6 py-4">
                                <a href="#" className="inline-block text-blue-800">
                                    <button className="flex items-center gap-2 text-sm focus:outline-none">
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </a>
                                    <button className='text-blue-800 ml-36  text-lg  '> <FaGithub /></button>
                            </div>
                        </div>
                    </div>
                    <br />
                </section >
                {/* contact */}
                <section className='contact' >
                    <div className=' px-40 bg-slate-900 w-[100%] h-[100vh]'>
                        <h1 className='contactme text-6xl  text-left  rounded-md  py3  font-bold'>Contact <span className='text-teal-200 '>Me </span></h1> <br />
                        <div className='container flex flex-row'>
                            <div className='right flex flex-col  b w-[50%] h-[70vh]'>
                                <div className='text flex flex-col w-[100%] h-[28%] justify-around  '>
                                    <h1 className='font-bold text-2xl  '>Let's connect !</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eius reiciendis maxime culpa voluptatibus nemo eum doloremque ab doloribus nobis, modi dolorem sit corrupti consequuntur.</p>
                                </div>
                                <div className='icons h-[55%] w-[100%] flex flex-col justify-around   '>
                                    <div className='flex flex-row   '>
                                        <div className='flex justify-center items-center text-3xl  text-teal-300 rounded-full hover:text-white hover:border-2 hover:border-teal-500   hover:bg-teal-400     w-[4vw] h-[8vh]'><MdOutlineAttachEmail /></div>
                                        <h1 className='py-5 px-4 text-xl font-light  '>   nejmaoui.imane@gmail.com</h1>
                                    </div>
                                    <div className='flex flex-row   '>
                                        <div className='flex justify-center items-center text-3xl  text-teal-300 rounded-full hover:text-white hover:border-2 hover:border-teal-500   hover:bg-teal-400     w-[4vw] h-[8vh] '><FiPhoneCall />
                                        </div>
                                        <h1 className='py-5 px-4 text-xl font-light  '>   +212-661217642</h1>
                                    </div>
                                    <div className='flex flex-row   '>
                                        <div className='flex justify-center items-center text-3xl  text-teal-300 rounded-full hover:text-white hover:border-2 hover:border-teal-500   hover:bg-teal-400     w-[4vw] h-[8vh]'><GrLocation />

                                        </div>
                                        <h1 className='py-5 px-4 text-xl font-light   '>Csasablanca , MOROCCO</h1>
                                    </div>

                                </div>

                            </div>
                            <div className='left  w-[50%]'>
                                <form action="">

                                    <div className='flex flex-col h-[60vh] justify-around'>
                                        {/*  */}
                                        <div class="relative w-full min-w-[200px] h-[6vh]">
                                            <input
                                                class="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-slate-200  disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-slate-200  placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-slate-100"
                                                placeholder=" " /><label
                                                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-100 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-teal-200 peer-focus:text-slate-100 before:border-blue-gray-200 peer-focus:before:!border-slate-100 after:border-blue-slate-100 peer-focus:after:!border-slate-100">Your Name
                                            </label>
                                        </div>
                                        {/*  */}
                                        <div class="relative w-full min-w-[200px] h-[6vh]">
                                            <input
                                                class="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-slate-200  disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-slate-200  placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-slate-100"
                                                placeholder=" " /><label
                                                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-100 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-teal-200 peer-focus:text-slate-100 before:border-blue-gray-200 peer-focus:before:!border-slate-100 after:border-blue-slate-100 peer-focus:after:!border-slate-100">Your Email
                                            </label>
                                        </div>
                                        {/*  */}
                                        <div class="relative w-full min-w-[200px] h-[25vh]">
                                            <textarea
                                                class="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-slate-200  disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-slate-200  placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-slate-100"
                                                placeholder=" " /><label
                                                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-100 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-teal-200 peer-focus:text-slate-100 before:border-blue-gray-200 peer-focus:before:!border-slate-100 after:border-blue-slate-100 peer-focus:after:!border-slate-100">Your Message
                                            </label>
                                        </div>
                                        <button className='border-2 border-slate-400 rounded-full w-[13vw]  py-1 text-xl bg-teal-400 hover:border-slate-100   '>Send</button>



                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section >
            </body >
        </>
    );
}
