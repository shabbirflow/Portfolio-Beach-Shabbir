import { FC } from "react";
import StarsCanvas from "./three/Stars";
import { stuff } from "@/app/constants";
import NeonCanvas from "./three/NeonModel";
import { ChevronDown, FileText } from "lucide-react";
import { scrollToId } from "./Navbar";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  const codeLines = stuff.aboutCodeLines.reduce((acc: string, curr: string) => {
    const ele = acc.length ? `\n$ ${curr}` : `$ ${curr}`;
    return (acc += ele);
  }, "");
  // console.log(codeLines);

  const context = useContext(ThemeContext);
  if (!context) throw new Error("THEME CONTEXT NOT FOUND");
  const { theme, setTheme } = context;
  return (
    <div className="w-screen h-screen relative" data-theme={theme}>
      <div className="grid w-full h-full md:grid-cols-2 md:grid-rows-1 grid-rows-3 grid-cols-1 gap-1">
        <div className="flex flex-col items-center h-full">{leftStuff}</div>
        <div className="flex flex-row justify-center items-center md:hidden ">
          <div className="mockup-code m-6 h-[80%] w-[90%] p-3 z-40">
            {/* w-[80vw] */}
            {/* {stuff.aboutCodeLines.map((x, ind) => {
              return (
                <pre data-prefix="$" key={ind} className="text-xs md:text-base">
                  <code>{x}</code>
                </pre>
              );
            })} */}
            <TypeAnimation
              style={{ zIndex: 50 }}
              sequence={[
                stuff.aboutCodeLines.reduce(
                  (acc: string, curr: string, ind) => {
                    // if (ind >= 2) {
                    //   return acc;
                    // }
                    const ele = acc.length ? `\n$   ${curr}` : `$   ${curr}`;
                    return (acc += ele);
                  },
                  ""
                ),
                1000,
              ]}
              repeat={Infinity}
              className="whitespace-pre w-fit font-mono text-xs z-50"
            />
          </div>
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center ">
          <NeonCanvas />
        </div>
      </div>
      {/* <StarsCanvas /> */}
    </div>
  );
};

export default HomePage;

const leftStuff = (
  <>
    <div className="p-5 md:pb-16 flex flex-col gap-5 z-[10] md:w-[40vw] w-full absolute">
      <h1 className="md:text-[50px] text-[35px] font-bold lg:pt-24 md:pt-18 lg:mt-10 pt-14 cursor-pointer text-center">
        <span className="text-3xl lg:text-7xl md:text-5xl z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary md:text-center">
          <Fade duration={200} cascade>
            {stuff.title}
          </Fade>
        </span>
      </h1>
      <div className="mockup-code md:block hidden lg:m-4 md:m-2 lg:p-8 p-4 w-full relative h-48 scrollbar scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-track-stone-400 scrollbar-thumb-slate-600">
        <TypeAnimation
          // style={{ whiteSpace: "pre-line" }}
          sequence={[
            stuff.aboutCodeLines.reduce((acc: string, curr: string) => {
              const ele = acc.length ? `\n$   ${curr}` : `$   ${curr}`;
              return (acc += ele);
            }, ""),
            1000,
          ]}
          repeat={Infinity}
          className="whitespace-pre w-fit font-mono lg:text-base md:text-xs"
        />
      </div>
      <div className="w-full flex flex-row justify-evenly items-center md:pt-4 lg:pt-8">
        <button
          className="btn btn-md lg:btn-lg btn-primary shadow-md shadow-accent"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("experience");
          }}
        >
          See More <ChevronDown className="md:w-6 md:h-6 h-3 w-3" />
        </button>
        <a
          role="button"
          className="btn btn-md lg:btn-lg btn-secondary shadow-md shadow-accent"
          target="_blank"
          href={stuff.cvURL}
        >
          Download CV <FileText className="md:w-6 md:h-6 h-3 w-3" />
        </a>
      </div>
    </div>
    <button className="btn btn-primary">Button</button>
  </>
);

{
  /* {stuff.aboutCodeLines.map((x, ind) => {
          return (
            <pre data-prefix="$" key={ind} className="w-fit">
              <code>{x}</code>
            </pre>
          );
        })} */
}
