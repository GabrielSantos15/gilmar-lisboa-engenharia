"use client";

import { useState } from "react";
import { LuSettings, LuLayers, LuRuler, LuPlus, LuMinus, LuShieldCheck } from "react-icons/lu";
import Bar from "./Bar";

export const servicesData = [
    {
        id: "01",
        title: "PROJETOS RESIDENCIAIS E COMERCIAIS",
        summary: "PROJETOS PLANEJADOS A PARTIR DO TERRENO, DA ROTINA E DA LUZ QUE VOCÊ QUER VIVER.",
        details: "Concepção arquitetônica e estrutural completa, unindo estética, funcionalidade e alta eficiência construtiva. Desenvolvemos desde o briefing inicial e estudos preliminares até o projeto executivo, detalhamento de interiores e acompanhamento técnico para residências de alto padrão e edifícios comerciais.",
        icon: LuSettings,
    },
    {
        id: "02",
        title: "REGULARIZAÇÃO DE IMÓVEIS",
        summary: "DO COMEÇO AO FIM NA DOCUMENTAÇÃO ADEQUADA DO SEU IMÓVEL.",
        details: "Cuidamos de toda a parte burocrática e legal do seu patrimônio com total segurança jurídica. Nossos serviços englobam:",
        items: [
            "Aprovação de projetos e emissão de Habite-se na Prefeitura",
            "Averbação de construção em Cartório de Registro de Imóveis",
            "Regularização completa de obras (CNO - Cadastro Nacional de Obras)",
            "Emissão de CND (Certidão Negativa de Débitos) junto à Receita Federal"
        ],
        icon: LuLayers,
    },
    {
        id: "03",
        title: "CONSULTORIAS E LAUDOS TÉCNICOS",
        summary: "ESTUDO DE VIABILIDADE, CRÉDITO IMOBILIÁRIO E SEGURANÇA PARA A SUA OBRA.",
        details: "Assessoria técnica especializada para tomadas de decisão seguras e liberação de recursos. Atuamos com:",
        items: [
            "Análise de viabilidade técnica e laudos estruturais",
            "Acompanhamento e gestão de Financiamento Bancário (Caixa Econômica Federal) e Avanço de Obra",
            "Regularização e projetos voltados para segurança e conformidade"
        ],
        icon: LuRuler,
    },
    {
        id: "04",
        title: "PROJETOS DE SEGURANÇA E REGULARIZAÇÃO CORPORATIVA",
        summary: "CONFORMIDADE TÉCNICA E LEGAL PARA ESTABELECIMENTOS COMERCIAIS E INDUSTRIAIS.",
        details: "Elaboração de projetos e documentações exigidas pelos órgãos competentes para funcionamento e liberação de licenças operacionais:",
        items: [
            "LTA (Laudo Técnico de Avaliação) para estabelecimentos de saúde, farmácias e comércio",
            "CLCB (Certificado de Licenciamento do Corpo de Bombeiros)",
            "AVCB (Auto de Vistoria do Corpo de Bombeiros)"
        ],
        icon: LuShieldCheck,
    },
];

export default function Services() {
    const [openId, setOpenId] = useState<string | null>("01");

    const toggleAccordion = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="w-full bg-[#262626] py-20 lg:py-28 px-6 lg:px-16 flex justify-center border-t border-white/5" id="servicos">
            <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                {/* Coluna Lateral Fixa / Título */}
                <article className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col items-start gap-6">
                    <Bar />

                    <h2 className="font-title text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-white leading-none">
                        Nossos <br />
                        <span className="text-primary">Serviços</span>
                    </h2>

                    <p className="text-white/70 text-xs sm:text-sm font-sans uppercase tracking-wider max-w-[300px] leading-relaxed">
                        Um acompanhamento próximo para transformar uma ideia em um espaço possível, seguro e preciso.
                    </p>
                </article>

                {/* Coluna da Lista de Serviços (Acordeão) */}
                <div className="lg:col-span-8 flex flex-col divide-y divide-white/10">
                    {servicesData.map((service) => {
                        const isOpen = openId === service.id;
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.id}
                                className="group py-8 first:pt-0 last:pb-0 cursor-pointer transition-colors"
                                onClick={() => toggleAccordion(service.id)}
                            >
                                <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                                    {/* Número */}
                                    <span className="font-title text-primary text-lg sm:text-xl font-bold pt-1">
                                        {service.id}
                                    </span>

                                    {/* Conteúdo Principal */}
                                    <div className="flex-1 flex flex-col gap-3">
                                        <div className="flex items-center justify-between gap-4">
                                            <h3 className="font-title text-2xl sm:text-3xl uppercase font-bold tracking-wide group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                        </div>

                                        <p className="text-white/80 text-xs sm:text-sm font-sans uppercase tracking-wider leading-relaxed">
                                            {service.summary}
                                        </p>

                                        {/* Bloco Expansível */}
                                        <div
                                            className={`grid transition-all duration-500 ease-in-out ${
                                                isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                                            }`}
                                        >
                                            <div className="overflow-hidden flex flex-col gap-4">
                                                <p className="text-white/70 text-sm sm:text-base font-sans normal-case leading-relaxed">
                                                    {service.details}
                                                </p>

                                                {/* Renderização condicional dos subtópicos (items) */}
                                                {service.items && service.items.length > 0 && (
                                                    <ul className="flex flex-col gap-2.5 bg-black/20 p-5 rounded-sm border border-white/5">
                                                        {service.items.map((item, index) => (
                                                            <li key={index} className="flex items-start gap-3 text-white/90 text-sm font-sans normal-case">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                                                                <span className="leading-relaxed">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ícones e Ações */}
                                    <div className="flex flex-col items-center justify-between gap-6 pt-1 shrink-0">
                                        <Icon className="w-6 h-6 text-primary" />
                                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                                            {isOpen ? (
                                                <LuMinus className="w-4 h-4 text-primary transition-transform duration-300" />
                                            ) : (
                                                <LuPlus className="w-4 h-4 text-primary transition-transform duration-300" />
                                            )}
                                        </div>
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