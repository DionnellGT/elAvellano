import type { TermsSection } from "./types";
import { list, p } from "./helpers";

export const reservas: TermsSection = {
  id: "reservas",

  title: "8. RESERVAS",

  blocks: [
    p(
      "Cuando Global Terrenos habilite mecanismos de reserva de parcelas o unidades, estos tendrán por única finalidad otorgar al interesado una preferencia temporal para continuar el proceso de evaluación y contratación, impidiendo provisionalmente que la unidad reservada sea ofrecida o comercializada a terceros durante el período de vigencia de la reserva."
    ),

    p(
      "La reserva no constituye una compraventa, una promesa de compraventa ni un contrato definitivo, ni confiere al interesado derecho real alguno sobre la parcela o unidad reservada. Su único efecto es otorgar una preferencia temporal para la celebración de los instrumentos contractuales correspondientes, siempre que se cumplan las condiciones comerciales, legales y administrativas exigidas por Global Terrenos."
    ),

    p(
      "Las condiciones particulares de cada reserva, incluyendo su plazo de vigencia, el monto que deba enterarse, la forma de pago, los requisitos para su mantención y las condiciones de devolución, cuando procedan, serán informadas al interesado con anterioridad al pago o aceptación de la reserva."
    ),

    p(
      "Durante la vigencia de la reserva, el interesado deberá cumplir oportunamente con todas las gestiones necesarias para la celebración de la operación, incluyendo la entrega de antecedentes, la suscripción de los documentos requeridos y el cumplimiento de las condiciones comerciales establecidas por la empresa."
    ),

    p(
      "Global Terrenos podrá dejar sin efecto la reserva, sin responsabilidad alguna, cuando concurra cualquiera de las siguientes circunstancias:"
    ),

    list([
      "No se suscriba, dentro del plazo establecido, la promesa de compraventa o cualquier otro documento requerido para continuar la operación.",
      "El interesado no cumpla las condiciones comerciales, financieras o documentales exigidas para la compra.",
      "Exista imposibilidad legal, administrativa o técnica para celebrar la operación o transferir la unidad reservada.",
      "Se detecten errores materiales, tipográficos, informáticos o manifiestos en la publicación, cotización, precio o características de la unidad.",
      "La unidad deje de encontrarse disponible por causas no imputables a Global Terrenos, incluyendo resoluciones administrativas, judiciales o de autoridad competente.",
      "El interesado incumpla cualquiera de las condiciones establecidas para la reserva.",
    ]),

    p(
      "La extinción o cancelación de la reserva no dará derecho a indemnización alguna, sin perjuicio de la devolución de los montos que corresponda conforme a las condiciones particulares informadas para la respectiva reserva."
    ),

    p(
      "En todo caso, la adquisición de la parcela o unidad solo se entenderá perfeccionada mediante la suscripción de la promesa de compraventa o del contrato definitivo que corresponda, según el estado de la operación, prevaleciendo dicho instrumento sobre cualquier antecedente, reserva o comunicación previa."
    ),
  ],
};