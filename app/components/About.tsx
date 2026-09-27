import Image from "next/image";
import Bar from "./Bar";
import AnimatedLogo from "./AnimatedLogo";

export default function About() {
  return (
    <section className="w-full bg-background py-24 px-6 lg:px-16 flex justify-center items-center" id="quem-somos">
      <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-56 sm:w-64 lg:w-80 m-auto">
            <AnimatedLogo radius={80} />
          </div>
        </div>
        <article className="lg:col-span-7 flex flex-col gap-6">
          <h2 className="uppercase font-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide">
            A Nossa <span className="text-primary">História</span>
          </h2>

          <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed font-sans">
            <p>
              Engenheiro Civil formado em 2014, com mais de 300 projetos desenvolvidos, atuo na criação de espaços que unem identidade, funcionalidade e atenção aos detalhes. Cada projeto é pensado de forma personalizada, considerando a rotina, as necessidades e a essência de quem vai vivê-lo.
            </p>
            <p>
              Mais do que entregar plantas e imagens, meu objetivo é transformar ideias em lugares que representem quem você é. Engenharia Civil, para mim, é uma forma de dar sentido à vida cotidiana por meio de espaços bem resolvidos, duráveis e cheios de intenção.
            </p>
          </div>

          <div className="pt-4 space-y-4">
            <Bar width="40%" />
            <h3 className="uppercase font-title text-4xl sm:text-5xl lg:text-6xl font-black text-white text-right">
              <span className="text-primary">+300</span> projetos
            </h3>
          </div>
        </article>

      </div>
    </section>
  );
}