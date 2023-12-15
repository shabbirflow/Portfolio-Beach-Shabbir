import { FC } from "react";
import Tilt from "react-parallax-tilt";

interface SkillImageProps {
  imgUrl: string;
}

const SkillImage: FC<SkillImageProps> = ({ imgUrl }) => {
  return (
    <div className="avatar z-10 cursor-pointer drop-shadow-lg">
      <Tilt
        className="parallax-effect-glare-scale"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.07}
      >
        <div className="lg:w-[6.5rem] lg:h-[6.5rem] lg:max-h-[9rem] lg:hover:max-w-[7.5rem] md:w-[5rem] md:h-[5rem] md:max-h-[7rem] md:hover:max-w-[7rem] w-12 h-12 max-h-[4rem] overflow-hidden p-0">
          <img
            src={imgUrl}
            className="w-auto h-auto"
            alt="skill"
            // layout="fill"
            // objectFit="contain"
            // className="object-cover"
            // quality={100}
            // position="relative"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default SkillImage;
