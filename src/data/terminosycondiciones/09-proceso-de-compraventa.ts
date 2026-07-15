import type { TermsSection } from "./types";
import { list, p } from "./helpers";

export const procesoDeCompraventa: TermsSection = {
  id: "proceso-de-compraventa",

  title: "9. PROCESO DE COMPRAVENTA",

  blocks: [
    p(
      "La adquisición de una parcela o unidad ofrecida por Global Terrenos se perfeccionará únicamente mediante el cumplimiento de todas las etapas legales y contractuales que correspondan a la operación y la suscripción de los instrumentos respectivos por las partes."
    ),

    p(
      "Las negociaciones previas, cotizaciones, reservas, pagos parciales, comunicaciones comerciales o cualquier otra actuación preparatoria no constituirán, por sí solas, una compraventa ni generarán obligación de celebrar el contrato definitivo, salvo que exista un acuerdo formal suscrito por ambas partes."
    ),

    p(
      "Toda operación de compraventa estará sujeta, entre otros aspectos, al cumplimiento de las siguientes condiciones:"
    ),

    list([
      "Revisión y aprobación de los antecedentes legales, comerciales y financieros del comprador, cuando corresponda.",
      "Verificación de la disponibilidad definitiva de la parcela o unidad.",
      "Pago íntegro del precio o cumplimiento de las condiciones de financiamiento previamente acordadas.",
      "Suscripción de la promesa de compraventa, cuando la operación así lo requiera.",
      "Cumplimiento de todas las obligaciones y plazos establecidos en la promesa de compraventa o en los demás instrumentos contractuales.",
      "Otorgamiento y firma de la escritura pública de compraventa.",
      "Pago de los impuestos, derechos notariales, gastos de inscripción y demás costos que correspondan conforme a la ley o al contrato.",
      "Inscripción de la escritura de compraventa en el Conservador de Bienes Raíces competente, momento a partir del cual el comprador adquirirá el dominio del inmueble, de conformidad con la legislación chilena.",
    ]),

    p(
      "Global Terrenos podrá abstenerse de celebrar la compraventa o suspender su tramitación cuando no se cumplan las condiciones legales, comerciales, financieras o contractuales exigidas para la operación, o cuando exista un impedimento jurídico o material que imposibilite su perfeccionamiento."
    ),

    p(
      "En todo caso, los derechos y obligaciones de las partes serán exclusivamente aquellos que emanen de la promesa de compraventa, de la escritura pública y de los demás instrumentos contractuales suscritos, los que prevalecerán sobre cualquier antecedente, cotización, publicidad o comunicación previa."
    ),
  ],
};