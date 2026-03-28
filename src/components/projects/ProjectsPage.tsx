"use client";
import { FC } from "react";
import { projects } from "@/app/constants";
import { useTheme } from "@/context/ThemeContext";
import ProjectCard from "./ProjectCard";
import { Fade } from "react-awesome-reveal";

const Projects: FC = () => {
  const { theme } = useTheme();
  return (
    <div
      className="w-full min-h-screen py-20 px-4 md:px-12 flex flex-col items-center !bg-transparent"
      data-theme={theme}
      id="projects"
    >
      <div
        className="flex flex-col items-center w-full bg-cover bg-center py-4"
      >
        <Fade triggerOnce duration={700} className="z-10">
          <h2 className="lg:text-5xl md:text-3xl text-2xl z-10 font-bold p-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Projects
          </h2>
        </Fade>
        <div className="w-full grid md:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-6 px-4 md:px-8">
          <Fade cascade damping={0.6} duration={400} triggerOnce>
            {projects.map((project) => (
              <div className="flex justify-center" key={project.title}>
                <ProjectCard {...project} />
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Projects;
