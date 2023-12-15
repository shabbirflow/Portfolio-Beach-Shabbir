"use client";
import { FC } from "react";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { ChevronDown } from "lucide-react";
import { pages } from "../app/constants";
import Link from "next/link";
import ThemeDropDown from "./theme/ThemeDropDown";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("THEME CONTEXT NOT FOUND");
  const { theme, setTheme } = context;
  return (
    <div
      className="navbar bg-base-100 shadow-lg p-0 fixed top-0 z-50"
      data-theme={theme}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <ChevronDown size={20} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {pages.map((page, ind) => (
              <li key={ind}>
                <Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(page.name.toLowerCase());
                  }}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost text-xl"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("home");
          }}
        >
          <p className="text-xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent transition duration-150">
            Shabbir
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {pages.map((page, ind) => (
            <li key={ind}>
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(page.name.toLowerCase());
                }}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeDropDown />
      </div>
    </div>
  );
};

export default Navbar;

export const scrollToId = (id: string) => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const element = document.getElementById(id.toLowerCase());
  if (element) {
    const topPos = element.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: topPos, behavior: "smooth" });
  }
};
