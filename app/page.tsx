import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsResum from "./components/ProjectsResum";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <ProjectsResum></ProjectsResum>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
}
