import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Leadership />
      <Projects />
      <Achievements />
      <TechStack />
      <Education />
      <Contact />
    </main>
  );
}


