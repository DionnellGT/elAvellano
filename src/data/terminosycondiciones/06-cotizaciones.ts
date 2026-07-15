import type { TermsSection } from "./types";
import { list, p } from "./helpers";

export const cotizaciones: TermsSection = {
  id: "cotizaciones",

  title: "6. COTIZACIONES",

  blocks: [
    p(
      "Las cotizaciones emitidas por Global Terrenos tendrán la vigencia expresamente indicada en el documento respectivo. Durante dicho período, las condiciones comerciales contenidas en la cotización se mantendrán vigentes, salvo que se produzcan circunstancias extraordinarias o de fuerza mayor que imposibiliten su cumplimiento."
    ),

    p(
      "Vencido el plazo de vigencia de la cotización, esta caducará de pleno derecho, sin necesidad de comunicación previa, quedando Global Terrenos facultada para revisar, modificar o actualizar las condiciones comerciales inicialmente informadas, incluyendo, entre otras:"
    ),

    list([
      "El precio de venta de la unidad.",
      "Las promociones, descuentos o campañas comerciales vigentes.",
      "Las condiciones y alternativas de financiamiento.",
      "La disponibilidad de las unidades ofrecidas.",
      "Los bonos, beneficios o incentivos comerciales.",
      "Los plazos de entrega o cualquier otra condición comercial asociada a la operación.",
    ]),

    p(
      "La emisión de una cotización no constituye una oferta irrevocable ni genera obligación alguna para Global Terrenos de mantener las condiciones comerciales una vez expirado su período de vigencia. En consecuencia, cualquier negociación posterior quedará sujeta a la disponibilidad de la unidad y a las condiciones comerciales vigentes al momento de la suscripción del respectivo instrumento contractual."
    ),

    p(
      "En todo caso, las únicas condiciones definitivas y vinculantes serán aquellas expresamente establecidas en la promesa de compraventa o en el contrato que las partes suscriban."
    ),
  ],
};