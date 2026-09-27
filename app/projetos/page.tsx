import Link from "next/link";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background">

            <section className="pt-32 pb-16 px-6 lg:px-16 max-w-[1600px] mx-auto flex flex-col items-start gap-6">
                <div className="w-16 h-1 bg-primary"></div>
                <h1 className="font-title text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase text-white leading-none">
                    O Nosso <br />
                    <span className="text-primary">Portfólio</span>
                </h1>
                <p className="text-white/60 font-sans text-sm uppercase tracking-widest max-w-lg mt-4 leading-relaxed">
                    Explore a nossa seleção completa de projetos residenciais e comerciais. Cada obra é uma nova história.
                </p>
            </section>

            {/* Grid de Projetos */}
            <section className="px-6 lg:px-16 pb-32 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projetos/${project.slug}`}
                            className="w-full block group cursor-pointer focus:outline-none transition-transform duration-500 hover:-translate-y-2"
                        >
                            <ProjectCard project={project} />
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}