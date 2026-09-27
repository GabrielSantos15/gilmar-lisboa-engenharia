"use client";

import { useState } from "react";
import { LuSettings, LuLayers, LuRuler, LuPlus, LuMinus } from "react-icons/lu";
import Bar from "./Bar";

const servicesData = [
    {
        id: "01",
        title: "PROJETOS RESIDENCIAIS E COMERCIAIS",
        summary: "PROJETOS PLANEJADOS A PARTIR DO TERRENO, DA ROTINA E DA LUZ QUE VOCÊ QUER VIVER.",
        details: "Aqui você pode adicionar um parágrafo mais longo explicando todas as etapas do projeto arquitetônico, reuniões de briefing, aprovação na prefeitura, etc.",
        icon: LuSettings,
    },
    {
        id: "02",
        title: "REGULARIZAÇÃO DE IMÓVEIS",
        summary: "DO COMEÇO AO FIM NA DOCUMENTAÇÃO ADEQUADA DO SEU IMÓVEL.",
        details: "Cuidamos de toda a parte burocrática, desde o levantamento técnico até a emissão do Habite-se e averbação em cartório, garantindo a tranquilidade do cliente.",
        icon: LuLayers,
    },
    {
        id: "03",
        title: "CONSULTORIAS ESPECIALIZADAS",
        summary: "ESTUDO E ANÁLIZE DE PROJETOS ESPECIALIZADOS.",
        details: "Análise de viabilidade técnica, laudos estruturais e consultoria para otimização de espaços antes da compra do terreno ou imóvel.",
        icon: LuRuler,
    },
];

export default function Services() {
    const [openId, setOpenId] = useState<string | null>("01");

    const toggleAccordion = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="w-full bg-[#303030] py-24 px-6 lg:px-16 flex justify-center" id="servicos">
            <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                <article className="lg:col-span-5 flex flex-col items-start gap-8">
                    <Bar />

                    <h2 className="font-title text-6xl sm:text-7xl lg:text-8xl font-extrabold uppercase text-white">
                        Nossos <br />
                        <span className="text-primary">Serviços</span>
                    </h2>

                    <p className="text-white text-sm sm:text-base font-sans  uppercase max-w-[320px] leading-relaxed mt-4">
                        Um acompanhamento próximo para transformar uma ideia em um espaço possível e preciso.
                    </p>
                </article>

                <div className="lg:col-span-7 flex flex-col">
                    {servicesData.map((service) => {
                        const isOpen = openId === service.id;
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.id}
                                className="group border-b border-white/10 last:border-0 py-8 cursor-pointer transition-all duration-300"
                                onClick={() => toggleAccordion(service.id)}
                            >
                                <div className="flex items-start gap-6 lg:gap-10">
                                    {/* Número */}
                                    <span className="font-title text-primary text-lg font-bold pt-1">
                                        {service.id}
                                    </span>

                                    {/* Textos */}
                                    <div className="flex-1 flex flex-col gap-3">
                                        <h3 className="font-title text-3xl sm:text-4xl uppercase font-bold tracking-wide group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>

                                        <p className="text-white/80 text-xs sm:text-sm font-sans uppercase tracking-wider leading-relaxed pr-8">
                                            {service.summary}
                                        </p>

                                        {/* Conteúdo Expansível */}
                                        <div
                                            className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="text-white/60 text-sm font-sans normal-case leading-relaxed pr-8 pb-2">
                                                    {service.details}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ícones e Toggle */}
                                    <div className="flex flex-col items-center justify-between gap-6 pt-1">
                                        <Icon className="w-6 h-6 text-primary" />
                                        {isOpen ? (
                                            <LuMinus className="w-6 h-6 text-primary transition-transform duration-300" />
                                        ) : (
                                            <LuPlus className="w-6 h-6 text-primary transition-transform duration-300" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}