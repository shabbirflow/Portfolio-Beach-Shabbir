import { FC } from "react";
import { projects } from "@/app/constants";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import StarsCanvas from "../three/Stars";
import Projectcard from "./projectcard";
import { Fade, Slide, Roll } from "react-awesome-reveal";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("THEME CONTEXT NOT FOUND");
  const { theme } = context;
  return (
    <div className="w-screen md:h-screen relative h-fit">
      {/* <StarsCanvas /> */}
      <div
        data-theme={theme}
        className="flex flex-col items-center w-full md:h-full bg-cover bg-center h-fit"
      >
        <Fade triggerOnce duration={700} className="z-10 cursor-pointer">
          <h1 className="lg:text-5xl md:3xl text-2xl z-10 cursor-pointer md:hover:scale-105 hover:drop-shadow-lg hover:shadow-base-200 font-bold md:p-4 p-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent transition duration-150">
            Projects
          </h1>
        </Fade>
        <div className="w-full grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 gap-2 gap-y-6">
          <Fade cascade damping={0.8} duration={400} triggerOnce>
            {projects.map((project, ind) => (
              <div className="m-2 flex justify-center" key={ind}>
                <Projectcard {...project} />
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Projects;
