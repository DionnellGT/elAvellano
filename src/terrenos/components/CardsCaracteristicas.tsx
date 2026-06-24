import { cardCaracteristicas, type Caracteristica } from "@/data/cardCaracteristicas";
import { useParams } from "react-router";
import { Mountain, Route, Zap, Layers, Leaf } from "lucide-react";

function getIcon(titulo: string) {
  const t = titulo.toLowerCase();
  if (t.includes("m2") || t.includes("5.000")) return Mountain;
  if (t.includes("camino")) return Route;
  if (t.includes("energ") || t.includes("factibilidad")) return Zap;
  if (t.includes("topograf")) return Layers;
  if (t.includes("sustent")) return Leaf;
  return Zap;
}

const Card = ({ item }: { item: Caracteristica }) => {
  const Icon = getIcon(item.titulo);
  return (
    <div className="group items-center max-w-[340px] bg-white p-8 rounded-xl border border-stone-200 shadow-sm hover:border-[#A67C52] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="mb-4 text-[#2D4636] group-hover:text-[#A67C52] transition-colors duration-300">
        <Icon size={36} strokeWidth={1.5} />
      </div>
      <h4 className="font-bold text-base mb-2 text-stone-900 font-manrope">
        {item.titulo}
      </h4>
      {item.descripcion && (
        <p className="text-stone-500 text-center text-sm leading-relaxed font-manrope">
          {item.descripcion}
        </p>
      )}
    </div>
  );
};

export const CardsCaracteristicas = () => {
  const { idSlug } = useParams();

  const items =
    idSlug === "paisajes-del-rio"
      ? cardCaracteristicas.filter(
          (c) => c.titulo.toLowerCase() !== "factibilidad de luz"
        )
      : cardCaracteristicas;

  const hasLastPair = items.length === 6;

  return (
    <section className="py-16 md:py-24 px-6 max-w-[1200px] mx-auto">

      {/* ── Header ── */}
      <div className="text-center mb-14">
        <span className="text-[#A67C52] text-xs font-semibold tracking-[0.2em] uppercase font-manrope">
          Excelencia Rural
        </span>
        <h2 className="font-libre text-3xl md:text-4xl text-[#2D4636] mt-4 mb-5">
          Tu refugio en el sur de Chile
        </h2>
        <p className="max-w-2xl mx-auto text-stone-500 text-base leading-relaxed font-manrope">
          Ofrecemos terrenos con plusvalía asegurada en entornos naturales privilegiados.
          Una inversión segura para tu futuro y el de tu familia.
        </p>
      </div>

      {/* ════ DESKTOP (md+) ════ */}

      {/* Fila 1: items 0-2 */}
      <div className="hidden md:grid md:grid-cols-3 gap-5">
        {items.slice(0, 3).map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>

      {/* Fila 2: 6 items → 3-col completo | 5 items → 2 cards centradas */}
      {hasLastPair ? (
        <div className="hidden md:grid md:grid-cols-3 gap-5 mt-5">
          {items.slice(3, 6).map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      ) : (
        <div className="hidden md:flex justify-center gap-5 mt-5">
          {items.slice(3, 5).map((item, i) => (
            <div key={i} className="w-[calc((100%-2.5rem)/3)]">
              <Card item={item} />
            </div>
          ))}
        </div>
      )}

      {/* ════ MOBILE (< md) ════ */}

      {/* Fila 1: items 0-1 */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {items.slice(0, 2).map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>

      {/* Fila 2: items 2-3 */}
      <div className="grid grid-cols-2 gap-4 mt-4 md:hidden">
        {items.slice(2, 4).map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>

      {/* Fila 3: 6 items → 2 cards | 5 items → 1 centrada */}
      {hasLastPair ? (
        <div className="grid grid-cols-2 gap-4 mt-4 md:hidden">
          {items.slice(4, 6).map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center mt-4 md:hidden">
          {items[4] && (
            <div className="w-[calc(50%-0.5rem)]">
              <Card item={items[4]} />
            </div>
          )}
        </div>
      )}

    </section>
  );
};