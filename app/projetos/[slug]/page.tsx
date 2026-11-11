"use client"

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaExpand, FaHome } from "react-icons/fa";

// Importe a sua lista de projetos (ajuste o caminho se necessário)
import { projects } from "../../data/projects";
import ProjectGallery from "@/app/components/ProjectGallery";
import { useEffect } from "react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {

  useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);

  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Capa do Projeto */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-between max-w-[1400px] mx-auto px-6 lg:px-16 py-12">
          <Link
            href="/#projetos"
            className="w-fit flex items-center gap-2 text-white/80 hover:text-primary transition-colors font-sans text-xs sm:text-sm tracking-widest uppercase bg-black/30 backdrop-blur-md px-4 py-2 rounded-sm border border-white/10"
          >
            <FaArrowLeft className="w-4 h-4" />
            Voltar aos Projetos
          </Link>

          <div className="flex flex-col gap-2 max-w-4xl">
            <span className="text-primary font-bold tracking-widest text-xs sm:text-sm uppercase">
              {project.category || "Arquitetura e Engenharia"}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-title uppercase font-black text-white leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Informações Técnicas e Conceito */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-16 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Metadados / Grid lateral */}
        <div className="lg:col-span-4 bg-surface/50 border border-border/50 p-6 rounded-lg backdrop-blur-sm">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            
            {/* Local */}
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <p className="text-muted-foreground text-[11px] uppercase tracking-widest font-semibold">Local</p>
                <p className="text-white font-medium text-sm sm:text-base">{project.location || "Boituva, SP"}</p>
              </div>
            </div>
            
            {/* Área (se houver) */}
            {project.area && (
              <div className="flex items-start gap-3">
                <FaExpand className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground text-[11px] uppercase tracking-widest font-semibold">Área</p>
                  <p className="text-white font-medium text-sm sm:text-base">{project.area} m²</p>
                </div>
              </div>
            )}

            {/* Ano (Opcional - só exibe se preenchido) */}
            {project.year && (
              <div className="flex items-start gap-3">
                <FaCalendarAlt className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground text-[11px] uppercase tracking-widest font-semibold">Ano</p>
                  <p className="text-white font-medium text-sm sm:text-base">{project.year}</p>
                </div>
              </div>
            )}

            {/* Tipo / Categoria */}
            <div className="flex items-start gap-3">
              <FaHome className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <p className="text-muted-foreground text-[11px] uppercase tracking-widest font-semibold">Tipo</p>
                <p className="text-white font-medium text-sm sm:text-base">{project.category || "Residencial"}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Descrição / Conceito */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <h2 className="text-xl sm:text-2xl font-title uppercase font-bold text-white tracking-wide border-l-4 border-primary pl-4">
            O Conceito do Projeto
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg font-sans text-justify">
            {project.description || "Descrição do projeto em desenvolvimento..."}
          </p>
        </div>
      </section>

      {/* Galeria de Fotos Interativa (Com Lightbox) */}
      {project.gallery && project.gallery.length > 0 && (
        <ProjectGallery gallery={project.gallery} title={project.title} />
      )}

      {/* Call to Action */}
      <section className="bg-surface py-20 px-6 text-center flex flex-col items-center justify-center border-t border-border">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-title uppercase font-black text-white mb-6">
          Gostou deste <span className="text-primary">projeto?</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mb-8 text-sm sm:text-base">
          Vamos transformar o seu terreno ou ideia em um projeto exclusivo de alto padrão. Entre em contato conosco.
        </p>
        <Link 
          href="/#contato" 
          className="bg-primary text-background font-bold py-4 px-8 rounded-sm hover:bg-primary/90 transition-colors uppercase tracking-widest font-sans shadow-lg"
        >
          Vamos conversar
        </Link>
      </section>
    </main>
  );
}