"use client";
import { useTheme } from "@/context/ThemeContext";
import { techSkills } from "@/app/constants";
import CategorySkills from "./CategorySkills";
import { Fade } from "react-awesome-reveal";

const SkillsPage = () => {
  const { theme } = useTheme();

  return (
    <div
      className="w-full min-h-screen py-20 px-6 md:px-16 flex flex-col items-center !bg-transparent"
      data-theme={theme}
      id="skills"
    >
      <div className="flex flex-col items-center w-full h-full bg-cover bg-center md:justify-normal justify-center py-4">
        <Fade triggerOnce duration={700} className="z-10">
          <h2 className="lg:text-5xl md:text-3xl text-2xl z-10 font-bold p-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Skills
          </h2>
        </Fade>

        <div className="flex flex-col w-fit md:gap-6 gap-12 mt-5 justify-center items-start">
          {Object.keys(techSkills).map((category, ind) => (
            <CategorySkills
              title={category as keyof typeof techSkills}
              key={category}
              ind={ind}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
