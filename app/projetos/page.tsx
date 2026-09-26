
import Link from "next/link";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import Header from "../components/Header";

export default function ProjectsPage() {
    return (
        <main>
            <Header></Header>
            <h1 className="text-center mt-5">PROJETOS</h1>
            <section className="flex flex-wrap gap-5">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projetos/${project.slug}`}
                        className="w-[85vw] sm:w-[350px] md:w-[400px] lg:w-[450px] flex-shrink-0 snap-start block group cursor-pointer focus:outline-none"
                    >
                        <ProjectCard project={project} />
                    </Link>
                ))}
            </section>
        </main>
    );
}
