import { FC } from "react";
import { techSkills } from "@/app/constants";
import SkillImage from "./SkillImage";
import { Fade } from "react-awesome-reveal";

interface CategorySkillsProps {
  title: keyof typeof techSkills;
  ind: number;
}

const CategorySkills: FC<CategorySkillsProps> = ({ title, ind }) => {
  return (
    <ul className="flex flex-row md:gap-8 sm:gap-5 gap-3 md:gap-y-8 gap-y-12 md:w-fit ">
      <div className="flex flex-col items-center justify-center">
        <p
          className={`font-bold md:text-xl md:px-2 md:mx-2 p-0 m-0 text-sm ${
            ind % 2 ? "text-primary" : "text-secondary"
          }`}
        >
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </p>
      </div>
      {/* <AttentionSeeker
        cascade
        damping={0.5}
        duration={800}
        effect="tada"
        className="z-10 cursor-pointer"
      > */}
      <Fade cascade damping={0.5} duration={400} triggerOnce>
        {techSkills[title].map((skill, ind) => (
          <div className="" key={skill}>
            {/* <BallCanvas imgUrl={`/tech/${skill.toLowerCase()}.png`} /> */}
            <SkillImage imgUrl={`/tech/${skill.toLowerCase()}.png`} />
          </div>
        ))}
      </Fade>
      {/* </AttentionSeeker> */}
    </ul>
  );
};

export default CategorySkills;
