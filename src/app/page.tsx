"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import HomePage from "@/components/HomePage";
import ExperiencePage from "@/components/experience/ExperiencePage";
import Projects from "@/components/projects/ProjectsPage";
import SkillsPage from "@/components/skills/SkillsPage";
import ContactPage from "@/components/contact/ContactPage";
import StarsCanvas from "@/components/three/Stars";

export default function Home() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("THEME CONTEXT NOT FOUND");

  return (
    <div className="w-screen flex flex-col scrollbar scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-track-stone-400 scrollbar-thumb-slate-600">
      {/* <StarsCanvas /> */}
      <section id="home">
        <HomePage />
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
