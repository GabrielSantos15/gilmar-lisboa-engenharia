import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const part1 = "55";   
  const part2 = "11"; 
  const part3 = "4002";  
  const part4 = "8922";

  // junta dinamicamente
  const whatsappNumber = `${part1}${part2}${part3}${part4}`;

  const message = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de mais informações."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="
        group fixed bottom-5 right-5 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-[#25D366] shadow-lg
        transition-transform duration-300
        hover:scale-110
      "
    >
      <FaWhatsapp className="w-7 h-7 text-white transition-transform duration-300 group-hover:rotate-12" />
    </a>
  );
}
