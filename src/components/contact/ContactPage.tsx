"use client";
import { useTheme } from "@/context/ThemeContext";
import ContactForm from "./ContactForm";
import CodingProfiles from "./CodingProfiles";
import OtherInfo from "./OtherInfo";
import { Fade, Slide } from "react-awesome-reveal";

const ContactPage = () => {
  const { theme } = useTheme();
  return (
    <div
      className="w-full min-h-screen py-20 px-6 md:px-16 flex flex-col items-center !bg-transparent"
      data-theme={theme}
      id="contact"
    >
      <div className="flex flex-col items-center w-full h-full bg-cover bg-center py-4">
        <Fade triggerOnce duration={700} className="z-10">
          <h2 className="lg:text-5xl md:text-3xl text-2xl z-10 font-bold p-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Contact Me
          </h2>
        </Fade>
        <div className="w-full grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 grid-cols-1 gap-4 z-10 h-fit px-4">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-accent text-center p-2 z-10">
                Get in Touch
              </h3>
              <OtherInfo />
            </div>
            <CodingProfiles />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-accent text-center p-2 z-10">
              Say Hello
            </h3>
            <Slide direction="right" triggerOnce duration={1000} fraction={0.5}>
              <ContactForm />
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
