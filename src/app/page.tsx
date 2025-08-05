"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import HomePage from "@/components/HomePage";
import ExperiencePage from "@/components/experience/ExperiencePage";
import Projects from "@/components/projects/ProjectsPage";
import SkillsPage from "@/components/skills/SkillsPage";
import ContactPage from "@/components/contact/ContactPage";
import ParticlesComponent from "@/components/Particles";
import HomePage2 from "@/components/HomePage2";
export default function Home() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("THEME CONTEXT NOT FOUND");
  const { theme, setTheme } = context;

  return (
    <div data-theme={theme} className="w-screen h-fit flex flex-col scrollbar scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-track-stone-400 scrollbar-thumb-slate-600">
      {/* <ParticlesComponent /> */}
      <section id="home">
        <HomePage />
        {/* <HomePage2 /> */}
      </section>
      <section id="experience">
        <ExperiencePage />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <SkillsPage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
    </div>
  );
}
