import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

const AUTOPLAY_INTERVAL_MS = 4000;

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

/* ── CTAs compartidos por ambas pantallas del carrousel ── */
const HeroCtas = () => (
  <div className="hero-entrance hero-delay-2 flex flex-wrap gap-4">
    <a
      href="#proyectos"
      className="bg-[#A67C52] text-white px-8 py-4 rounded-lg font-manrope font-semibold text-[14px] tracking-[0.05em] uppercase hover:bg-[#79542e] transition-all duration-300 hover:shadow-xl flex items-center gap-2"
    >
      Ver Proyectos
      <ArrowIcon />
    </a>
    <a
      href="#somos"
      className="border border-white text-white px-8 py-4 rounded-lg font-manrope font-semibold text-[14px] tracking-[0.05em] uppercase hover:bg-white/10 transition-all duration-300"
    >
      Conoce El Avellano
    </a>
  </div>
);

const TOTAL_SLIDES = 3;

export const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % TOTAL_SLIDES);
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section
      id="inicio"
      className="relative max-sm:h-[500px] h-[700px] md:h-[450px] mt-17 flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* ── Pantalla 1: imágenes desktop/mobile de paisajes ── */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          activeSlide === 0 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
        }`}
        aria-hidden={activeSlide !== 0}
      >
        {/* Imagen de fondo: una versión para desktop y otra para mobile */}
          <img
            src={isMobile ? "/banner web Global2_Mobile Avellano 1.jpg" : "/banner web Global2_Banner Avellano 1.jpg"}
            alt="Paisajes del sur de Chile"
            className="absolute inset-0 z-0 w-full h-auto min-h-[450px] object-cover"
          />

        {/* Overlay gradiente: opaco a la izquierda, transparente a la derecha */}
        <div className="absolute inset-0 z-0 hero-overlay" />

        {/* Contenido */}
        <div className="relative z-10 h-full flex items-end px-6 md:px-16 pb-15 md:pb-16 ">
          <div className="max-w-4xl">
            {
              isMobile ? null : <HeroCtas />
            }
            
          </div>
        </div>
      </div>

      {/* ── Pantalla 2: imágenes desktop/mobile de paisajes ── */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          activeSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
        }`}
        aria-hidden={activeSlide !== 1}
      >
        {/* Imagen de fondo: una versión para desktop y otra para mobile */}
          <img 
            src={isMobile ? "/banner web Global2_Mobile Avellano 2.jpg" : "/banner web Global2_Banner Avellano 2.jpg"}
            alt="Paisajes del sur de Chile"
            className="absolute inset-0 z-0 w-full h-auto min-h-[450px] object-cover "
          />

        {/* Overlay gradiente: opaco a la izquierda, transparente a la derecha */}
        <div className="absolute inset-0 z-0 hero-overlay" />

        {/* Contenido */}
        <div className="relative z-10 h-full flex items-end px-6 md:px-16 pb-10 md:pb-8 ">
          <div className="max-w-4xl">
            {
              isMobile ? null : <HeroCtas />
            }
          </div>
        </div>
      </div>
      
      {/* ── Pantalla 3: contenido original del hero ── */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          activeSlide === 2 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
        }`}
        aria-hidden={activeSlide !== 2}
      >
        {/* Imagen de fondo con efecto Ken Burns */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center animate-kenburns"
          style={{ backgroundImage: "url('/bannerPrincipal1.png')" }}
        />

        {/* Overlay gradiente: opaco a la izquierda, transparente a la derecha */}
        <div className="absolute inset-0 z-0 hero-overlay" />

        {/* Contenido */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-16">
          <div className="max-w-4xl">
            <h1 className="hero-entrance font-libre text-[36px] leading-[44px] md:text-[64px] md:leading-[72px] md:-tracking-[0.02em] text-white mb-6 leading-tight">
              Invierte en la paz
              <br />
              del Sur de Chile
            </h1>

            <p className="hero-entrance hero-delay-1 font-manrope text-[18px] leading-[28px] text-white/90 mb-10 max-w-xl">
              Terrenos exclusivos con alta plusvalía y entrega inmediata en los
              parajes más vírgenes de la Patagonia norte.
            </p>

            <HeroCtas />
          </div>
        </div>
      </div>


      {/* ── Indicadores del carrousel ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Ir a la pantalla ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === index ? "w-6 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
