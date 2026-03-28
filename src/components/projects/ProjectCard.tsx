"use client";
import { FC } from "react";
import { Github, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubURL: string;
  liveURL: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  githubURL,
  liveURL,
}) => {
  return (
    <div className="z-20 card w-full max-w-md bg-base-100 shadow-md shadow-accent/30 border border-base-300 md:hover:scale-105 transition duration-200 relative group overflow-hidden cursor-pointer">
      <figure className="relative h-48 overflow-hidden rounded-t-2xl">
        <img
          src={"/projects/" + image}
          alt={`Screenshot of ${title} project`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex flex-col items-center gap-3 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-sm text-center leading-relaxed font-medium">
              {description}
            </p>
            <div className="flex flex-row gap-5 mt-3">
              <Link
                href={githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle bg-base-100/20 btn-md border-none text-white hover:bg-primary hover:text-white"
                aria-label={`View ${title} on GitHub`}
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href={liveURL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle bg-base-100/20 btn-md border-none text-white hover:bg-secondary hover:text-white"
                aria-label={`View live demo of ${title}`}
              >
                <LinkIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </figure>
      <div className="card-body p-5">
        <h3 className="card-title text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
