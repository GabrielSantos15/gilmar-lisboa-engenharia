import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import Bar from "./Bar";

export default function Contact() {
    return (
        <section id="contato" className="w-full bg-[#303030] py-24 px-6 lg:px-16 flex justify-center border-t border-white/10 min-h-[80vh]">
            <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                <article className="flex flex-col items-start gap-8">
                    <div className="w-16 h-1 bg-primary"></div>

                    <h2 className="font-title text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.9] text-white">
                        Vamos dar <br />
                        <span className="text-primary">forma à ideia?</span>
                    </h2>

                    <p className="text-white/80 text-xs sm:text-sm font-sans uppercase tracking-widest max-w-sm leading-relaxed mt-2">
                        Conte um pouco sobre o que você imagina. A primeira conversa é o começo.
                    </p>

                    <div className="flex flex-col gap-6 mt-6 w-full max-w-md">

                        {/* Bloco WhatsApp */}
                        <Link
                            href="https://wa.me/5515999999999?text=Olá!%20Acessei%20o%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                            target="_blank"
                            className="flex items-end justify-between pb-4 border-b border-white/30 hover:border-primary group transition-colors"
                        >
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <FaWhatsapp className="w-4 h-4 text-primary" />
                                    <span className="text-white/50 font-sans text-xs uppercase tracking-widest">WhatsApp</span>
                                </div>
                                <span className="text-white font-title text-2xl sm:text-3xl font-bold tracking-wide group-hover:text-primary transition-colors mt-1">
                                    (15) 99999-9999
                                </span>
                            </div>
                            <LuArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-primary transition-colors mb-1" />
                        </Link>

                        {/* Bloco Email */}
                        <Link
                            href="mailto:contato@gilmarlisboa.com.br"
                            className="flex items-end justify-between pb-4 border-b border-white/30 hover:border-primary group transition-colors"
                        >
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <FaEnvelope className="w-4 h-4 text-primary" />
                                    <span className="text-white/50 font-sans text-xs uppercase tracking-widest">Email</span>
                                </div>
                                {/* Usamos sm:text-2xl aqui para garantir que um email longo não quebre a linha */}
                                <span className="text-white font-title text-xl sm:text-2xl font-bold tracking-wide group-hover:text-primary transition-colors mt-1">
                                    contato@gilmarlisboa.com.br
                                </span>
                            </div>
                            <LuArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-primary transition-colors mb-1" />
                        </Link>

                    </div>
                </article>

                {/* Lado Direito: Mapa e Endereço */}
                <div className="flex flex-col gap-4">
                    <div className="w-full h-[350px] lg:h-[450px] relative bg-zinc-800 rounded-sm overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.816619139058!2d-47.6756385!3d-23.286112100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5e22d5b305529%3A0x260ab7872521343c!2sRua%20Jos%C3%A9%20Ferriello%2C%20107%20-%20Sl%2002%20-%20Centro%2C%20Boituva%20-%20SP%2C%2018550-037!5e0!3m2!1spt-BR!2sbr!4v1790475585512!5m2!1spt-BR!2sbr"
                            className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="flex flex-col items-start gap-2 pt-2">
                        <Bar width="200px"></Bar>
                        <p className="text-white/80 font-sans text-xs sm:text-sm uppercase tracking-widest">
                            Rua José Ferriello, 107 - Sl 02 - Centro - Boituva/SP
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}