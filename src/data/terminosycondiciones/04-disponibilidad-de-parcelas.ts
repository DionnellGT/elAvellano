import type { TermsSection } from "./types";
import { list, p } from "./helpers";

export const disponibilidadDeParcelas: TermsSection = {
  id: "disponibilidad-de-parcelas",

  title: "4. DISPONIBILIDAD DE PARCELAS",

  blocks: [
    p(
      "La disponibilidad de las parcelas publicadas en el sitio web está sujeta a cambios permanentes debido a reservas, ventas, desistimientos, actualizaciones de inventario, modificaciones comerciales u otras circunstancias propias del proceso de comercialización."
    ),

    p(
      "En consecuencia, la publicación de una parcela en el sitio web tiene un carácter exclusivamente informativo y no constituye una oferta irrevocable, una promesa de compraventa ni garantiza su disponibilidad al momento de la consulta o de una eventual intención de compra."
    ),

    p(
      "Global Terrenos SpA realizará sus mejores esfuerzos para mantener actualizada la información sobre disponibilidad; sin embargo, ésta podrá variar sin previo aviso, especialmente cuando existan procesos de negociación, reservas pendientes, operaciones simultáneas o cualquier otra circunstancia que afecte el stock disponible."
    ),

    p(
      "Antes de efectuar cualquier pago, reserva o suscribir un documento relacionado con la adquisición de una parcela, el cliente deberá confirmar con un ejecutivo comercial, entre otros aspectos:"
    ),

    list([
      "La disponibilidad efectiva de la parcela.",
      "El precio vigente y las condiciones comerciales aplicables.",
      "La individualización del lote y su ubicación dentro del proyecto.",
      "El estado legal de la propiedad.",
      "La existencia de rol propio o el estado de su tramitación, cuando corresponda.",
      "Las factibilidades de servicios básicos, accesos e infraestructura disponibles para el proyecto.",
      "Las modalidades de pago, plazos y requisitos para la compraventa.",
      "Cualquier otra condición particular que resulte aplicable al proyecto o a la parcela de interés.",
    ]),

    p(
      "La disponibilidad definitiva de una parcela sólo se entenderá confirmada una vez que las partes hayan suscrito los instrumentos contractuales correspondientes y se hayan cumplido las condiciones comerciales establecidas por Global Terrenos SpA."
    ),
  ],
};