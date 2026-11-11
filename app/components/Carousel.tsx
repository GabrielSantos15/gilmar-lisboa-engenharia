"use client";

import { useRef } from "react";
import Link from "next/link";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "./Button";

export function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      // No mobile rola um card por vez (~300px), no desktop rola mais (~420px)
      const scrollAmount = direction === "left" ? -350 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-background py-10 overflow-hidden min-h-[80vh]">
      <div className="mx-auto flex flex-col relative px-4 sm:px-6">

        {/* Carousel Track (Permite touch/drag nativo no mobile) */}
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projetos/${project.slug}`}
              className="w-[82vw] sm:w-[350px] md:w-[400px] lg:w-[450px] flex-shrink-0 snap-start block group cursor-pointer focus:outline-none"
            >
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>

        {/* Navigation Bar - Visível no Mobile e Desktop */}
        <div className="flex items-center justify-between gap-4 mt-2">
          {/* Botão Ver Mais */}
          <div className="flex-shrink-0">
            <Link href="/projetos">
              <Button>MAIS PROJETOS</Button>
            </Link>
          </div>

          {/* Botões de Seta (Agora visíveis também no mobile) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-border bg-transparent text-white hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 active:scale-95 shrink-0"
              aria-label="Projeto anterior"
            >
              <FaArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-border bg-transparent text-white hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 active:scale-95 shrink-0"
              aria-label="Próximo projeto"
            >
              <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}