import { ChatBotWsp } from "../components/ChatBot";
import { Contactenos } from "../components/Contactenos";
import { Proyectos } from "../components/Proyectos";
import { QuienesSomos } from "../components/QuienesSomos";
import { Seguridad } from "../components/Seguridad ";
import { Testimonios } from "../components/Testimonios";

export const HomePage = () => {
  return (
    <div>
      {/* ── Hero ── pantalla completa con Ken Burns + overlay gradiente lateral */}
      <section
        id="inicio"
        className="relative h-screen md:h-[508px] mt-17 flex items-center overflow-hidden"
      >
        {/* Imagen de fondo con efecto Ken Burns */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center animate-kenburns"
          style={{ backgroundImage: "url('/bannerPrincipal1.png')" }}
        />

        {/* Overlay gradiente: opaco a la izquierda, transparente a la derecha */}
        <div className="absolute inset-0 z-0 hero-overlay" />

        {/* Contenido */}
        <div className="relative z-10 px-6 md:px-16 max-w-4xl">

          <h1 className="hero-entrance font-libre text-[36px] leading-[44px] md:text-[64px] md:leading-[72px] md:-tracking-[0.02em] text-white mb-6 leading-tight">
            Invierte en la paz<br />
            del Sur de Chile
          </h1>

          <p className="hero-entrance hero-delay-1 font-manrope text-[18px] leading-[28px] text-white/90 mb-10 max-w-xl">
            Terrenos exclusivos con alta plusvalía y entrega inmediata en los
            parajes más vírgenes de la Patagonia norte.
          </p>

          <div className="hero-entrance hero-delay-2 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="bg-[#A67C52] text-white px-8 py-4 rounded-lg font-manrope font-semibold text-[14px] tracking-[0.05em] uppercase hover:bg-[#79542e] transition-all duration-300 hover:shadow-xl flex items-center gap-2"
            >
              Ver Proyectos
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
            </a>
            <a
              href="#somos"
              className="border border-white text-white px-8 py-4 rounded-lg font-manrope font-semibold text-[14px] tracking-[0.05em] uppercase hover:bg-white/10 transition-all duration-300"
            >
              Conoce El Avellano
            </a>
          </div>

        </div>
      </section>

      <Proyectos />
      <Seguridad/>
      <QuienesSomos />
      <Testimonios />
      <ChatBotWsp />
      <Contactenos />
    </div>
  );
};