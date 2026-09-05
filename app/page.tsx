import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <div className="h-[9000px]"></div>
    </div>
  );
}
