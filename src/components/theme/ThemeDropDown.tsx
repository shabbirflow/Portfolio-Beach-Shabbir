"use client";
import { FC, useContext } from "react";
import { Palette } from "lucide-react";
import { themeNames } from "../../../tailwind.config";
import * as daisyuithemes from "daisyui/src/theming/themes";
import { ThemeContext } from "@/context/ThemeContext";
import ThemeRectangles from "./ThemeRectangles";

interface ThemeDropDownProps {}

const ThemeDropDown: FC<ThemeDropDownProps> = ({}) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("THEME CONTEXT NOT FOUND");
  const { theme, setTheme } = context;
  const themeArray: any = themeNames.map((x: string): any => {
    const themeStuff =
      daisyuithemes.default[x as keyof typeof daisyuithemes.default];
    return { [x]: themeStuff };
  });

  return (
    <div className="dropdown inline z-50 md:mr-24 mr-20 m-0 dropdown-hover">
      <div tabIndex={0} role="button" className="btn">
        {theme ? theme : "Theme"} <Palette size={16} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] shadow-2xl bg-base-300 rounded-box w-40 md:h-[65vh] h-[40vh] overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-track-rounded-md scrollbar-track-stone-400 scrollbar-thumb-slate-600 scrollbar-thumb-rounded-md"
      >
        {themeArray.map((x: any) => {
          const thisTheme = Object.keys(x)[0];
          return (
            <li key={thisTheme} className="flex flex-row items-center w-40">
              <button
                name="theme-dropdown"
                aria-label={thisTheme}
                value={thisTheme}
                className="theme-controller btn btn-block md:btn-md btn-sm btn-ghost flex flex-row justify-between"
                onClick={() => setTheme(thisTheme)}
              >
                <span
                  className={`md:text-sm text-xs ${
                    thisTheme === theme ? "text-accent" : ""
                  }`}
                >
                  {thisTheme}
                </span>
                <ThemeRectangles theme={x} themeName={thisTheme} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ThemeDropDown;
