"use client";
import { FC } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Palette } from "lucide-react";
import { themeNames } from "../../../tailwind.config";
import * as daisyuithemes from "daisyui/src/theming/themes";
import ThemeRectangles from "./ThemeRectangles";

interface ThemeData {
  [key: string]: Record<string, string>;
}

const ThemeDropDown: FC = () => {
  const { theme, setTheme } = useTheme();
  
  const themeArray: ThemeData[] = themeNames.map((name: string): ThemeData => {
    const themeColors =
      daisyuithemes.default[name as keyof typeof daisyuithemes.default];
    return { [name]: themeColors as Record<string, string> };
  });

  return (
    <div className="dropdown inline z-50 md:mr-24 mr-20 m-0 dropdown-hover">
      <div tabIndex={0} role="button" className="btn" aria-label="Select theme">
        {theme} <Palette size={16} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] shadow-2xl bg-base-300 rounded-box w-40 md:h-[65vh] h-[40vh] overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-track-rounded-md scrollbar-track-stone-400 scrollbar-thumb-slate-600 scrollbar-thumb-rounded-md"
      >
        {themeArray.map((x: ThemeData) => {
          const thisTheme = Object.keys(x)[0];
          return (
            <li key={thisTheme} className="flex flex-row items-center w-40">
              <button
                name="theme-dropdown"
                aria-label={`Switch to ${thisTheme} theme`}
                value={thisTheme}
                className="theme-controller btn btn-block md:btn-md btn-sm btn-ghost flex flex-row justify-between"
                onClick={() => setTheme(thisTheme)}
              >
                <span
                  className={`md:text-sm text-xs ${
                    thisTheme === theme ? "text-accent font-semibold" : ""
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
