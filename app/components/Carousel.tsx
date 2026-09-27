"use client";

import { useRef } from "react";
import Link from "next/link";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Bar from "./Bar";
import Button from "./Button";

export function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-background py-10 overflow-hidden">
      <div className="mx-auto flex flex-col relative">

        {/* Carousel Track */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projetos/${project.slug}`} // Rota dedicada para o projeto
              className="w-[85vw] sm:w-[350px] md:w-[400px] lg:w-[450px] flex-shrink-0 snap-start block group cursor-pointer focus:outline-none"
            >
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>

        {/* Navigation Buttons - Bottom Right (Hidden on mobile) */}
        <div className="flex justify-between gap-4 items-center">
          <div className="flex gap-2 ">
            <Link href='/projetos'><Button >MAIS PROJETOS</Button></Link>
          </div>
          <div className="hidden md:flex justify-end gap-4 mt-4 pr-4">
            <button
              onClick={() => scroll("left")}
              className="flex items-center justify-center w-14 h-14 rounded-full border border-border bg-transparent text-white hover:bg-primary hover:text-background hover:border-primary transition-all duration-300"
              aria-label="Scroll left"
            >
              <FaArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex items-center justify-center w-14 h-14 rounded-full border border-border bg-transparent text-white hover:bg-primary hover:text-background hover:border-primary transition-all duration-300"
              aria-label="Scroll right"
            >
              <FaArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}