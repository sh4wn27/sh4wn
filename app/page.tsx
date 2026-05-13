import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#fafaf8] min-h-screen">
      <Nav />
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Research />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
