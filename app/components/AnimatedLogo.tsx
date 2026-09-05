import Image from "next/image";
import styles from "./AnimatedLogo.module.css";

export default function AnimatedLogo({ radius = 75 }: { radius?: number }) {
  const center = 100;
  const circlePath = `
    M ${center}, ${center}
    m -${radius}, 0
    a ${radius},${radius} 0 1,1 ${radius * 2},0
    a ${radius},${radius} 0 1,1 -${radius * 2},0
  `;

  return (
    <div className="relative aspect-square w-full h-full flex items-center justify-center border-2 rounded-full">
      {/* GL fixo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/logos/symbol-logo.png"
          alt="Símbolo GL"
          width={150}
          height={150}
          className="z-10 w-1/2 h-auto"
        />
      </div>

      {/* Texto circular girando */}
      <svg className={`absolute inset-0 w-full h-full ${styles.spinSlow}`} viewBox="0 0 200 200">
        <defs>
          <path id="circlePath" d={circlePath} />
        </defs>
        <text fill="white" fontSize="65%" letterSpacing="0.87em">
          <textPath href="#circlePath">
            GILMAR LISBOA • ENGENHARIA CIVIL •
          </textPath>
        </text>
      </svg>
    </div>
  );
}
