import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useIsMobile } from "../hooks/useIsMobile";

export const GaleriaDeTerrenos = ({
  imagenesVistasProyecto,
}: {
  imagenesVistasProyecto: string[];
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const isMobile = useIsMobile();

  const openModal = (idx: number) => {
    setSelected(idx);
    setOpen(true);
  };

  // img[0] → hero grande (col-span-2 row-span-2)
  // img[1..] → columna derecha (máximo 2 en escritorio, resto en fila extra mobile)
  const heroImg = imagenesVistasProyecto[0];
  const sideImgs = imagenesVistasProyecto.slice(1, 3);   // hasta 2 en col derecha
  const extraImgs = imagenesVistasProyecto.slice(3);      // 4ta imagen en fila extra

  return (
    <section className="bg-[#f8f3ee] py-16 md:py-[120px]">
      <div className="px-6 max-w-[1200px] mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="md:w-1/2">
            <span className="text-[#A67C52] text-xs font-semibold tracking-[0.2em] uppercase font-manrope">
              Galería Exclusiva
            </span>
            <h2 className="font-libre text-3xl md:text-4xl text-[#2D4636] mt-4">
              Vistas que inspiran
            </h2>
          </div>
        </div>

        {/* ── Grid principal ── */}
        {/* Desktop: col-span-2 hero + 2 pequeñas a la derecha, altura fija 700px */}
        {/* Mobile: stack vertical, cada imagen con h-64 */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[700px]">

          {/* Hero: ocupa 2 cols × 2 rows en desktop */}
          {heroImg && (
            <div
              className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl group cursor-zoom-in h-64 md:h-auto"
              onClick={() => openModal(0)}
            >
              <img
                src={heroImg}
                alt="Vista principal del proyecto"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          )}

          {/* Imágenes laterales (desktop: col derecha / mobile: stack) */}
          {sideImgs.map((src, i) => (
            <div
              key={i}
              className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-xl group cursor-zoom-in h-64 md:h-auto"
              onClick={() => openModal(i + 1)}
            >
              <img
                src={src}
                alt={`Vista del proyecto ${i + 2}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* ── Fila extra (4ta imagen si existe) ── */}
        {extraImgs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {extraImgs.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl group cursor-zoom-in h-64"
                onClick={() => openModal(i + 3)}
              >
                <img
                  src={src}
                  alt={`Vista adicional ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        )}

      </div>

      {/* ── Modal lightbox ── */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          style={{
            maxWidth: isMobile ? "95vw" : "80vw",
            width: isMobile ? "95vw" : "80vw",
          }}
          className="p-0 bg-black border-none overflow-hidden"
        >
          <div className="relative w-full aspect-video">
            <img
              src={imagenesVistasProyecto[selected]}
              alt={`Vista ${selected + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X size={16} className="text-white" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};