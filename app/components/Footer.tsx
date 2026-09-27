import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-background pt-20 pb-6 px-6 lg:px-16 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-16">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

                    <div className="md:col-span-5 flex flex-col items-start gap-6">
                        <Image src="/images/logos/logo.png" alt="Logo" width={100} height={100} className="w-20 sm:w-24 h-auto" />
                        <p className="text-white/60 font-sans text-sm uppercase tracking-widest max-w-sm leading-relaxed">
                            Engenharia Civil. Projetos que marcam. Espaços que traduzem quem você é.
                        </p>
                    </div>

                    <div className="md:col-span-4 flex flex-col gap-6">
                        <h3 className="font-title text-lg font-bold text-white uppercase tracking-widest mb-2">
                            Navegação
                        </h3>
                        <nav className="flex flex-col gap-4">
                            <Link href="/#quem-somos" className="text-white/60 hover:text-primary font-sans text-sm uppercase tracking-widest transition-colors w-fit">
                                A Nossa História
                            </Link>
                            <Link href="/#projetos" className="text-white/60 hover:text-primary font-sans text-sm uppercase tracking-widest transition-colors w-fit">
                                Projetos
                            </Link>
                            <Link href="/#servicos" className="text-white/60 hover:text-primary font-sans text-sm uppercase tracking-widest transition-colors w-fit">
                                Serviços
                            </Link>
                            <Link href="/#contato" className="text-white/60 hover:text-primary font-sans text-sm uppercase tracking-widest transition-colors w-fit">
                                Contato
                            </Link>
                        </nav>
                    </div>

                    <div className="md:col-span-3 flex flex-col gap-6">
                        <h3 className="font-title text-lg font-bold text-white uppercase tracking-widest mb-2">
                            Redes Sociais
                        </h3>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                target="_blank"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-primary hover:text-background hover:border-primary transition-all duration-300"
                            >
                                <FaInstagram className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-primary hover:text-background hover:border-primary transition-all duration-300"
                            >
                                <FaLinkedinIn className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-primary hover:text-background hover:border-primary transition-all duration-300"
                            >
                                <FaWhatsapp className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="mt-4">
                            <p className="text-white/40 font-sans text-xs uppercase tracking-widest">
                                CREA: 123456789-0
                            </p>
                        </div>
                    </div>

                </div>

                {/* Barra Inferior (Copyright e Créditos) */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
                    <p className="text-white/40 font-sans text-xs uppercase tracking-widest text-center md:text-left">
                        &copy; {new Date().getFullYear()} Gilmar Lisboa Engenharia. Todos os direitos reservados.
                    </p>
                    <p className="text-white/40 font-sans text-xs uppercase tracking-widest flex items-center gap-1">
                        Desenvolvido por <span className="text-white/60 font-bold hover:text-primary transition-colors cursor-pointer">Gabriel Santos</span>
                    </p>
                </div>

            </div>
        </footer>
    );
}