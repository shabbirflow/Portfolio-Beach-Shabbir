import { stuff } from "@/app/constants";
import { PhoneCall, MapPin, FileText, MailOpen } from "lucide-react";
import { FC } from "react";
import { Fade } from "react-awesome-reveal";

interface OtherInfoProps {}

const OtherInfo: FC<OtherInfoProps> = ({}) => {
  const cardClasses = "group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4 h-36 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-default";
  const iconClasses = "transition-colors duration-300 group-hover:text-primary";
  const textClasses = "text-sm text-center font-medium opacity-80 group-hover:opacity-100 transition-opacity";

  return (
    <Fade className="" triggerOnce duration={1000}>
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-4 p-2">
        <div className={cardClasses}>
          <MailOpen className={iconClasses} />
          <span className={textClasses}>{stuff.email}</span>
        </div>

        <div className={cardClasses}>
          <PhoneCall className={iconClasses} />
          <span className={textClasses}>{stuff.phone}</span>
        </div>

        <div className={cardClasses}>
          <MapPin className={iconClasses} />
          <span className={textClasses}>{stuff.location}</span>
        </div>

        <a
          href={stuff.cvURL}
          target="_blank"
          className={`${cardClasses} cursor-pointer`}
        >
          <FileText className={iconClasses} />
          <span className={textClasses}>Download CV</span>
        </a>
      </div>
    </Fade>
  );
};

export default OtherInfo;
