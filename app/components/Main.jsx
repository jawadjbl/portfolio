import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="main" className="container mx-auto w-full h-screen text-center">
      <div className="max-w-[1248px] p-2 mx-auto flex items-center justify-center w-full h-full">
        <div>
          <p className="pt-20 text-sm uppercase tracking-widest text-gray-600">
            Let's Build Something Together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi , i'm <span className="text-primary"> BLJ</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 mx-auto max-w-[75%]">
            i'm a front-end web developer specializing in building (and
            occasionally designing ) exceptional digital experiences . Currently
            , i'm focused on building responsive front-end web applications
            while learning back-end technologies.
          </p>
          <div className="flex items-center justify-between py-4 max-w-[330px] m-auto">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500 text-2xl">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500 text-2xl">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500 text-2xl">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500 text-2xl">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
