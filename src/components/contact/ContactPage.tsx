"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import ContactForm from "./ContactForm";
import StarsCanvas from "../three/Stars";
import CodingProfiles from "./CodingProfiles";
import OtherInfo from "./OtherInfo";
import { Fade, Slide } from "react-awesome-reveal";

const ContactPage = ({}) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("THEME CONTEXT NOT FOUND");
  const { theme } = context;
  return (
    <div className="w-screen h-screen relative">
      <div
        data-theme={theme}
        className={`flex flex-col items-center w-full h-full bg-cover bg-center`}
      >
        <Fade triggerOnce duration={700} className="z-10 cursor-pointer">
          <h1 className="lg:text-5xl md:3xl text-2xl z-10 cursor-pointer md:hover:scale-105 hover:drop-shadow-lg hover:shadow-base-200 font-bold p-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent transition duration-150">
            Contact Me
          </h1>
        </Fade>
        <div className="w-full grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 grid-cols-1 gap-1 z-10 h-fit">
          <div className=" flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-accent text-center p-1 z-10 cursor-pointer">
                Get in Touch
              </h2>
              <OtherInfo />
            </div>

            <CodingProfiles />
          </div>
          <div className="">
            <h2 className="text-3xl font-semibold text-accent text-center p-1 z-10 cursor-pointer">
              Say Hello
            </h2>
            <Slide direction="right" triggerOnce duration={1000} fraction={0.5}>
            <ContactForm />
            </Slide>
          </div>
        </div>
      </div>
      {/* <StarsCanvas /> */}
    </div>
  );
};

export default ContactPage;
