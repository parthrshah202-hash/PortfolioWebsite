import Hero from "@/components/sections/Hero/Hero";
import Workflow from "@/components/sections/Workflow/Workflow";
import About from "@/components/sections/About/About";
import Skills from "@/components/sections/Skills/Skills";
import Projects from "@/components/sections/Projects/Projects";
import Experience from "@/components/sections/Experience/Experience";
import Achievements from "@/components/sections/Achievements/Achievements";
import Contact from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Workflow />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </div>
  );
}
