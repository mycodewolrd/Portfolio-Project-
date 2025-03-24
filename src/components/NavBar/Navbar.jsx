import React, { useEffect } from "react";
import logo from "../../assets/logo.svg";
const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return (
        <>
            <nav className="w-full fixed top-0 z-10 bg-[#161513]">
                <div className="my-5 mx-[10%] flex justify-between md:justify-around items-center h-16">
                    <a href="">
                        <img src={logo} alt="logo" />
                    </a>

                    <div
                        className="w-7 h-5 relative cursor-pointer md:hidden z-10 text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <i class="ri-menu-3-line"></i>
                    </div>

                    <ul className="hidden md:flex items-center gap-8 list-none text-sm">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About Me</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>

                    <div className="connect-btn hidden md:block">Connect With Me</div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;