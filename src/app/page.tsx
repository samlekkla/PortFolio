import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import TechStackSection from "@/app/components/TechStackSection";
import ExperienceEducationSection from "@/app/components/ExperienceEducationSection";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <section id="home"><HeroSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="tech-stack"><TechStackSection /></section>
      <section id="experience"><ExperienceEducationSection /></section>
      <section id="contact"><ContactSection /></section>
    </main>
  );
}

