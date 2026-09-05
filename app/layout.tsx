import type { Metadata } from "next";
import { Jost, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import WhatsappButton from "./components/WhatsappButton";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

export const metadata: Metadata = {
  title: "GL | Projetos que Marcam",
  description: "Descrição",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${jost.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      <WhatsappButton></WhatsappButton>
      </body>
    </html>
  );
}