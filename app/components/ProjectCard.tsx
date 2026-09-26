"use client";

import Image from "next/image";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-title text-lg font-medium leading-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {project.category} / {project.year}
          </p>
        </div>
        <span
          aria-hidden
          className="mt-1 shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
        >
          →
        </span>
      </div>
    </article>
  );
}
