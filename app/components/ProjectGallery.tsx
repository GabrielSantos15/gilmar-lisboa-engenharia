"use client";

import { useState } from "react";
import Image from "next/image";
import { FaExpand, FaTimes } from "react-icons/fa";

interface ProjectGalleryProps {
  gallery: string[];
  title: string;
}

export default function ProjectGallery({ gallery, title }: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <section className="max-w-[1600px] mx-auto px-4 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gallery.map((img: string, index: number) => (
            <div
              key={index}
              onClick={() => setActiveImage(img)}
              className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] group overflow-hidden rounded-md cursor-pointer bg-black/40"
            >
              <Image
                src={img}
                alt={`${title} - Detalhe ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay de hover com ícone de expandir */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-background/80 p-3 rounded-full text-white backdrop-blur-sm shadow-lg">
                  <FaExpand className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal / Lightbox para ver a imagem expandida */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
            aria-label="Fechar imagem"
          >
            <FaTimes className="w-6 h-6" />
          </button>

          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative w-full max-w-7xl h-[85vh] flex items-center justify-center"
          >
            <Image
              src={activeImage}
              alt="Visualização ampliada do projeto"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      )}
    </>
  );
}