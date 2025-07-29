import { FC } from "react";
import { experienceTimeLine } from "@/app/constants";
import { Code, School2 } from "lucide-react";
import { Fade } from "react-awesome-reveal";

interface ExperienceTimelineProps {
  expNum: number;
  setExpNum: React.Dispatch<React.SetStateAction<number>>;
}

const ExperienceTimeline: FC<ExperienceTimelineProps> = ({expNum}) => {
  return (
    <Fade triggerOnce={true} duration={1200} fraction={0.35}>
      <ul className="grid grid-cols-1 gap-0 h-full timeline timeline-snap-icon timeline-vertical p-2">
        {experienceTimeLine.map((exp, ind) => {
          return (
            <li key={ind} className="z-10">
              <hr />
              <div className="timeline-middle">
                {exp.type === "work" ? (
                  <Code className="p-1 border rounded-full" />
                ) : (
                  <School2 />
                )}
              </div>
              <div
                className={`${
                  ind % 2
                    ? "timeline-start text-end"
                    : "timeline-end text-start"
                } mb-10`}
              >
                <time className={`font-mono italic text-accent ${ind == 0 ? "text-shadow-yellow-500 text-shadow-sm font-extrabold drop-shadow-lg tracking-tight": ""}`}>{exp.time}</time>
                <div className="text-lg font-black text-primary">
                  {exp.title}
                </div>
                {/* <p className="hidden md:block text-base-content">{exp.desc}</p> */}
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
