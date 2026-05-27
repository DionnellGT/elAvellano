
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useProyectos } from "../hooks/useProyectos";
import { Link } from "react-router";

export const Proyectos = () => {
  const proyectos = useProyectos();
  const [current, setCurrent] = useState(0);
  const total = proyectos.length;

  const prev = () => setCurrent((i) => (i - 1 + total) % total);
  const next = () => setCurrent((i) => (i + 1) % total);

  // índices de las cards visibles: izquierda, centro, derecha
  const leftIdx  = (current - 1 + total) % total;
  const rightIdx = (current + 1) % total;

  return (
    <section id="proyectos" className="bg-[#f5f0eb] py-20 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#a07030] text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
            Encuentra tu parcela
          </p>
          <h2 className="font-bold text-stone-900 text-4xl md:text-5xl">
            Nuestros Proyectos
          </h2>
        </div>

        {/* Carrusel */}
        <div className="relative flex items-center justify-center gap-4 h-[420px]">

          {/* Card IZQUIERDA */}
          <div
            className="relative w-[220px] md:w-[260px] h-[220px] md:h-[320px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer opacity-80 hover:opacity-90 transition-opacity duration-300"
            onClick={prev}
          >
            <img
              src={proyectos[leftIdx].imageCarrousel}
              alt={proyectos[leftIdx].name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay desvanecido */}
            <div className="absolute inset-0 bg-white/30" />
            {/* Flecha */}
            <button
              className="absolute top-1/2 left-3 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={18} className="text-stone-700" />
            </button>
          </div>

          {/* Card CENTRAL — grande y destacada */}
          <div className="relative w-[440px] md:w-[620px] h-[280px] md:h-[420px] rounded-2xl overflow-hidden flex-shrink-0 shadow-2xl z-10 group">
            <img
              src={proyectos[current].imageCarrousel}
              alt={proyectos[current].name}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 brightness-90 group-hover:brightness-110"
            />
            {/* Botón Ver Proyecto */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center">
              <Link to={`/proyectos/${proyectos[current].idSlug}`}>
                <div className="px-6 py-2.5 rounded-full bg-[#a07030] text-white font-semibold text-[14px] tracking-wide hover:bg-[#8a5f28] transition-colors duration-200 shadow-lg">
                  Ver Proyecto
                </div>
              </Link>
            </div>
          </div>

          {/* Card DERECHA */}
          <div
            className="relative w-[220px] md:w-[260px] h-[220px] md:h-[320px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer opacity-80 hover:opacity-90 transition-opacity duration-300"
            onClick={next}
          >
            <img
              src={proyectos[rightIdx].imageCarrousel}
              alt={proyectos[rightIdx].name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay desvanecido */}
            <div className="absolute inset-0 bg-white/30" />
            {/* Flecha */}
            <button
              className="absolute top-1/2 right-3 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={18} className="text-stone-700" />
            </button>
          </div>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {proyectos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-[#a07030] w-6" : "bg-stone-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};