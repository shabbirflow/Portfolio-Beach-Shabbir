import { FC } from "react";
import {
  Fade,
  Bounce,
  JackInTheBox,
  Hinge,
  AttentionSeeker,
  Slide,
  Roll,
} from "react-awesome-reveal";

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
      duration={1000}
      fraction={0.35}
      className="w-fit flex flex-col justify-center items-center"
    >
      <div className="z-10 m-2 p-2 card w-[78%] bg-base-100 shadow-md shadow-accent cursor-pointer">
        <div className="card-body">
          <div className="flex flex-row justify-between align-middle items-center">
            <h2 className="card-title text-xl font-bold inline-flex">
              {title}
            </h2>
            <div>
              <img
                className="object-contain max-h-[4rem] max-w-sm"
                src={"/experience/" + image}
                alt={title}
              />
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <p className="font-semibold inline text-start text-lg ">
              {company}
            </p>
            <p className="inline text-end italic">{time}</p>
          </div>
          <Slide fraction={1} cascade triggerOnce damping={0.5}>
            {descBullets.map((desc, ind) => (
              <div className="chat chat-start" key={desc}>
                <div className="chat-bubble md:text-sm lg:text-base ">
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
