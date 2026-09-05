import { ReactNode } from "react";
import { LuArrowUpRight } from "react-icons/lu";

type ButtonProps = {
  children?: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="
        group relative overflow-hidden
        border border-white py-2 px-3
        flex items-center gap-1

        before:content-['']
        before:absolute before:inset-0
        before:bg-white
        before:origin-left before:scale-x-0
        before:transition-transform before:duration-300
        hover:before:scale-x-100
        cursor-pointer
      "
    >
      <span className="relative z-10 flex items-center gap-1 transition-colors duration-300 group-hover:text-background">
        {children}
        <LuArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </button>
  );
}