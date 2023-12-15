import { stuff } from "@/app/constants";
import { PhoneCall, MapPin, FileText, MailOpen } from "lucide-react";
import { FC } from "react";
import { Fade } from "react-awesome-reveal";

interface OtherInfoProps {}

const OtherInfo: FC<OtherInfoProps> = ({}) => {
  return (
    <Fade className="" triggerOnce duration={1000}>
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-2 p-2">
        <button className="btn btn-ghost h-36 outline-primary outline-1 shadow-md shadow-accent">
          <MailOpen /> {stuff.email}
        </button>

        <button className="btn btn-ghost h-36 outline-primary outline-1 shadow-md shadow-accent">
          <PhoneCall /> {stuff.phone}
        </button>

        <button className="btn btn-ghost h-36 outline-primary outline-1 shadow-md shadow-accent">
          <MapPin /> {stuff.location}
        </button>

        <a
          href={stuff.cvURL}
          role="button"
          target="_blank"
          className="btn btn-ghost h-36 outline-primary outline-1 shadow-md shadow-accent"
        >
          <FileText /> Download CV
        </a>
      </div>
    </Fade>
  );
};

export default OtherInfo;
