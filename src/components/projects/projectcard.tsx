"use client";
import { FC } from "react";
import { Github, Link as Linkicon } from "lucide-react";
import Link from "next/link";

interface projectcardProps {
  title: string;
  description: string;
  image: string;
  githubURL: string;
  liveURL: string;
}

const Projectcard: FC<projectcardProps> = ({
  title,
  description,
  image,
  githubURL,
  liveURL,
}) => {
  return (
    <div className="z-10 card w-96 bg-base-100 shadow-md shadow-accent md:hover:scale-110 transition duration-200 relative group">
      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:flex-col group-hover:bg-opacity-80 transition-all duration-500 rounded-lg">
        <p className="md:p-2 p-0.5  text-white m-4 text-justify">
          {description}
        </p>
        <div className="w-full m-1 md:p-4 p-0 flex flex-row justify-center items-center">
          <Link
            href={githubURL}
            target="_blank"
            className="md:p-2 p-0.5 hover:border hover:border-yellow-300 hover:rounded-full hover:radius transition duration-75 hover:scale-105"
          >
            <Github className="w-9 h-9 text-white" />
          </Link>
          <Link
            href={liveURL}
            target="_blank"
            className="ml-6 md:p-2 p-0.5 hover:border hover:border-yellow-300 hover:rounded-full hover:radius transition duration-75 hover:scale-105"
          >
            <Linkicon className="w-9 h-9 text-white" />
          </Link>
        </div>
      </div>
      <div className="card-body p-3">
        <h2 className="card-title">{title}</h2>
      </div>
      <figure>
        <img src={"/projects/" + image} alt={title} />
      </figure>
    </div>
  );
};

export default Projectcard;
