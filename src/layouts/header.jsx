import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './header.sass';

const Sidebar = ({ navItems, handleNav, nav }) => {
    return (
        <nav
            className={`${nav ? 'left-0' : '-left-full'
                } h-full lg:hidden fixed top-0 bg-yellow-300 w-full transition-all z-50 ease-in-out duration-500`}
        >
            <div className="p-4 flex justify-between items-center">
                <h1 className='text-3xl font-bold text-[#00df9a]'>REACT.</h1>
                {/* Close button */}
                <AiOutlineClose size={25} color='white' onClick={handleNav} className="cursor-pointer" />
            </div>
            <ul className='flex flex-col gap-8 p-4'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer text-white border-gray-600'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const Header = () => {
    const [nav, setNav] = useState(false);

    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'About' },
        { id: 3, text: 'Projects' },
        { id: 4, text: 'Contact' },
    ];

    // Toggle the sidebar
    const handleNav = () => {
        setNav(!nav);
        console.log("Menu toggled. Current state: ", nav);
    };

    return (
        <section>
            {/* Desktop Navbar */}
            <nav className='navbar bg-slate-900 h-full w-18 fixed z-50 flex flex-col gap-8'>
                <div className="flex items-center justify-center p-4">
                    <svg width="60" height="60" viewBox="0 0 150 229" color='white' className="looka-1j8o68f">
                        <path d="M125 218.5L125 218.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="flex flex-col items-center justify-center gap-10 h-[60%]">
                    <ul className='gap-16  h-[80vh] flex flex-col'>
                        {navItems.map(item => (
                            <li
                                key={item.id}
                                className={`text-gray-300 rotate-90 text-[20px] flex justify-center items-center hover:text-teal-200 h-[63px]`}
                            >
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Menu Button */}
            <div onClick={handleNav} className='block md:hidden absolute right-4 top-4 cursor-pointer'>
                {nav ? <AiOutlineClose size={25} color='white' /> : <AiOutlineMenu size={25} color='white' />}
            </div>

            {/* Mobile Sidebar */}
            <Sidebar navItems={navItems} handleNav={handleNav} nav={nav} />
        </section>
    );
};

export default Header;
