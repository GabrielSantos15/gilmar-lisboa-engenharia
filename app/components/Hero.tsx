import Image from "next/image";
import Button from "./Button";
import Bar from "./Bar";

export default function Hero() {
  return (
    <section className="relative w-full bg-[url('/images/hero-background.png')] bg-cover bg-center px-4 sm:px-8 pt-10 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r  from-background via-background/80 to-transparent z-0"></div>

      <div className="m-auto max-w-[1800px] flex flex-col md:flex-row justify-around items-center gap-10">
        <article className="relative z-10 flex flex-col gap-4 items-start ">
          <Bar text="Engenharia Civil" />

          <h2 className="text-white text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-title uppercase font-extrabold leading-none">
            Projetos que <br />
            <span className="text-primary">marcam</span>
          </h2>

          <p className="text-white text-base sm:text-lg">
            Espaços que traduzem quem você é
          </p>

          <Button>VAMOS CONVERSAR</Button>

          <Bar />
        </article>

        <div className="relative z-10">
          <Image
            src="/images/gilmar.png"
            alt="Gilmar"
            width={600}
            height={700}
            className="w-90 md:w-[400px] lg:w-[650px] h-full object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}