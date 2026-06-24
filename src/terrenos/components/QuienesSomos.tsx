import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { VideoSection } from "./VideoSeccion";

export const QuienesSomos = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <section id="somos" className="py-20 bg-white px-5 md:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">

          {/* ── Columna izquierda: dos imágenes en grid escalonado ── */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            {/* Imagen 1 — empujada hacia abajo con mt-8 para efecto escalonado */}
            <img
              src="/home_1.webp"
              alt="Expertos en Liquidez"
              className="w-full h-80 object-cover rounded-xl mt-8 transition-all duration-700 hover:rotate-1 hover:scale-105 cursor-pointer"
            />
            {/* Imagen 2 — rotación inversa en hover */}
            <img
              src="/home_2.webp"
              alt="Vistas del Sur"
              className="w-full h-80 object-cover rounded-xl transition-all duration-700 hover:-rotate-1 hover:scale-105 cursor-pointer"
            />
          </div>

          {/* ── Columna derecha: texto ── */}
          <div className="w-full md:w-1/2 md:pl-8">

            {/* Eyebrow */}
            <span className="font-manrope font-semibold text-[13px] leading-[20px] tracking-[0.15em] text-[#A67C52] uppercase block mb-3">
              Nuestra Historia
            </span>

            {/* Título */}
            <h2 className="font-libre font-normal text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] text-stone-900 mb-6">
              Expertos en Liquidez
            </h2>

            {/* Párrafo principal */}
            <p className="font-manrope text-[16px] leading-[26px] text-stone-500 mb-5">
              Somos profesionales dedicados a la liquidación de activos,
              enfocados en facilitar y efectuar tu liquidez. En El Avellano
              entendemos que la tierra no es solo un espacio, es una
              oportunidad de libertad financiera.
            </p>

            {/* Párrafo secundario */}
            <p className="font-manrope text-[15px] leading-[25px] text-stone-400 mb-8">
              Nuestra selección de terrenos en el sur de Chile se basa en
              criterios estrictos de accesibilidad, potencial de crecimiento y
              belleza natural, asegurando que cada inversión sea un refugio
              tanto para tu familia como para tu capital.
            </p>

            {/* Link con subrayado animado */}
            <a
              onClick={() => setOpen(true)}
              className="quienes-link inline-flex items-center gap-2 text-[#A67C52] font-manrope font-semibold text-[14px] leading-[20px] tracking-[0.05em] transition-colors duration-300 hover:text-[#79542e]"
            >
              Más sobre nosotros
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

          </div>
        </div>
      </div>
      <VideoSection open={open} setOpen={setOpen} />
    </section>
  );
};