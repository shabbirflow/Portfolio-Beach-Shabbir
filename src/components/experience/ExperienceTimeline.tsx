import { FC } from "react";
import { experienceTimeLine } from "@/app/constants";
import { Code, School2 } from "lucide-react";
import { Fade } from "react-awesome-reveal";

interface ExperienceTimelineProps {
  expNum: number;
  setExpNum: React.Dispatch<React.SetStateAction<number>>;
}

const ExperienceTimeline: FC<ExperienceTimelineProps> = ({ expNum }) => {
  const workExperiences = experienceTimeLine.filter(
    (exp) => exp.type === "work"
  );
  let currentWorkIndex = -1;

  return (
    <Fade triggerOnce={true} duration={1200} fraction={0.35}>
      <ul className="grid grid-cols-1 gap-0 h-full timeline timeline-snap-icon timeline-vertical p-2">
        {experienceTimeLine.map((exp, ind) => {
          if (exp.type === "work") currentWorkIndex++;
          const isSelected = exp.type === "work" && currentWorkIndex === expNum;
          return (
            <li key={ind} className="z-10">
              <hr />
              <div
                className={`timeline-middle ${
                  isSelected
                    ? "shadow-[0_0_20px_5px_rgba(255,215,0,0.7)] rounded-full"
                    : ""
                }`}
              >
                {exp.type === "work" ? (
                  <Code className="p-1 border rounded-full" />
                ) : (
                  <School2 />
                )}
              </div>

              <div
                className={`${
                  ind % 2
                    ? "timeline-start md:text-end text-center"
                    : "timeline-end md:text-start text-center"
                } mb-10 w-full max-w-[280px] sm:max-w-sm`}
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(var(--p),0.15)] cursor-pointer">
                  <time
                    className={`font-mono italic text-accent/80 text-sm block mb-1 ${
                      ind == 0
                        ? "text-shadow-yellow-500 font-bold tracking-tight"
                        : ""
                    }`}
                  >
                    {exp.time}
                  </time>
                  <div className="text-lg font-bold text-primary leading-tight">
                    {exp.title}
                  </div>
                </div>
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    </Fade>
  );
};

export default ExperienceTimeline;
