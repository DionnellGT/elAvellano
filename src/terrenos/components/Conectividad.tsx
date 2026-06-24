import { useState } from "react";
import { Compass } from "lucide-react";

interface CentroUrbano {
  nombre: string;
  distancia: string;
  tiempo: string;
  linkMaps?: string;
  imgCentroUrbano?: string;
}

interface AtraccionTuristica {
  nombre: string;
  tiempo: string;
  distancia: string;
  linkMaps?: string;
  imgAtraccionTuristica?: string;
}

interface ConectividadProps {
  centrosUrbanosCercanos: CentroUrbano[];
  atraccionesTuristicas: AtraccionTuristica[];
  imagenCentrosUrbanos: string;
  imagenAtraccionesTuristicas: string;
}

// ── Card reutilizable ───────────────────────────────────────────────────────
const LocationCard = ({
  nombre,
  distancia,
  tiempo,
  linkMaps,
  imagen,
}: {
  nombre: string;
  distancia: string;
  tiempo: string;
  linkMaps?: string;
  imagen: string;
}) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
    <div className="h-56 relative overflow-hidden">
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#2D4636]">
        {distancia.toUpperCase()}
      </div>
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#2D4636]">
        {tiempo.toUpperCase()}
      </div>
    </div>
    <div className="p-6">
      {linkMaps ? (
        <a
          href={linkMaps}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-xl text-stone-900 hover:text-[#A67C52] transition-colors duration-200 font-manrope"
        >
          {nombre}
        </a>
      ) : (
        <h3 className="font-bold text-xl text-stone-900 font-manrope">{nombre}</h3>
      )}
    </div>
  </div>
);

// ── Componente principal ────────────────────────────────────────────────────
export const Conectividad = ({
  centrosUrbanosCercanos,
  atraccionesTuristicas,
  imagenCentrosUrbanos,
  imagenAtraccionesTuristicas,
}: ConectividadProps) => {
  const [centrosExpanded, setCentrosExpanded] = useState(false);
  const [atraccionesExpanded, setAtraccionesExpanded] = useState(false);

  const centrosVisibles = centrosUrbanosCercanos.slice(0, 3);
  const centrosExtra    = centrosUrbanosCercanos.slice(3);

  const atraccionesVisibles = atraccionesTuristicas.slice(0, 3);
  const atraccionesExtra    = atraccionesTuristicas.slice(3);

  return (
    <>
      {/* ══ ENTORNO CERCANO ══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-[120px] bg-white" id="entorno">
        <div className="px-6 max-w-[1200px] mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div>
              <span className="text-[#A67C52] text-xs font-semibold tracking-[0.2em] uppercase font-manrope">
                Entorno Cercano
              </span>
              <h2 className="font-libre text-3xl md:text-4xl text-[#2D4636] mt-4">
                Centros urbanos y servicios
              </h2>
            </div>
            <div className="flex-shrink-0 bg-[#A67C52] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 font-manrope">
              <Compass size={20} />
              {centrosUrbanosCercanos.length} Destinos cercanos
            </div>
          </div>

          {/* Primeras 3 cards — siempre visibles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {centrosVisibles.map((c, i) => (
              <LocationCard
                key={i}
                nombre={c.nombre}
                distancia={c.distancia}
                tiempo={c.tiempo}
                linkMaps={c.linkMaps}
                imagen={c.imgCentroUrbano ?? imagenCentrosUrbanos}
              />
            ))}
          </div>

          {/* Cards extra + botón */}
          {centrosExtra.length > 0 && (
            <>
              <div
                className="conectividad-expandable mt-5"
                style={{
                  maxHeight: centrosExpanded ? "2000px" : "0",
                  opacity:   centrosExpanded ? 1 : 0,
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {centrosExtra.map((c, i) => (
                    <LocationCard
                      key={i}
                      nombre={c.nombre}
                      distancia={c.distancia}
                      tiempo={c.tiempo}
                      linkMaps={c.linkMaps}
                      imagen={c.imgCentroUrbano ?? imagenCentrosUrbanos}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <button
                  onClick={() => setCentrosExpanded(v => !v)}
                  className="bg-white text-[#2D4636] border border-[#2D4636]/20 px-10 py-3 rounded-full font-bold hover:bg-[#2D4636] hover:text-white hover:scale-105 transition-all duration-300 font-manrope"
                >
                  {centrosExpanded ? "Ver menos destinos" : "Explorar más destinos cercanos"}
                </button>
              </div>
            </>
          )}

        </div>
      </section>

      {/* ══ TURISMO LOCAL ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-[120px] bg-[#F5F0EB]" id="atracciones">
        <div className="px-6 max-w-[1200px] mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div>
              <span className="text-[#A67C52] text-xs font-semibold tracking-[0.2em] uppercase font-manrope">
                Turismo local
              </span>
              <h2 className="font-libre text-3xl md:text-4xl text-[#2D4636] mt-4">
                Atracciones imperdibles
              </h2>
            </div>
            <div className="flex-shrink-0 bg-[#A67C52] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 font-manrope">
              <Compass size={20} />
              {atraccionesTuristicas.length} Atracciones turísticas
            </div>
          </div>

          {/* Primeras 3 cards — siempre visibles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {atraccionesVisibles.map((a, i) => (
              <LocationCard
                key={i}
                nombre={a.nombre}
                distancia={a.distancia}
                tiempo={a.tiempo}
                linkMaps={a.linkMaps}
                imagen={a.imgAtraccionTuristica ?? imagenAtraccionesTuristicas}
              />
            ))}
          </div>

          {/* Cards extra + botón */}
          {atraccionesExtra.length > 0 && (
            <>
              <div
                className="conectividad-expandable mt-5"
                style={{
                  maxHeight: atraccionesExpanded ? "2000px" : "0",
                  opacity:   atraccionesExpanded ? 1 : 0,
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {atraccionesExtra.map((a, i) => (
                    <LocationCard
                      key={i}
                      nombre={a.nombre}
                      distancia={a.distancia}
                      tiempo={a.tiempo}
                      linkMaps={a.linkMaps}
                      imagen={a.imgAtraccionTuristica ?? imagenAtraccionesTuristicas}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <button
                  onClick={() => setAtraccionesExpanded(v => !v)}
                  className="bg-[#A67C52] text-white px-10 py-3 rounded-full font-bold hover:bg-[#2D4636] hover:scale-105 transition-all duration-300 font-manrope"
                >
                  {atraccionesExpanded ? "Ver menos atracciones" : "Explorar más atracciones"}
                </button>
              </div>
            </>
          )}

        </div>
      </section>
    </>
  );
};