import { FC } from "react";
import { experience } from "@/app/constants";
import ExperienceCard from "./ExperienceCard";
import { Fade } from "react-awesome-reveal";
interface ExperienceRightDivProps {}

const ExperienceRightDiv: FC<ExperienceRightDivProps> = ({}) => {
  return (
    <div className="w-full h-full">
      <Fade triggerOnce duration={700} className="z-10 cursor-pointer">
      <h1 className="md:hover:scale-105 hover:drop-shadow-lg hover:shadow-base-200 md:text-center lg:text-5xl md:3xl text-2xl cursor-pointer font-bold bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text p-2">
        Work Experience
      </h1>
      </Fade>
      <div className="w-full flex flex-col justify-center items-center">
        {experience.map((x, ind) => {
          return <ExperienceCard key={ind} {...x} />;
        })}
      </div>
    </div>
  );
};

export default ExperienceRightDiv;
