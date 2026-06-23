import { useProyectos } from "../hooks/useProyectos";
import { Link } from "react-router";

export const Proyectos = () => {
  const proyectos = useProyectos();

  return (
    <section
      id="proyectos"
      className="py-20 bg-[#fff8f5] px-5 md:px-16"
    >
      <div className="max-w-[1280px] mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-16 reveal-section">
          <span className="font-manrope font-semibold text-[14px] leading-[20px] tracking-[0.2em] text-[#A67C52] uppercase block mb-4">
            Oportunidades de Inversión
          </span>
          <h2 className="font-libre font-normal text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] text-stone-900">
            Nuestros Proyectos
          </h2>
          {/* línea decorativa dorada */}
          <div className="w-20 h-[3px] bg-[#A67C52] mx-auto mt-6 rounded-full" />
        </div>

        {/* ── Grid de cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="group bg-[#F9F6F1] overflow-hidden border border-[#E5E7E6] rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Imagen con badge */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={proyecto.imageCarrousel}
                  alt={proyecto.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Badge de estado (usa badgeLabel y badgeColor del proyecto si existen, o un default) 
                {proyecto.badgeLabel && (
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full font-manrope font-semibold text-sm uppercase tracking-wider ${
                      proyecto.badgeColor === "green"
                        ? "bg-[#2D4636] text-[#F9F6F1]"
                        : "bg-[#A67C52] text-white"
                    }`}
                  >
                    {proyecto.badgeLabel}
                  </div>
                )}
                */}
              </div>

              {/* Cuerpo */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-libre font-normal text-[24px] leading-[32px] text-stone-900">
                    {proyecto.name}
                  </h3>
                  {proyecto.precioDesde && (
                    <div className="text-right flex-shrink-0 ml-4">
                      <span className="block font-manrope font-semibold text-xs text-[#A67C52] uppercase tracking-wider mb-0.5">
                        Desde
                      </span>
                      <span className="font-libre text-[20px] leading-[28px] text-stone-900 font-bold">
                        {proyecto.precioDesde}
                      </span>
                    </div>
                  )}
                </div>

                <Link
                  to={`/proyectos/${proyecto.idSlug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="block w-full text-center bg-[#A67C52] text-white py-4 rounded-lg font-manrope font-semibold text-[14px] tracking-[0.15em] uppercase hover:bg-[#79542e] transition-all duration-300 hover:shadow-md active:scale-[0.98]"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};