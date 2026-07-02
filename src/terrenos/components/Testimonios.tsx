import { useState, useEffect, useCallback } from "react";
import { testimonios } from "@/data/testimonios";

export const Testimonios = () => {
  const [current, setCurrent]   = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const total = testimonios.length;

  // Avance automático cada 5 s
  useEffect(() => {
    const id = setInterval(() => goTo((current + 1) % total, "next"), 5000);
    return () => clearInterval(id);
  }, [current, total]);

  const goTo = useCallback(
    (idx: number, dir: "next" | "prev" = "next") => {
      if (idx === current) return;
      setPrevious(current);
      setDirection(dir);
      setCurrent(idx);
      // Limpia el "anterior" tras la transición
      setTimeout(() => setPrevious(null), 500);
    },
    [current]
  );

  const handleDot = (idx: number) =>
    goTo(idx, idx > current ? "next" : "prev");

  return (
    <section
      id="testimonios"
      className="py-20 bg-[#2D4636] text-white overflow-hidden px-5 md:px-16"
    >
      {/* ── Header ── */}
      <div className="max-w-[1280px] mx-auto text-center mb-16">
        <span className="font-manrope font-semibold text-[13px] leading-[20px] tracking-[0.2em] text-[#ccead3]/80 uppercase block mb-3">
          Lo que dicen nuestros clientes
        </span>
        <h2 className="font-libre font-normal text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] text-white">
          Testimonios
        </h2>
      </div>

      {/* ── Slider ── */}
      <div className="max-w-4xl mx-auto relative">
        {/* Zona de slides con altura mínima fija */}
        <div className="relative min-h-[380px] md:min-h-[340px]">

          {testimonios.map((t, i) => {
            const isActive   = i === current;
            const isPrevious = i === previous;

            // Slide saliente: se va hacia la izquierda
            const exitClass = isPrevious
              ? direction === "next"
                ? "testimonial-exit-left"
                : "testimonial-exit-right"
              : "";

            // Slide entrante: viene desde la derecha
            const enterClass = isActive
              ? direction === "next"
                ? "testimonial-enter-right"
                : "testimonial-enter-left"
              : "";

            const visibleClass =
              isActive || isPrevious ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none";

            return (
              <div
                key={t.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${visibleClass} ${exitClass} ${enterClass}`}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-14 rounded-2xl relative h-full flex flex-col justify-center">

                  {/* Comilla decorativa */}
                  <span className="absolute -top-5 left-10 text-[80px] leading-none text-[#A67C52] opacity-50 font-serif select-none">
                    "
                  </span>

                  {/* Texto testimonio */}
                  <p className="font-libre max-sm:text-[14px] text-[18px] md:text-[22px] max-sm:leading-[25px] leading-[30px] md:leading-[34px] text-white/90 mb-10">
                    {t.text}
                  </p>

                  {/* Autor */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#A67C52] flex-shrink-0">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-manrope font-bold text-[14px] leading-[20px] text-white">
                        {t.name}
                      </p>
                      
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ── Dots ── */}
        <div className="flex justify-center mt-10 gap-3">
          {testimonios.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className={`rounded-full transition-all duration-300 hover:scale-125 ${
                i === current
                  ? "w-6 h-3 bg-[#A67C52]"
                  : "w-3 h-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};