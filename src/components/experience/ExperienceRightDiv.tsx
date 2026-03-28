"use client";
import { FC } from "react";
import { Fade } from "react-awesome-reveal";
import Carousel from "./Carousel";

interface ExperienceRightDivProps {
  expNum: number;
  setExpNum: React.Dispatch<React.SetStateAction<number>>;
}

const ExperienceRightDiv: FC<ExperienceRightDivProps> = ({ expNum, setExpNum }) => {
  return (
    <div className="w-full h-full">
      <Fade triggerOnce duration={700} className="z-10">
        <h2 className="lg:text-5xl md:text-3xl text-2xl text-center font-bold bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text p-4">
          Work Experience
        </h2>
      </Fade>
      <div className="w-full flex flex-col justify-center items-center">
        <Carousel expNum={expNum} setExpNum={setExpNum} />
      </div>
    </div>
  );
};

export default ExperienceRightDiv;
