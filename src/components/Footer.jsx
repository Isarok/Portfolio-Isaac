import React from 'react';
import { Link } from "react-scroll";


const Footer = () => {
  return (
    <section className="relative bg-gray-800 text-white py-4 text-center border-t-2 border-[#12eff7] shadow-white shadow-2xl ">
      <footer className="flex flex-col mx-9 lg:flex-row lg:justify-between lg:px-12">
        <ul className='lg:flex lg:flex-col lg:items-start'>
          <li className="lg:text-5xl text-3xl font-semibold bg-gradient-to-r from-[rgba(2,165,184,1)] from-[10%] via-[rgba(0,228,255,1)] via-[30%] to-[rgba(152,251,255,1)] to-[90%] text-transparent bg-clip-text">
            Isaac Garcia
          </li>
        
        <li className=" lg:px-1 text-xl font-semibold lg:text-2xl">
          FullStack Developer
        </li>
        </ul>
        <ul className="flex flex-wrap justify-around items-center my-8 gap-12 text-xl py-2 lg:gap-6 lg:grid-cols-3 lg:text-lg ">
          <li>
            <Link
              className='cursor-pointer'
              activeClass="active"
              smooth={true}
              spy={true}
              to="home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='cursor-pointer'
              activeClass="active"
              smooth={true}
              spy={true}
              to="aboutMe"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              className='cursor-pointer'
              activeClass="active"
              smooth={true}
              spy={true}
              to="Contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <a href="https://github.com/Isarok" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/isaac-garc%C3%ADa-romero-b73202a6/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
        
      </footer>
        <div className="text-lg my-[20px] flex flex-1 justify-center items-center"
               style={{
                maxWidth: "100%",
                height: "auto",
                filter:
                "drop-shadow(3px 3.42184px 1.23px rgba(89, 219, 297, 1))",
              }}>
              © 2024 🚀 Together we further.
        </div>
    </section>
  );
}

export default Footer;
