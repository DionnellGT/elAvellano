import type { TermsSection } from "./types";
import { list, p } from "./helpers";

export const promocionesDescuentosYBeneficiosComerciales: TermsSection = {
  id: "promociones-descuentos-y-beneficios-comerciales",

  title: "7. PROMOCIONES, DESCUENTOS Y BENEFICIOS COMERCIALES",

  blocks: [
    p(
      "Las promociones, descuentos, campañas comerciales, bonos y demás beneficios ofrecidos por Global Terrenos tendrán exclusivamente la vigencia, condiciones y alcance expresamente indicados en la respectiva publicación, cotización, campaña publicitaria o comunicación oficial."
    ),

    p(
      "Salvo que se establezca expresamente lo contrario, las promociones y beneficios comerciales:"
    ),

    list([
      "No serán acumulables entre sí ni con otras promociones, descuentos o beneficios vigentes.",
      "Estarán sujetos a la disponibilidad de las unidades ofrecidas y al stock disponible, cuando corresponda.",
      "Podrán exigir el cumplimiento de requisitos específicos, tales como plazos de reserva, forma de pago, modalidad de financiamiento u otras condiciones particulares establecidas para cada campaña.",
      "Serán personales e intransferibles, no pudiendo ser cedidos, canjeados por dinero ni sustituidos por otros beneficios, salvo autorización expresa de Global Terrenos.",
    ]),

    p(
      "La sola publicación de una promoción o beneficio no garantiza su aplicación a una determinada operación, la que estará siempre sujeta al cumplimiento de las condiciones establecidas para la respectiva campaña y a la celebración del correspondiente instrumento contractual dentro de su período de vigencia."
    ),

    p(
      "Una vez expirado el plazo de vigencia de una promoción, descuento o beneficio comercial, Global Terrenos podrá modificarlo, reemplazarlo o ponerle término, sin que ello genere derecho a indemnización o compensación alguna para los interesados. Del mismo modo, la empresa podrá corregir errores materiales o de publicación que afecten las condiciones de una campaña, informando oportunamente las condiciones aplicables."
    ),

    p(
      "En todo caso, las promociones, descuentos y beneficios que resulten aplicables a una operación serán únicamente aquellos que queden expresamente incorporados en la promesa de compraventa o en el contrato que las partes suscriban, prevaleciendo dicho instrumento sobre cualquier publicidad, cotización o comunicación previa."
    ),
  ],
};