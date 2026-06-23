import { Scale, Banknote, HeadphonesIcon } from "lucide-react";

const items = [
  {
    icon: <Scale size={22} />,
    titulo: "Asesoría Legal Completa",
    descripcion: "Títulos revisados y regularizados ante el CBR.",
  },
  {
    icon: <Banknote size={22} />,
    titulo: "Alta Liquidez",
    descripcion: "Ubicaciones estratégicas que facilitan la reventa.",
  },
  {
    icon: <HeadphonesIcon size={22} />,
    titulo: "Acompañamiento Personalizado",
    descripcion: "Expertos locales a tu disposición en cada etapa.",
  },
];

export const Seguridad = () => {
  return (
    <section className="py-20 bg-[#F2EDE8] px-5 md:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* ── Columna izquierda: texto + lista ── */}
          <div>
            <h2 className="font-libre font-normal text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] text-stone-900 mb-6">
              Seguridad en tu Inversión
            </h2>
            <p className="font-manrope text-[16px] leading-[26px] text-stone-500 mb-10 max-w-lg">
              Invertir en tierra es el activo más sólido. En El Avellano
              garantizamos transparencia legal y plusvalía real en cada uno de
              nuestros proyectos.
            </p>

            <div className="space-y-6">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 group cursor-default"
                >
                  {/* Ícono */}
                  <div className="flex-shrink-0 bg-[#A67C52]/10 p-3 rounded-lg text-[#A67C52] transition-colors duration-300 group-hover:bg-[#A67C52] group-hover:text-white">
                    {item.icon}
                  </div>

                  {/* Texto */}
                  <div>
                    <h4 className="font-manrope font-bold text-[13px] leading-[20px] tracking-[0.08em] uppercase text-stone-900 mb-1 transition-colors duration-300 group-hover:text-[#A67C52]">
                      {item.titulo}
                    </h4>
                    <p className="font-manrope text-[15px] leading-[24px] text-stone-500">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Columna derecha: imagen + tarjeta flotante ── */}
          <div className="relative group">
            {/* Imagen principal */}
            <div className="rounded-2xl overflow-hidden border border-[#E5E7E6] transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src="/seguridad.png"
                alt="Seguridad en tu inversión"
                className="w-full h-[420px] md:h-[500px] object-cover"
              />
            </div>

            {/* Tarjeta flotante — visible solo en lg+ */}
            <div className="absolute -bottom-10 -left-10 hidden lg:block bg-[#2D4636] p-8 rounded-xl text-[#F9F6F1] max-w-xs shadow-xl transition-all duration-500 group-hover:-translate-y-2">
              <p className="font-libre text-[28px] leading-[36px] mb-2">
                +7 Años
              </p>
              <p className="font-manrope text-[15px] leading-[24px] text-[#F9F6F1]/80">
                de trayectoria transformando sueños en patrimonio sólido.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};