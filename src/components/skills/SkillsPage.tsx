"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import StarsCanvas from "@/components/three/Stars";
import { techSkills } from "@/app/constants";
import CategorySkills from "./CategorySkills";
import { Fade } from "react-awesome-reveal";

const SkillsPage = ({}) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("THEME CONTEXT NOT FOUND");
  const { theme } = context;

  return (
    <div className="w-screen md:h-screen h-fit md:p-0 p-3 relative" data-theme={theme}>
      <div
        data-theme={theme}
        className={`flex flex-col items-center w-full h-full bg-cover bg-center`}
      >
        <StarsCanvas />
        <Fade triggerOnce duration={700} className="z-10 cursor-pointer">
          <h1 className="lg:text-5xl md:3xl text-2xl z-10 cursor-pointer md:hover:scale-105 hover:drop-shadow-lg hover:shadow-base-200 font-bold md:p-4 p-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent transition duration-150">
            Skills
          </h1>
        </Fade>

        <div className="flex flex-col w-fit md:gap-6 gap-12 mt-5 justify-center items-start">
          {/* <Fade cascade damping={1} fraction={0.1} duration={400}> */}
          {Object.keys(techSkills).map((category, ind) => (
            <CategorySkills
              title={category as keyof typeof techSkills}
              key={category}
              ind={ind}
            />
          ))}
          {/* </Fade> */}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
