
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
                <section className="home w-full h-[90vh] p-8 px-52 flex flex-col justify-center items-center">
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
                        <h1 class="text-5xl ml-48  border-gray-500   bg-slate-900 p-3 px-6  font-bold absolute top-1/2 left-0 mt-[-30%] ">
                            About <span class="text-teal-200">Me.</span>
                        </h1>
                        <div className=' my-10 px-10  '>
                            <div className=' py-3   '>
                                <h1 className='text-3xl font-thin  ' >I'm <span className='font-bold '>NEJMAOUI Imane</span> , Web Developer / Web Designer</h1>
                            </div>
                            <p className='font-thin text-lg    '>
                                Front-end web developer with a passion for transforming ideas into tangible, user-friendly web experiences. I love the challenge of taking a concept from scratch and building it into a beautiful and functional reality. My expertise lies in crafting the visual elements and interactive features that users see and interact with on websites and applications.</p>
                            <div className=' flex flex-row  '>
                                <div className=' w-[60%] flex flex-wrap'>
                                    <div className='w-[100%] '>
                                        <h1>SKILLS</h1>
                                        {/* <div>
                                        <h1>{count}</h1>
                                        <h1>Prjojet Completed</h1>
                                    </div> */}

                                    </div>
                                    <div className='w-[100%] '>


                                    </div>
                                    <div className='w-[50%] bg-blue-300 flex text-4xl '>
                                        {/* <h1> <FaHtml5 /></h1>
                                        <h1> <FaCss3 /></h1>
                                        <h1> <IoLogoJavascript /></h1>
                                        <h1> <FaBootstrap /></h1> */}
                                    </div>
                                    {/* <div className='w-[50%] bg-blue-400'>hy</div>
                                    <div className='w-[50%] bg-blue-500'>hy</div> */}
                                </div>
                                <div className='bg-yellow-400 w-[40%]'>
                                    <h1>What i do ?</h1>
                                    <div className='flex flex-row'>
                                        <FaCloudDownloadAlt />
                                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* project */}
                <section>
                    <div>
                        <h1>this part to show project</h1>
                    </div>



                    

                </section>
                {/* contact */}
                <section>
                    {/* <form action="">
                        <input type="text" placeholder='Your Name' />
                        <input type="text" placeholder='Your Emain' />
                        <textarea placeholder='Your Message' name="" id="" cols="30" rows="10"></textarea>
                    </form> */}

                </section>
            </body>
        </>
    );
}
