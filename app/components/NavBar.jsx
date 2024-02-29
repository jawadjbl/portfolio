"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      id="navbar"
      className={
        shadow
          ? "fixed w-full shadow-xl h-20 z-[100] bg-[#ecf0f3] md:px-6 lg:px-10"
          : "fixed w-full h-20 z-[100] md:px-6 bg-[#ecf0f3] lg:px-10"
      }
    >
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={"/i_love_you__1_-removebg-preview-removebg-preview.png"}
            alt="logo"
            width={100}
            height={50}
          />
        </Link>
        {/* NavBar */}
        <div>
          <ul className="hidden md:flex">
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href={"/#about"}>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href={"/#skills"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href={"/#projects"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href={"/#contact"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          {/* Menu and Close Icon */}
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
          {/* overlay and left navBar */}

          <div
            className={
              nav
                ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 "
                : ""
            }
          >
            <div
              className={
                nav
                  ? "md:hidden fixed w-[75%] sm:w-[60%] md:w-[45%] h-screen top-0 left-0 bg-[#ecf0f3] p-10 ease-in duration-500 overflow-y-scroll"
                  : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "
              }
            >
              <div>
                <div className="flex items-center justify-between">
                  <Image
                    src={
                      "/i_love_you__1_-removebg-preview-removebg-preview.png"
                    }
                    alt="logo"
                    width={50}
                    height={50}
                  />
                  <div
                    onClick={handleNav}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                  >
                    <AiOutlineClose />
                  </div>
                </div>

                <div className="border-b border-gray-300 my-4">
                  <p className="w-[85%] md:w-[90%] py-4">
                    Let's build something legendary together
                  </p>
                </div>
              </div>

              <div className="py-4 flex flex-col">
                <ul className="uppercase">
                  <Link href={"/#home"}>
                    <li
                      onClick={() => {
                        setNav(false);
                      }}
                      className="py-4 text-sm hover:border-b"
                    >
                      Home
                    </li>
                  </Link>
                  <Link href={"/#about"}>
                    <li
                      onClick={() => {
                        setNav(false);
                      }}
                      className="py-4 text-sm hover:border-b"
                    >
                      About
                    </li>
                  </Link>
                  <Link href={"/#skills"}>
                    <li
                      onClick={() => {
                        setNav(false);
                      }}
                      className="py-4 text-sm hover:border-b"
                    >
                      Skills
                    </li>
                  </Link>
                  <Link href={"/#projects"}>
                    <li
                      onClick={() => {
                        setNav(false);
                      }}
                      className="py-4 text-sm hover:border-b"
                    >
                      Projects
                    </li>
                  </Link>
                  <Link href={"/#contact"}>
                    <li
                      onClick={() => {
                        setNav(false);
                      }}
                      className="py-4 text-sm hover:border-b"
                    >
                      Contact
                    </li>
                  </Link>
                </ul>
                <div className="pt-40">
                  <p className="uppercase text-[#004aad] tracking-widest">
                    Let's Connect
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 ">
                      <FaLinkedinIn />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 ">
                      <FaGithub />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 ">
                      <AiOutlineMail />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 ">
                      <BsFillPersonLinesFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
