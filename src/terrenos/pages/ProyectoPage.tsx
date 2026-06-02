import { MapPin, Globe2 } from "lucide-react";
import { useParams } from "react-router";
import { Contactenos } from "../components/Contactenos";
import { NuestrasCaracteristicas } from "../components/NuestrasCaracteristicas";
import { useProyectoPorSlug } from "../hooks/useProyectos";
import { Conectividad } from "../components/Conectividad";
import { GaleriaDeTerrenos } from "../components/GaleriaDeTerrenos";
import { useIsMobile } from "../hooks/useIsMobile";
import { useEffect } from "react";

export interface Caracteristica {
  icono: string;
  titulo: string;
}

export const caracteristicas: Caracteristica[] = [
  {
    icono: "/choose1-icon1.webp",
    titulo: "Terrenos desde los 5.000 m2",
  },
  {
    icono: "/choose1-icon3.webp",
    titulo: "Aprovechando los caminos existentes",
  },
  {
    icono: "/choose1-icon4.webp",
    titulo: "Apto para Energías Renovables. Cosecha de aguas lluvias",
  },
  {
    icono: "/choose1-icon5.webp",
    titulo: "Topografía Plana y Semi Plana. Hermosas praderas",
  },
  {
    icono: "/choose1-icon6.webp",
    titulo: "Terreno con compromiso de sustentabilidad",
  },
];


export const ProyectoPage = () => {
  const { idSlug } = useParams();
  const proyecto = useProyectoPorSlug(idSlug);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (proyecto) {
      document.title = `${proyecto.name} | El Avellano`;
    } else {
      document.title = "Proyecto no encontrado | El Avellano";
    }

    return () => {
      document.title = "El Avellano"; // restaura al salir de la página
    };
  }, [proyecto]);

  if (!proyecto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100 px-6">
        <h1 className="text-3xl font-bold text-stone-800">Proyecto no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="bg-white ">
      <section
        className="relative overflow-hidden bg-cover bg-center py-18 vanishing-gradient"
        //style={{ backgroundImage: isMobile ? `url(${proyecto.imagenBannerPrincipalMobile})` : `url(${proyecto.imagenBannerPrincipal})` }}
      >
        <div className="relative z-10 mx-auto text-white overflow-hidden max-w-full shadow-2xl">
          <img
              src={isMobile ? proyecto.imagenBannerPrincipalMobile : proyecto.imagenBannerPrincipal}
              alt={`${proyecto.name} banner secundario`}
              className="w-full h-11/12 md:h-full object-cover"
            />
        </div>
      </section>

      {/* Características */}
      <NuestrasCaracteristicas images={proyecto.imagenesDeCaracteristicas} />

      {/* Cards de características */}
      <div className="py-12 bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
                {caracteristicas.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center gap-4 rounded-2xl px-5 py-8 group transition-all duration-300"
                    style={{
                      background: "linear-gradient(145deg, #1c1c1c, #0a0a0a)",
                      boxShadow: "6px 6px 14px rgba(0,0,0,0.6), -3px -3px 8px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.boxShadow = "8px 8px 20px rgba(0,0,0,0.7), -4px -4px 10px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(160,112,48,0.3)";
                      el.style.background = "linear-gradient(145deg, #222, #111)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.boxShadow = "6px 6px 14px rgba(0,0,0,0.6), -3px -3px 8px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)";
                      el.style.background = "linear-gradient(145deg, #1c1c1c, #0a0a0a)";
                    }}
                  >
                    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 [perspective:400px]">
                      <img
                        src={item.icono}
                        alt={item.titulo}
                        className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(360deg)] group-hover:scale-115"
                        style={{
                          filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(0deg) brightness(0.65)",
                        }}
                      />
                    </div>
                    <p className="text-white text-sm md:text-md font-semibold leading-snug">
                      {item.titulo}
                    </p>
                  </div>
                ))}
            </div>
        </div>
      </div>

      {/* Galería de terrenos y entorno */}
      <GaleriaDeTerrenos imagenesVistasProyecto={proyecto.imagenesVistasProyecto} />

      <section id="mapa" className="relative py-20 bg-stone-950 text-white">
        <div className="absolute inset-0 opacity-70 bg-black" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-[#e5c07b] text-[12px] font-semibold tracking-[0.2em] uppercase mb-2">
                Ubicación
              </p>
              <h2 className="font-bold text-4xl md:text-5xl text-white mb-4">
                Mapa y acceso directo
              </h2>
              <p className="text-stone-300 text-base leading-relaxed mb-8">
                Revisa el mapa del proyecto y accede directamente a Google Maps para ver la ruta de llegada y las distancias reales desde los principales puntos de interés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={proyecto.linkMapa}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#a07030] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-black/20 hover:bg-[#8a5f28] transition-colors duration-200"
                >
                  Ver en Google Maps <MapPin className="ml-2" />
                </a>
                <a
                  href={proyecto.vistaProyecto360}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/20 transition-colors duration-200"
                >
                  Tour virtual 360 <Globe2 className="ml-2" />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <iframe
                src={proyecto.vistaProyecto360}
                title={`${proyecto.name} ubicación`}
                className="w-full h-[420px] border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-10">
        <div className="max-w-full">
          <div className="overflow-hidden shadow-2xl">
            <img
              src={proyecto.imagenBaner2}
              alt={`${proyecto.name} banner secundario`}
              className="w-full h-11/12 md:h-full object-cover"
            />
          </div>
        </div>
      </section>


      <Conectividad 
        centrosUrbanosCercanos={proyecto.centrosUrbanosCercanos}
        atraccionesTuristicas={proyecto.atraccionesTuristicas}
        imagenCentrosUrbanos={proyecto.imagenCentrosUrbanos}
        imagenAtraccionesTuristicas={proyecto.imagenAtraccionesTuristicas}
      
      />

      
      <Contactenos />
    </div>
  );
};