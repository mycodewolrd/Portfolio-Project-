import React, { useEffect } from 'react'
const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => { })
    return (
      <div
        className={`fixed top-0 right-0 h-screen  z-20 flex flex-col justify-center items-start gap-y-6 text-white bg-[#1f0016] transition-all duration-300 
                ${
                  menuOpen
                    ? "w-2/3 opacity-100 pointer-events-auto"
                    : "w-0 opacity-0 pointer-events-none"
                }
                `}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-2xl text-white focus:outline-none cursor-pointer"
          aria-label="Close Menu"
        >
          <i class="ri-close-large-line"></i>
        </button>

        <ul
          onClick={() => setMenuOpen(false)}
          className={`absolute left-1/2 -translate-x-1/2  text-xl justify-center items-start transform transition-transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0translate-y-5"
                    }
                `}
        >
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About Me </a>
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
      </div>
    );
}

export default MobileMenu
