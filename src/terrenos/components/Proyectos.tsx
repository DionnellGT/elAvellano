import { Link } from "react-router";
import { useRef } from "react";
import { useProyectos } from "../hooks/useProyectos";

export const Proyectos = () => {
  const { proyectos, loading } = useProyectos();
  const isDragging = useRef(false);


  // Evita que el click del Link se dispare si el usuario estaba arrastrando
  const handleLinkClick = (e: React.MouseEvent) => {
    if (isDragging.current) e.preventDefault();
  };

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

        {loading ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 animate-pulse">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-72 rounded-2xl sm:rounded-4xl bg-stone-200" />
            ))}
          </div>
        ) : proyectos.length === 0 ? (
          <div className="rounded-[1.5rem] border border-stone-200 bg-white p-8 text-center shadow-sm">
            <p className="text-stone-700">No hay proyectos disponibles en este momento.</p>
          </div>
        ) : (
          <>
            {/* ── Cards: flex wrap centrado ──
              Cada card tiene w-full en mobile, ancho fijo en md+.
              Con 1 o 2 proyectos quedan centradas; con 3+ forman filas. */}
            <div className="flex flex-wrap justify-center gap-6">
            { proyectos.map((proyecto) => 
              <div
              key={proyecto.id}
              className="group bg-[#F9F6F1] overflow-hidden border border-[#E5E7E6] rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[420px]"
              >
              {/* ── Imagen con badge ── */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={proyecto.imageCarrousel}
                  alt={proyecto.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Badge superior — ocupa todo el ancho, fondo semitransparente */}
                {
                    proyecto.badgeLabel && (
                      <div
                        className={`absolute top-0 left-0 right-0 px-5 py-3 font-manrope font-bold text-[15px] text-center leading-[18px] tracking-[0.08em] uppercase ${
                          proyecto.badgeColor === "green"
                            ? "bg-[#2D4636]/90 text-[#F9F6F1]"
                            : proyecto.badgeColor === "brown"
                              ? "bg-[#b8975a]/90 text-white"
                              : "bg-[#eb242e]/90 text-white"
                        }`}
                      >
                        {proyecto.badgeLabel}
                      </div>
                  )
                }

                {/* Precio sobre la imagen — esquina superior derecha cuando NO hay badge */}
                {!proyecto.badgeLabel && proyecto.precioDesde && (
                  <div className="absolute top-4 right-4 bg-[#F9F6F1]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                    <span className="font-manrope font-bold text-[13px] text-stone-900">
                      DESDE {proyecto.precioDesde}
                    </span>
                  </div>
                )}
              </div>

              {/* ── Cuerpo ── */}
              <div className="p-7">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-libre font-normal text-[24px] leading-[32px] text-stone-900">
                    {proyecto.name}
                  </h3>
                  {proyecto.precioDesde && (
                    <div className="text-right flex-shrink-0 ml-4">
                      <span className="block font-manrope font-semibold text-[10px] tracking-[0.12em] text-[#A67C52] uppercase mb-0.5">
                        Desde
                      </span>
                      <span className="font-manrope font-bold text-[17px] leading-[24px] text-stone-900">
                        {proyecto.precioDesde}
                      </span>
                    </div>
                  )}
                </div>

                {
                  proyecto.isActive ? (
                    <Link
                      to={`/proyectos/${proyecto.idSlug}`}
                      onClick={(e) => { handleLinkClick(e); window.scrollTo(0, 0); }}
                      className="block w-full text-center bg-[#A67C52] text-white py-4 rounded-lg font-manrope font-semibold text-[13px] tracking-[0.15em] uppercase hover:bg-[#79542e] transition-all duration-300 hover:shadow-md active:scale-[0.98]"
                    >
                      Ver Detalles
                    </Link>
                  ) : (
                    <div className="block w-full text-center bg-[#7c7c7c] text-white py-4 rounded-lg font-manrope font-semibold text-[13px] tracking-[0.15em] uppercase hover:bg-[#727272] transition-all duration-300 hover:shadow-md active:scale-[0.98] cursor-not-allowed select-none">
                       <span>Ver Detalles</span>
                    </div>
                  )
                }
                
              </div>
              </div>
            )}
            </div>
          </>
        )}

      </div>
    </section>
  );
};