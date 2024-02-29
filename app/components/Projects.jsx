import React from "react";
import project1 from "../../public/projects/pro1.jpg";
import project2 from "../../public/projects/pro2.jpg";
import project3 from "../../public/projects/pro3.jpg";
import project4 from "../../public/projects/pro5.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full container mx-auto">
      <div className="max-w-[1248px] mx-auto p-2 py-16">
        <p className="text-xl tracking-widest text-primary uppercase">
          Projects
        </p>
        <h2 className="py-4 tracking-normal">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            img={project1}
            title="property Finder1"
            url="/property1"
          />
          <ProjectItem
            img={project2}
            title="property Finder2"
            url="/property2"
          />
          <ProjectItem
            img={project3}
            title="property Finder3"
            url="/property3"
          />
          <ProjectItem
            img={project4}
            title="property Finder4"
            url="/property4"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
