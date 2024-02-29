import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="container mx-auto w-full md:h-screen p-2 flex items-center pt-20"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <p className="uppercase text-xl tracking-widest text-primary">
            About
          </p>
          <h2 className="py-4">Who Iam</h2>
          <p className="py-2 text-gray-600">iam not your normal developer</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            reprehenderit ducimus fuga officia eum, unde iste officiis vero nemo
            optio eaque ex laudantium! Facere, quidem. Itaque ratione doloribus
            at et.
          </p>
          <p className="py-2 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            inventore ipsum ullam labore deserunt, nobis autem magnam laudantium
            hic odio distinctio, ea accusantium qui incidunt! Eos aperiam magni
            natus eius!
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div className="max-w-[500px] w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl overflow-hidden flex items-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="/Assets/AI-laptop.webp"
            alt="about-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
