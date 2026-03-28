"use client";
import { FC } from "react";
import { stuff } from "@/app/constants";
import { ChevronDown, FileText } from "lucide-react";
import { scrollToId } from "./Navbar";
import { useTheme } from "@/context/ThemeContext";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("./ui/ModelViewer"), { ssr: false });

const HomePage: FC = () => {
  const { theme } = useTheme();

  const codeSequence = stuff.aboutCodeLines.reduce(
    (acc: string, curr: string) => {
      return acc.length ? `${acc}\n$   ${curr}` : `$   ${curr}`;
    },
    ""
  );

  return (
    <div className="w-full h-screen relative !bg-transparent" data-theme={theme}>
      <div className="w-full h-full flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 gap-1">
        {/* Left: Text Content */}
        <div className="flex flex-col items-center h-full">
          <div className="p-5 md:pb-16 flex flex-col gap-5 z-[10] md:w-[40vw] w-full md:absolute relative">
            <h1 className="hover:scale-[1.05] transition-transform duration-150 md:text-[50px] text-[35px] font-bold lg:pt-24 md:pt-18 lg:mt-10 pt-14 cursor-pointer text-center">
              <span className="text-3xl lg:text-7xl md:text-5xl z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                {stuff.title}
              </span>
            </h1>

            {/* Desktop Code Mockup */}
            <div className="hover:scale-[1.05] transition-transform duration-150 mockup-code md:block hidden lg:m-4 md:m-2 lg:p-8 p-4 w-full relative h-48 scrollbar scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-track-stone-400 scrollbar-thumb-slate-600">
              <TypeAnimation
                sequence={[codeSequence, 1000]}
                repeat={Infinity}
                className="whitespace-pre w-fit font-mono lg:text-base md:text-xs"
              />
            </div>

            {/* Mobile Code Mockup */}
            <div className="md:hidden flex justify-center w-full">
              <div className="mockup-code m-3 p-3 z-40 w-full max-w-[400px]">
                <TypeAnimation
                  sequence={[codeSequence, 1000]}
                  repeat={Infinity}
                  className="whitespace-pre w-full font-mono text-xs z-50"
                />
              </div>
            </div>

            <div className="w-full flex flex-row justify-evenly items-center md:pt-4 lg:pt-8">
              <button
                className="btn btn-md lg:btn-lg btn-primary shadow-md shadow-accent hover:scale-[1.05] transition-transform duration-150"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("experience");
                }}
              >
                See More <ChevronDown className="md:w-6 md:h-6 h-3 w-3" />
              </button>
              <a
                role="button"
                className="btn btn-md lg:btn-lg btn-secondary shadow-md shadow-accent hover:scale-[1.05] transition-transform duration-150"
                target="_blank"
                rel="noopener noreferrer"
                href={stuff.cvURL}
              >
                Get My Resume <FileText className="md:w-6 md:h-6 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Hero Image / 3D Model */}
        <div className="flex justify-center items-center w-full h-full px-4 min-h-[400px]">
          <Fade duration={1500} triggerOnce className="w-full h-full flex justify-center items-center">
            <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-[400px] md:h-[500px] lg:h-[600px]">
              {/* Adjust the `scale={...}` below to make the model bigger or smaller. 
                  Currently reduced from 1.8 to 1.6 as requested. */}
              <ModelViewer 
                modelPath="/models/japanese_bridge_garden_fixed.glb" 
                scale={1.6}
                position={[0, 0, 0]}
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
