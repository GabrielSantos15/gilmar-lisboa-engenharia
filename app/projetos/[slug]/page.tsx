import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaExpand, FaHome } from "react-icons/fa";

// Importe a sua lista de projetos (ajuste o caminho se necessário)
import { projects } from "../../data/projects";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }
  return (
    <main className="min-h-screen bg-background">
      {/* Capa do Projeto */}
      <section className="relative w-full h-[60vh] lg:h-[70vh]">
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
            className="w-fit flex items-center gap-2 text-white/80 hover:text-primary transition-colors font-sans text-sm tracking-widest uppercase"
          >
            <FaArrowLeft className="w-5 h-5" />
            Voltar
          </Link>

          <div className="flex flex-col gap-2">
            <span className="text-primary font-bold tracking-widest text-sm uppercase">
              {project.category || "Arquitetura"}
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-title uppercase font-black text-white leading-none">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Informações Técnicas */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <FaMapMarkerAlt className="w-6 h-6 text-primary" />
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">Local</p>
                <p className="text-white font-medium">{project.location || "Boituva, SP"}</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <FaExpand className="w-6 h-6 text-primary" />
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">Área</p>
                <p className="text-white font-medium">{project.area || "Consulte"}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <FaCalendarAlt className="w-6 h-6 text-primary" />
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">Ano</p>
                <p className="text-white font-medium">{project.year || "2026"}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <FaHome className="w-6 h-6 text-primary" />
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">Tipo</p>
                <p className="text-white font-medium">{project.category || "Residencial"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Descrição */}
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-title uppercase font-bold text-white mb-6 tracking-wide">
            O Conceito
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg font-sans">
            {project.description || "Descrição do projeto em desenvolvimento..."}
          </p>
        </div>
      </section>

      {/* Galeria de Fotos */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="max-w-[1600px] mx-auto px-4 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((img: string, index: number) => (
              <div key={index} className="relative w-full h-[400px] lg:h-[600px] group overflow-hidden">
                <Image
                  src={img}
                  alt={`${project.title} - Detalhe ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-surface py-20 px-6 text-center flex flex-col items-center justify-center border-t border-border">
        <h2 className="text-3xl lg:text-5xl font-title uppercase font-black text-white mb-6">
          Gostou deste <span className="text-primary">projeto?</span>
        </h2>
        <Link 
          href="/#contato" 
          className="bg-primary text-background font-bold py-4 px-8 rounded-sm hover:bg-primary/90 transition-colors uppercase tracking-widest font-sans"
        >
          Vamos conversar
        </Link>
      </section>
    </main>
  );
}
