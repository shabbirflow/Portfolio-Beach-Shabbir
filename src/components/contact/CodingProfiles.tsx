import { socialLinks } from "@/app/constants";
import { FC } from "react";
import BallCanvas from "../three/BallCanvas";
import { AttentionSeeker } from "react-awesome-reveal";

interface CodingProfilesProps {}

const CodingProfiles: FC<CodingProfilesProps> = ({}) => {
  return (
    <div className="w-full grid grid-cols-5 justify-center items-center my-4">
      <AttentionSeeker effect="tada" cascade damping={0.5} triggerOnce>
        {socialLinks.map((x, ind) => {
          return (
            <div
              key={ind}
              className={`m-0 p-0 flex flex-row justify-center items-center`}
            >
              <a
                href={x.link}
                target="_blank"
                className="btn btn-ghost cursor-pointer m-0 p-0  rounded-full w-20 h-20 flex flex-col justify-center items-center"
              >
                <BallCanvas imgUrl={`/codingprofiles/${x.title}.png`} />
              </a>
            </div>
          );
        })}
      </AttentionSeeker>
    </div>
  );
};

export default CodingProfiles;
