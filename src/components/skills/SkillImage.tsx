import { FC } from "react";
import Tilt from "react-parallax-tilt";

interface SkillImageProps {
  imgUrl: string;
}

const SkillImage: FC<SkillImageProps> = ({ imgUrl }) => {
  return (
    <div className="z-10 cursor-pointer drop-shadow-lg h-fit">
      <Tilt
        className="parallax-effect-glare-scale rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl transition-colors duration-300 hover:bg-white/10"
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.05}
      >
        <div className="flex items-center justify-center lg:w-[6.5rem] lg:h-[6.5rem] md:w-[5rem] md:h-[5rem] w-14 h-14 p-3 overflow-hidden">
          <img
            src={imgUrl}
            className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
            alt="skill"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default SkillImage;
