import { FC, useState } from "react";
import StarsCanvas from "../three/Stars";
import ExperienceRightDiv from "./ExperienceRightDiv";
import ExperienceTimeline from "./ExperienceTimeline";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

interface ExperiencePageProps {}

const ExperiencePage: FC<ExperiencePageProps> = ({}) => {
  const [expNum, setExpNum] = useState<number>(0);  

  const context = useContext(ThemeContext);
  if (!context) throw new Error("THEME CONTEXT NOT FOUND");
  const { theme } = context;
  return (
    <div className="md:w-screen md:h-screen w-full h-fit p-1 md:p-3 relative" data-theme={theme} >

      <div
        data-theme={theme}
        className="h-full w-full grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 grid-cols-1 gap-1 p-1"
      >
        <div className="w-full h-full">
          <ExperienceRightDiv expNum = {expNum} setExpNum = {setExpNum} />
        </div>
        <div className="p-1 w-full h-[87%] flex md:justify-items-start justify-center items-center">
          <ExperienceTimeline expNum = {expNum} setExpNum = {setExpNum} />
        </div>
      </div>
      {/* <StarsCanvas /> */}
    </div>
  );
};

export default ExperiencePage;
