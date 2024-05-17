import React, { useState, useEffect } from 'react';
import './header.sass';


const Header = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('header nav a');

            sections.forEach(sec => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    setActiveSection(id); // Update activeSection state
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                    });
                    const targetNavLink = document.querySelector(`header nav a[href*=${id}]`);
                    if (targetNavLink) {
                        targetNavLink.classList.add('active');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
<nav className='bg-slate-900 h-full w-18 fixed z-50 flex flex-col gap-8'>
            ÷            <div className="flex items-center justify-center p-4">
                <svg width="60" height="60" viewBox="0 0 150 229" className="looka-1j8o68f">
                    {/* SVG Content */}
                </svg>
            </div>
            <div className="flex flex-col items-center justify-center gap-10 h-[60%]">
                <div className={`text-gray-300 rotate-90 text-[18px] flex justify-center items-center hover:text-teal-200 h-[63px] ${activeSection === 'projects' ? 'text-white line' : ''}`}>
                    <a href="#home">
                        <h1>Home</h1>
                    </a>
                </div>
                <div className={`text-gray-300 rotate-90 text-[18px] flex justify-center items-center hover:text-teal-200 h-[63px] ${activeSection === 'about' ? 'text-white line' : ''}`}>
                    <a href="#about">
                        <h1>About</h1>
                    </a>
                </div>
                <div className={`text-gray-300 rotate-90 text-[18px] flex justify-center items-center hover:text-teal-200 h-[63px] ${activeSection === 'projects' ? 'text-white line' : ''}`}>
                    <a href="#projects">
                        <h1>Projects</h1>
                    </a>
                </div>

                <div className={`text-gray-300 rotate-90 text-[18px] flex justify-center items-center hover:text-teal-200 h-[63px] ${activeSection === 'contact' ? 'text-white line' : ''}`}>
                    <a href="#contact">
                        <h1>Contact</h1>
                    </a>
                </div>
            </div>
        </nav>        // <nav className='bg-slate-600 h-[100vh] fixed    w-[10vw] flex flex-col '>
        //     <div className='h-[20vh] bg-red-200'>
        //         <img src="" alt="" />
        //     </div>
        //     <div>
        //     <a href="">Home</a>
        //     </div>
        //     <div>
        //     <a href="">About</a>
        //     </div>
        //     <div>
        //     <a href="">Project</a>
        //     </div>
        //     <div>
        //     <a href="">Contact </a>
        //     </div>
        // </nav>
    );
};

export default Header;
