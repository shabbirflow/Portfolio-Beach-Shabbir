import HomePage from "@/components/HomePage";
import ExperiencePage from "@/components/experience/ExperiencePage";
import Projects from "@/components/projects/ProjectsPage";
import SkillsPage from "@/components/skills/SkillsPage";
import ContactPage from "@/components/contact/ContactPage";

export default function Home() {
  return (
    <div className="w-full h-fit flex flex-col scrollbar scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-track-stone-400 scrollbar-thumb-slate-600">
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
