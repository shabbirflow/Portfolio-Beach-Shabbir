import { FC } from "react";
import { Fade, Slide } from "react-awesome-reveal";

interface ExperienceCardProps {
  title: string;
  descBullets: Array<string>;
  time: string;
  company: string;
  image: string;
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  descBullets,
  company,
  time,
  image,
}) => {
  return (
    <Fade
      triggerOnce={true}
      duration={800}
      fraction={0.2}
      className="w-full flex flex-col justify-center items-center"
    >
      <div className="z-10 m-2 p-0 card w-full max-w-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(var(--p),0.15)] cursor-pointer">
        <div className="card-body p-5 gap-3">
          <div className="flex flex-row justify-between items-center gap-3">
            <h3 className="card-title text-lg font-bold leading-tight">
              {title}
            </h3>
            <div className="bg-white/90 dark:bg-white p-1.5 rounded-lg shadow-sm flex items-center justify-center">
              <img
                className="object-contain h-10 w-20 flex-shrink-0"
                src={"/experience/" + image}
                alt={`${company} logo`}
              />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center text-sm">
            <p className="font-semibold">{company}</p>
            <p className="italic opacity-70">{time}</p>
          </div>

          <div className="divider my-0" />

          <Slide fraction={0.5} cascade triggerOnce damping={0.3}>
            {descBullets.map((desc) => (
              <div className="chat chat-start" key={desc}>
                <div className="chat-bubble chat-bubble-primary text-sm">
                  {desc}
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </Fade>
  );
};

export default ExperienceCard;
