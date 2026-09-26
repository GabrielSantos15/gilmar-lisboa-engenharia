import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsResum from "./components/ProjectsResum";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <ProjectsResum></ProjectsResum>
      <div className="h-[9000px]"></div>

    </div>
  );
}
