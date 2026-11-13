"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Quem Somos", href: "/#quem-somos" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Serviços", href: "/#servicos" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 sm:px-8 py-3">
        <Link href="/">
          <Image src="/images/logos/logo.png" alt="Logo" width={100} height={100} className="w-20 sm:w-24 h-auto" />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-foreground uppercase text-sm font-semibold">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-primary transition-colors duration-300">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Button >Vamos Conversar</Button>
            </li>
          </ul>
        </nav>

        {/* Botão hambúrguer mobile */}
        <button
          className="md:hidden text-foreground p-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX className="w-8 h-8 text-primary" /> : <HiMenu className="w-8 h-8" />}
        </button>
      </div>

      {/* Menu mobile em Overlay / Tela Cheia Abaixo do Header */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="px-6 py-8">
          <ul className="flex flex-col items-center gap-6 text-foreground uppercase text-base font-semibold">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="w-full text-center">
                <a 
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className="block py-2 hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="w-full pt-4 flex justify-center">
              <div onClick={() => setIsOpen(false)}>
                <Button>Vamos Conversar</Button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}