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
    <header className="sticky top-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 py-3 bg-background/80 backdrop-blur-md border-b border-border">
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
            <Button>Vamos Conversar</Button>
          </li>
        </ul>
      </nav>

      {/* Botão hambúrguer mobile */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
      </button>

      {/* Menu mobile */}
      <nav
        className={`md:hidden fixed top-[64px] left-0 w-full bg-background border-b border-border overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-foreground uppercase text-sm font-semibold">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors duration-300">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Button>Vamos Conversar</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}