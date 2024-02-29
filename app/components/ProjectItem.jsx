import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ img, title, url }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-primary to-secondary">
      <Image className="rounded-xl group-hover:opacity-10 " src={img} alt="/" />
      <div className=" hidden group-hover:block absolute top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl w-max text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="text-xl pb-4 pt-2 text-white tracking-wider text-center">
          React Js
        </p>
        <Link href={url}>
          <p className="text-center bg-white text-gray-700 rounded-lg py-3 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
