import { MapPin, Globe2 } from "lucide-react";
import { useParams } from "react-router";
import { Conectividad } from "../components/Conectividad";
import { GaleriaDeTerrenos } from "../components/GaleriaDeTerrenos";
import { useIsMobile } from "../hooks/useIsMobile";
import { useEffect } from "react";
import { CardsCaracteristicas } from "../components/CardsCaracteristicas";
import { ChatBotWsp } from "../components/ChatBot";
import { metaEvents } from "@/lib/metaPixel";
import { useProject } from "../hooks/useProject";
import { LoadingSpinner } from "../components/LoadingSpinner";


export const ProyectoPage = () => {
  const { idSlug } = useParams();
  const { proyecto, loading, error } = useProject(idSlug);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (proyecto) {
      document.title = `${proyecto.name} | El Avellano`;

      metaEvents.viewProject({
      id: proyecto.id,
      nombre: proyecto.name,
    });
    
    } else {
      document.title = "Proyecto no encontrado | El Avellano";
    }

    return () => {
      document.title = "El Avellano"; 
    };
  }, [proyecto]);

  if (loading) {
    return (
      <LoadingSpinner/>
    );
  }

  if (error || !proyecto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100 px-6">
        <h1 className="text-3xl font-bold text-stone-800">Proyecto no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="bg-white ">
      <section className="relative w-full overflow-hidden">
        <div className="max-w-[1440px] mx-auto md:mt-14">
          <img
            src={isMobile ? proyecto.imagenBannerPrincipalMobile : proyecto.imagenBannerPrincipal}
            alt={`${proyecto.name} banner principal`}
            className="w-full h-auto min-h-[200px] object-cover"
          />
        </div>
      </section>
      
      {/* Cards de características */}
      <CardsCaracteristicas />

      {/* Galería de terrenos y entorno */}
      <GaleriaDeTerrenos imagenesVistasProyecto={proyecto.imagenesVistasProyecto} />

      {/* Mapa — Ubicación Estratégica */}
      <section id="mapa" className="relative bg-[#1A241B] text-white py-24 md:py-32 overflow-hidden">
        <div className="relative px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
 
          {/* Columna izquierda: texto + botones */}
          <div>
            <span className="text-[#ffddb7] text-xs font-semibold tracking-[0.2em] uppercase font-manrope">
              Ubicación Estratégica
            </span>
            <h2 className="font-libre text-3xl md:text-4xl text-white mt-4 mb-8">
              Conectividad sin renunciar a la paz
            </h2>
            <p className="text-[#e6e2dd] text-lg leading-relaxed mb-10 font-manrope">
              Ubicados en el corazón de la X Región, nuestros proyectos ofrecen el
              balance perfecto entre la vida silvestre y el acceso a servicios urbanos.
              Revisa nuestras rutas de llegada y coordina tu visita hoy mismo.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={proyecto.linkMapa}
                target="_blank"
                rel="noreferrer"
                className="bg-[#A67C52] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-[#8a5f28] hover:scale-105 transition-all duration-300 font-manrope"
              >
                <MapPin size={20} /> Ver en Google Maps
              </a>
              <a
                href={proyecto.vistaProyecto360}
                target="_blank"
                rel="noreferrer"
                className="border border-white/30 px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-white/10 hover:border-white/60 transition-all duration-300 font-manrope"
              >
                <Globe2 size={20} /> Tour Virtual 360
              </a>
            </div>
          </div>
 
          {/* Columna derecha: iframe del tour 360 */}
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border-4 border-white/10 group">
            <iframe
              src={proyecto.vistaProyecto360}
              title={`${proyecto.name} tour virtual`}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
 
        </div>
      </section>
 
      {/* Banner secundario */}
      <section className="pb-10">
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

      {/* Chatbot */}
      <ChatBotWsp />

    </div>
  );
};