import Link from "next/link";
import Bar from "./Bar";
import { Carousel } from "./Carousel";
import Button from "./Button";

export default function ProjectsResum() {
    return (
        <section className=" max-w-[1800px] m-auto px-4 md:px-12 lg:px-20  py-24" id="projetos">
            <Bar></Bar>
            <div className="flex flex-wrap justify-between items-center">
                <h2 className="uppercase font-title text-3xl sm:text-4xl lg:text-5xl font-extrabold">PROJETOS QUE <span>FICAM</span></h2>
                <p className="mb-4">CONHEÇA ALGUNS DOS NOSSOS <br /> PROJETOS REALIZADOS.</p>
            </div>
            <Carousel></Carousel>
            <Bar width="500px"></Bar>
        </section>
    )
}