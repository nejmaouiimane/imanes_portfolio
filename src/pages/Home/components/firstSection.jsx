
import { useContext } from 'react';
import { useAnimate, stagger, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useState, useRef } from 'react';
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
import { FiFigma } from "react-icons/fi";
import backend from '../../../assets/svg/backend.svg';
import frontend from '../../../assets/svg/frontend.svg';
import design from '../../../assets/svg/design.svg';
import { PiFileHtmlDuotone } from "react-icons/pi";
import { SiCsswizardry } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiSolidFileCss } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import myphone from '../../../assets/img/myphone.jpg';
import { SiPhp } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


import resume from "../../../assets/files/imaneCV.pdf";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export const FirstSection = () => {
    const form = useRef();
    const text = "I love designing, developing, and animating websites, focusing on turning your vision into reality.".split(" ");
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_z5pms0s', 'template_uzilsme', form.current, {
                publicKey: 'fIi7Q6m9l8yZSnndz',
            })
            .then(
                () => {

                    toast.success('Successfully send!');
                },
                (error) => {
                    Toaster.error(error);
                },
            );
    };
    const GRID_WIDTH = 25;
    const GRID_HEIGHT = 24;

    const [test, setTest] = useContext(MyContext);
    

    return (

        <>

            <Header />

            <body className=' text-white relative  '>
                {/* herosection */}
                {/*  */}
                <div className="myicons fixed bg-slate-900  flex lg:right-1 flex-row-reverse px-7 py-3    text-2xl gap-x-4 text-gray-300">

                    <a href="https://nejmaoui.imane@gmail.com" className='hover:text-teal-200'>
                        <span><MdEmail /> </span>
                    </a>
                    <a href="https://www.linkedin.com/in/imane-nejmaoui-995265216/" className='hover:text-teal-200'>
                        <span><FaLinkedin /></span>
                    </a>
                    <a href="https://www.instagram.com/nej_imane/" className='hover:text-teal-200'>
                        <span><FaInstagram /></span>
                    </a>
                    <a href="https://github.com/nejmaouiimane" className='hover:text-teal-200'>
                        <span><FaGithub /></span>
                    </a>

                </div>
                {/*  */}
                <section id='home' className="home w-full h-[90vh]   p-8 lg:px-52 flex flex-col justify-center items-center">
                    <motion.div className=' lg:w-[60vw] w-[90vw] lg:h-[42vh] h-fit flex flex-col justify-between '
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 10 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <h1 className='text-md text-teal-200  ' >Hello, and Welcome </h1>
                        <h1 className='lg:text-4xl text-2xl font-bold '>I'm IMANE NEJMAOUI <span className='text-teal-200'>.</span></h1>
                        <h1 className='lg:text-5xl text-3xl font-bold '>I build things for the <span className='text-teal-200'>web,</span></h1>
                        <p className='text-md lg:w-[41vw] '> I'm a full-stack developer from morocco, specializing in the <span className='text-teal-200'>front-end.</span>
                            <div className="App lg:w-[30vw]">
                                {text.map((el, i) => (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 2,
                                            delay: i / 10,
                                        }}
                                        key={i}
                                    >
                                        {el}{" "}
                                    </motion.span>
                                ))}
                            </div>
                        </p>

                        <a download="" target="_blank" href={resume}>
                            <div class="cv-btn border-2  border-white lg:mt-1 mt-3   p-6 px-4 flex justify-center items-center cursor-pointer" data-tooltip="Size: 20Mb">
                                <div class="button-wrapper   ">
                                    <div class="text   ">Download My CV  </div>
                                    <span class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </a>

                    </motion.div>
                </section>
                {/* about - skills */}
                <section id='about' className='about flex justify-center items-center w-[100%] lg:h-[100vh] h-fit '>
                    <motion.div class="relative  lg:w-[80vw] w-[90vw] lg:h-[80vh] h-fit bg-slate-900 border-2 rounded-md border-gray-500 shadow-gray-400 shadow-xl"
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 10 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}>
                        <h1 class="lg:text-6xl  text-3xl ml-24 px-5   border-gray-500  rounded-full     bg-slate-900 lg:p-3 lg:px-6  font-bold absolute lg:top-1/2 lg:left-0  lg:mt-[-33%] mt-[-7%]     ">
                            About <span class="text-teal-200">Me.</span>
                        </h1>
                        <div className=' my-10 px-10  '>
                            <div className=' py-3   '>
                                <h1 className='text-3xl font-thin  ' >I'm <span className='font-bold '>NEJMAOUI Imane</span> , Web Developer / Web Designer</h1>
                            </div>
                            <p className='font-thin lg:text-lg text-md     '>
                                Front-end web developer with a passion for transforming ideas into tangible, user-friendly web experiences. I love the challenge of taking a concept from scratch and building it into a beautiful and functional reality. My expertise lies in crafting the visual elements and interactive features that users see and interact with on websites and applications.</p>

                            {/* had l3ayba y9dar ykoun fiha prob */}
                            <div className=' flex lg:flex-row flex-col py-8   '>
                                <div className='right  flex flex-col gap-5  lg:w-[50%]'>
                                    <p className='text-4xl italic font-extralight     '>What i do ?</p>
                                    <div className='flex flex-row'>
                                        <div className='lg:w-[30%] text-5xl'>
                                            <img className='lg:w-24 w-20 lg:pr-0 pr-4    ' src={design} alt="" srcset="" />
                                        </div>
                                        <div>
                                            <h1 className='text-2xl '>WEB DESISGN</h1>
                                            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                        </div>
                                    </div>

                                    <div className='flex flex-row'>
                                        <div className='lg:w-[30%] text-5xl'>
                                            <img className='lg:w-24 w-20 lg:pr-0 pr-4  ' src={backend} alt="" srcset="" />
                                        </div>
                                        <div>
                                            <h1 className='text-2xl '>Web Development</h1>
                                            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='left lg:w-[50%] flex flex-wrap lg:border-l-2 lg:px-6  '>
                                    <p className='text-4xl italic lg:p-0 py-5  font-extralight   '>Skills & Tools :</p>
                                    <div className='w-[75%] h-[50%] flex flex-wrap  lg:text-5xl text-4xl  gap-4 '>
                                        <div className='hover:text-teal-200'>
                                            < PiFileHtmlDuotone />
                                        </div>
                                        <div className='hover:text-teal-200'>
                                            <BiSolidFileCss />
                                        </div>
                                        <div className='hover:text-teal-200'>
                                            <IoLogoJavascript />
                                        </div>
                                        <div className='hover:text-teal-200'>
                                            <FaBootstrap />
                                        </div>
                                        <div className='hover:text-teal-200'>
                                            <RiReactjsFill />
                                        </div>
                                        <div className='hover:text-teal-200'>
                                            <RiTailwindCssFill />
                                        </div>
                                        <div className='hover:text-teal-200'>
                                            <FiFigma />
                                        </div>
                                        <div className='hover:text-teal-200'>
                                            <FaLaravel />
                                        </div>
                                        <div className='hover:text-teal-200'>
                                            <SiPhp />
                                        </div>
                                        <div className='hover:text-teal-200'>
                                            <BsDatabaseFillCheck />
                                        </div>
                                        <div className='hover:text-teal-200'>
                                            <FaGithub />
                                        </div>












                                    </div>



                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
                {/* project */}
                <section id='projects' className='projects  lg:px-52  lg:py-0  w-[100vw]   lg:w-[100%] h-fit   '>
                    <h1 className='contactme lg:text-6xl text-4xl  text-left  rounded-md mt-5 lg:border-0 lg:no-underline  underline  font-bold'> <span className='text-teal-200 '>My </span>Projects </h1> <br />
                    <div className='flex flex-wrap py-2 justify-center   gap-3'>
                        {/*  */}
                        <motion.div className="mt-6 w-80   bg-white rounded-lg shadow-md overflow-hidden"
                            variants={{
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 10 },
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.25 }}>
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
                                        view website
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </a>
                                <button className='text-blue-800 ml-36  text-lg  '> <FaGithub /></button>
                            </div>
                        </motion.div>
                        {/*  */}
                        <motion.div className="mt-6 w-80   bg-white rounded-lg shadow-md overflow-hidden"
                            variants={{
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 10 },
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.25 }}>
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
                                        view website
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </a>
                                <button className='text-blue-800 ml-36  text-lg  '> <FaGithub /></button>
                            </div>
                        </motion.div>
                        {/*  */}
                        <motion.div className="mt-6 w-80   bg-white rounded-lg shadow-md overflow-hidden"
                            variants={{
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 10 },
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.25 }}>
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
                                        view website
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </a>
                                <button className='text-blue-800 ml-36  text-lg  '> <FaGithub /></button>
                            </div>
                        </motion.div>
                        {/*  */}
                        <motion.div className="mt-6 w-80   bg-white rounded-lg shadow-md overflow-hidden"
                            variants={{
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 10 },
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.25 }}>
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
                                        view website
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </a>
                                <button className='text-blue-800 ml-36  text-lg  '> <FaGithub /></button>
                            </div>
                        </motion.div>
                        {/*  */}
                        <motion.div className="mt-6 w-80   bg-white rounded-lg shadow-md overflow-hidden"
                            variants={{
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 10 },
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.25 }}>
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
                                        view website
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </a>
                                <button className='text-blue-800 ml-36  text-lg  '> <FaGithub /></button>
                            </div>
                        </motion.div>
                    </div>
                    <br />
                </section >
                {/* contact */}
                <section id='contact' className='contact  flex justify-center lg:items-center  w-[100vw] h-[100vh] ' >


                    <motion.div className=' lg:px-40 px-4 w-[90%] h-[100vh]'
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 10 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}>
                        <h1 className='contactme lg:block hidden lg:text-6xl text-4xl mt-5  text-left  rounded-md    lg:no-underline  underline font-bold'>Contact <span className='text-teal-200 '>Me </span></h1> <br />
                        <div className='container flex  py-10   lg:flex-row flex-col'>
                            <div className='right flex flex-col lg:w-[50%] gap-2  lg:h-[80vh]'>
                                <div className='text flex flex-col w-[100%] h-[28%] justify-around lg:ml-0 ml-4    '>
                                    <h1 className='font-bold lg:text-3xl text-4xl lg:p-0 py-4   '>Let's <span className='lg:text-white text-teal-200 '>connect !</span> </h1>
                                    <p className='lg:w-[80%] w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eius reiciendis maxime culpa voluptatibus nemo eum doloremque ab doloribus nobis, modi dolorem sit corrupti consequuntur.</p>
                                </div>
                                <div className='icons hidden lg:block lg:h-[55%] h-[60%] w-[100%] py-5  flex-col justify-around   '>
                                    <div className='flex flex-row    '>
                                        <div className='flex justify-center items-center text-5xl hover:text-4xl  text-teal-300 rounded-full hover:text-white hover:border-2 hover:border-teal-500   hover:bg-teal-400    lg:w-[4.5vw] w-[17vw] lg:h-[8vh]'><MdOutlineAttachEmail /></div>
                                        <h1 className='py-5 px-4 text-xl font-light  '>   nejmaoui.imane@gmail.com</h1>
                                    </div>
                                    <div className='flex flex-row   '>
                                        <div className='flex justify-center items-center text-5xl hover:text-4xl  text-teal-300 rounded-full hover:text-white hover:border-2 hover:border-teal-500   hover:bg-teal-400     lg:w-[4.5vw] w-[17vw] lg:h-[8vh] '><FiPhoneCall />
                                        </div>
                                        <h1 className='py-5 px-4 text-xl font-light  '>   +212-661217642</h1>
                                    </div>
                                    <div className='flex flex-row   '>
                                        <div className='flex justify-center items-center text-5xl hover:text-4xl  text-teal-300 rounded-full hover:text-white hover:border-2 hover:border-teal-500   hover:bg-teal-400  lg:w-[4.5vw] w-[17vw] lg:h-[8vh]'><GrLocation />
                                        </div>
                                        <h1 className='py-5 px-4 text-xl font-light   '>Casablanca , MOROCCO</h1>
                                    </div>

                                </div>

                            </div>
                            <div className='left  lg:w-[50%] w-[90%] '>
                                <Toaster position="top-right"
                                     />



                                <form ref={form} onSubmit={sendEmail} action="">
                                    <div className='flex flex-col h-[60vh] lg:ml-0 ml-5  justify-around'>
                                        {/*  */}
                                        <div class="relative w-full min-w-[200px] h-[6vh]">
                                            <input
                                                name='name'
                                                class="peer w-full h-full bg-slate-900  text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-slate-900  disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-slate-200  placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-slate-100"
                                                placeholder=" " /><label
                                                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-100 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-teal-200 peer-focus:text-slate-100 before:border-blue-gray-200 peer-focus:before:!border-slate-100 after:border-blue-slate-100 peer-focus:after:!border-slate-100">Your Name
                                            </label>
                                        </div>
                                        {/*  */}
                                        <div class="relative w-full min-w-[200px] h-[6vh]">
                                            <input
                                                name='email'
                                                class="peer w-full h-full bg-slate-900  text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-slate-900  disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-slate-200  placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-slate-100"
                                                placeholder=" " /><label
                                                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-100 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-teal-200 peer-focus:text-slate-100 before:border-blue-gray-200 peer-focus:before:!border-slate-100 after:border-blue-slate-100 peer-focus:after:!border-slate-100">Your Email
                                            </label>
                                        </div>
                                        {/*  */}
                                        <div class="relative w-full min-w-[200px] h-[25vh]">
                                            <textarea
                                                name='message'
                                                class="peer w-full h-full bg-slate-900  text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-slate-900  disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-slate-200  placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-slate-100"
                                                placeholder=" " /><label
                                                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-100 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-teal-200 peer-focus:text-slate-100 before:border-blue-gray-200 peer-focus:before:!border-slate-100 after:border-blue-slate-100 peer-focus:after:!border-slate-100">Your Message
                                            </label>
                                        </div>
                                        <button  className='border-2 border-slate-400 rounded-full lg:w-[13vw]  py-1 text-xl bg-teal-400 hover:border-slate-100   '>Send</button>



                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </section >
            </body >
        </>
    );
}
