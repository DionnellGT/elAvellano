import { MapPin, Sparkles, Clock, Navigation } from "lucide-react"

interface ConectividadProps {
  centrosUrbanosCercanos: {
    nombre: string;
    distancia: string;
    tiempo: string;
  }[];
  atraccionesTuristicas: {
    nombre: string;
    tiempo: string;
    distancia: string;
  }[];
  imagenCentrosUrbanos: string;
  imagenAtraccionesTuristicas: string;
}

export const Conectividad = ({
  centrosUrbanosCercanos,
  atraccionesTuristicas,
  imagenCentrosUrbanos,
  imagenAtraccionesTuristicas,
}: ConectividadProps) => {
  return (
    <section className="bg-white py-24 space-y-32">

      {/* ── Centros Urbanos: imagen izquierda, info derecha ── */}
      <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">

        {/* Imagen */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src={imagenCentrosUrbanos}
              alt="Centros urbanos cercanos"
              className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Badge decorativo */}
          <div className="absolute -bottom-5 -right-5 bg-[#a07030] text-white rounded-[1.5rem] px-5 py-3 shadow-xl text-sm font-semibold tracking-wide">
            {centrosUrbanosCercanos.length} destinos cercanos
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-2 text-[#a07030] uppercase tracking-[0.2em] text-[11px] font-semibold mb-3">
            <Sparkles size={16} />
            Conectividad
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Centros urbanos <span className="text-[#a07030]">cercanos</span>
          </h2>
          <p className="text-stone-500 text-base mb-8 leading-relaxed">
            Accede fácilmente a los principales servicios y ciudades desde el proyecto.
          </p>
          <div className="space-y-3">
            {centrosUrbanosCercanos.map((centro, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-[#f7efe0] rounded-2xl px-5 py-4 hover:bg-[#f0e4cc] transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#a07030]/15 flex items-center justify-center flex-shrink-0">
                    <Navigation size={14} className="text-[#a07030]" />
                  </div>
                  <span className="font-semibold text-stone-800 text-sm">{centro.nombre}</span>
                </div>
                <div className="flex items-center gap-4 text-stone-500 text-xs flex-shrink-0 ml-4">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-[#a07030]" />
                    {centro.distancia}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-[#a07030]" />
                    {centro.tiempo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Atracciones Turísticas: info izquierda, imagen derecha ── */}
      <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">

        {/* Info */}
        <div>
          <div className="flex items-center gap-2 text-[#a07030] uppercase tracking-[0.2em] text-[11px] font-semibold mb-3">
            <MapPin size={16} />
            Turismo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Atracciones <span className="text-[#a07030]">turísticas</span>
          </h2>
          <p className="text-stone-500 text-base mb-8 leading-relaxed">
            Vive experiencias únicas a pocos minutos del proyecto, rodeado de naturaleza y cultura local.
          </p>
          <div className="space-y-3">
            {atraccionesTuristicas.map((atraccion, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-[#f7efe0] rounded-2xl px-5 py-4 hover:bg-[#f0e4cc] transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={14} className="text-[#a07030]" />
                  </div>
                  <span className="font-semibold text-stone-800 text-sm">{atraccion.nombre}</span>
                </div>
                <div className="flex items-center gap-4 text-stone-500 text-xs flex-shrink-0 ml-4">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-[#a07030]" />
                    {atraccion.distancia}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-[#a07030]" />
                    {atraccion.tiempo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src={imagenAtraccionesTuristicas}
              alt="Atracciones turísticas"
              className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Badge decorativo */}
          <div className="absolute -bottom-5 -left-5 bg-stone-900 text-white rounded-[1.5rem] px-5 py-3 shadow-xl text-sm font-semibold tracking-wide">
            {atraccionesTuristicas.length} atracciones
          </div>
        </div>
      </div>

    </section>
  );
};