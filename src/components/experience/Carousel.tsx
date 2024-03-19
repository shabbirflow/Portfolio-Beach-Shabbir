import { FC } from "react";
import { experience } from "@/app/constants";
import ExperienceCard from "./ExperienceCard";

interface CarouselProps {
  expNum: number;
  setExpNum: React.Dispatch<React.SetStateAction<number>>;
}

const Carousel: FC<CarouselProps> = ({ expNum, setExpNum }) => {
  const maxExp = experience.length;

  return (
    <div className="carousel w-full">
      <div className="carousel-item relative w-full">
        <ExperienceCard {...experience[expNum]} />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button className="btn btn-circle" onClick={() => setExpNum(expNum != 0 ? expNum - 1 : maxExp-1)}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={() => setExpNum(expNum != maxExp - 1 ? expNum + 1 : 0)}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
