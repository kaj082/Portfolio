"use client";
import React, { useState } from "react";
import Logo from "../Logo";
import MagneticButton from "../MagneticButton";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header
      data-scroll
      data-scroll-sticky
      data-scroll-target="#sticky-wrapper"
      className="fixed top-0 z-[100] w-full bg-transparent py-4 backdrop-blur-md"
    >
      <nav className="container flex justify-between">
        <Logo width={50} height={50} />
        <div className="flex items-center gap-4">
          <div className="navbar-toggler w-16 h-16">
            <div
              className={`menu cross hidden sm:block menu--1${
                toggle ? " open" : ""
              }`}
              onClick={() => setToggle(!toggle)}
            >
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
                <path class="line--2" d="M0 50h70" />
                <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
              </svg>
            </div>
          </div>
          <ul
            className={`flex items-center gap-4 sm:flex-col sm:absolute sm:top-full sm:left-0 sm:bg-black sm:w-full sm:items-start sm:p-4 transition-all duration-500${
              toggle
                ? " sm:[clip-path:inset(0%_0%_0%_0%)]"
                : " sm:[clip-path:inset(0%_0%_100%_0%)]"
            }`}
          >
            <li>
              <a
                href="#home"
                data-scroll-to
                className="transition-all duration-500 hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#advantage"
                data-scroll-to
                className="transition-all duration-500 hover:text-white"
              >
                Advantages
              </a>
            </li>
            <li>
              <a
                href="#experiance"
                data-scroll-to
                className="transition-all duration-500 hover:text-white"
              >
                Experiance
              </a>
            </li>
            <li>
              <a
                href="#work"
                data-scroll-to
                className="transition-all duration-500 hover:text-white"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                data-scroll-to
                className="transition-all duration-500 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
          <MagneticButton buttonClass="bg-gradient-to-r from-purple-700 to-blue-900 py-2 px-[35px] rounded-[35px] sm:py-2 sm:px-10">
            <a
              href="/assets/Kajal_Dafada_Resume.pdf"
              download
              className="font-jakarta text-sm"
            >
              Download CV
            </a>
          </MagneticButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
