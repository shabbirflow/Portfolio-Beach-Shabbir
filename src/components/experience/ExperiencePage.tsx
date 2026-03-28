"use client";
import { FC, useState } from "react";
import ExperienceRightDiv from "./ExperienceRightDiv";
import ExperienceTimeline from "./ExperienceTimeline";
import { useTheme } from "@/context/ThemeContext";

const ExperiencePage: FC = () => {
  const [expNum, setExpNum] = useState<number>(0);
  const { theme } = useTheme();

  return (
    <div
      className="w-full min-h-screen relative flex flex-col md:flex-row !bg-transparent"
      data-theme={theme}
      id="experience"
    >
      <div className="h-full w-full grid md:grid-cols-2 md:grid-rows-1 grid-rows-[auto_1fr] grid-cols-1 gap-4 p-1">
        <div className="w-full">
          <ExperienceRightDiv expNum={expNum} setExpNum={setExpNum} />
        </div>
        <div className="w-full flex md:justify-start justify-center items-start md:items-center">
          <ExperienceTimeline expNum={expNum} setExpNum={setExpNum} />
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
