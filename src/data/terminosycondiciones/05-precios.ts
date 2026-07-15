import type { TermsSection } from "./types";
import { list, p } from "./helpers";

export const precios: TermsSection = {
  id: "precios",

  title: "5. PRECIOS",

  blocks: [
    p(
      "Todos los precios publicados, informados o cotizados, ya sea a través del sitio web, redes sociales, material publicitario, correo electrónico, plataformas digitales, ejecutivos de venta o cualquier otro medio de difusión, tienen un carácter meramente referencial e informativo. En consecuencia, dichos precios no constituyen una oferta irrevocable ni generan obligación alguna para la empresa mientras no exista un contrato de promesa de compraventa o el instrumento contractual correspondiente, debidamente suscrito por ambas partes."
    ),

    p(
      "La empresa se reserva el derecho de modificar, actualizar o reajustar los precios de venta, promociones, descuentos y demás condiciones comerciales en cualquier momento y sin necesidad de aviso previo, especialmente cuando dichas modificaciones obedezcan a circunstancias tales como, entre otras:"
    ),

    list([
      "Campañas comerciales o promociones de carácter temporal.",
      "Actualizaciones del proyecto, de sus especificaciones técnicas, equipamiento o terminaciones.",
      "Disponibilidad o agotamiento de las unidades ofrecidas.",
      "Variaciones en los costos de construcción, materiales, mano de obra, financiamiento o desarrollo del proyecto.",
      "Cambios en la legislación o normativa vigente, incluyendo modificaciones tributarias o regulatorias.",
      "Variaciones en las condiciones económicas o de mercado que incidan en el valor de las unidades.",
      "Corrección de errores materiales, tipográficos, informáticos o de publicación.",
      "Cualquier otra circunstancia objetiva que justifique la actualización de los valores informados.",
    ]),

    p(
      "La publicación de un precio, la emisión de una cotización, la reserva de una unidad o cualquier negociación preliminar no implicarán, por sí solas, la obligación de mantener dicho precio ni de celebrar el contrato respectivo, salvo que las partes hayan acordado expresamente lo contrario por escrito."
    ),

    p(
      "El único precio definitivo, válido y exigible será aquel que se establezca expresamente en la respectiva promesa de compraventa o en el contrato definitivo suscrito por las partes, el cual prevalecerá sobre cualquier precio, cotización o información comercial previamente publicada o comunicada."
    ),

    p(
      "Asimismo, las promociones, descuentos, bonos o beneficios comerciales estarán sujetos a las condiciones particulares de cada campaña y tendrán la vigencia que en ellas se indique, pudiendo ser modificados o retirados por la empresa antes de la celebración del contrato respectivo."
    ),
  ],
};