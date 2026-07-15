import type { TermsSection } from "./types";
import { list, p } from "./helpers";

export const informacionPublicada: TermsSection = {
  id: "informacion-publicada",

  title: "3. INFORMACIÓN PUBLICADA",

  blocks: [
    p(
      "Global Terrenos SpA procura que toda la información contenida en este sitio web sea veraz, clara, precisa y se mantenga permanentemente actualizada. No obstante, debido a la naturaleza dinámica de los proyectos inmobiliarios y de los procesos de comercialización, algunos antecedentes podrán modificarse sin previo aviso."
    ),

    p(
      "Las fotografías, renders, videos, imágenes, planos, mapas, recorridos virtuales, esquemas, superficies, medidas, deslindes, ubicación de caminos, accesos, áreas comunes, servicios, infraestructura, urbanización, factibilidades de agua, electricidad u otros suministros, equipamiento, vegetación, vistas, especificaciones técnicas y cualquier otro contenido gráfico o descriptivo publicado en este sitio tienen un carácter meramente ilustrativo y referencial, por lo que pueden diferir de las condiciones definitivas del proyecto o de la parcela al momento de su comercialización o entrega."
    ),

    p(
      "Asimismo, la información relativa a precios, disponibilidad, características, plazos de ejecución, etapas de desarrollo, beneficios comerciales, promociones y demás antecedentes podrá ser modificada por Global Terrenos SpA cuando existan razones técnicas, comerciales, administrativas, legales o de fuerza mayor que así lo justifiquen."
    ),

    p(
      "Las características, condiciones y especificaciones definitivas de cada proyecto serán aquellas contenidas en la documentación oficial y contractual correspondiente, la que prevalecerá sobre cualquier información publicada en este sitio web. Entre otros documentos, se consideran:"
    ),

    list([
      "Escrituras públicas.",
      "Promesas de compraventa.",
      "Títulos de dominio.",
      "Planos aprobados por las autoridades competentes.",
      "Certificados emitidos por organismos públicos o privados competentes.",
      "Resoluciones administrativas aplicables al proyecto.",
      "Reglamentos internos, servidumbres u otros instrumentos legales que correspondan.",
    ]),

    p(
      "La información publicada en este sitio no constituye una oferta vinculante, una promesa de compraventa ni un contrato, y no genera obligación alguna para Global Terrenos SpA mientras no se suscriban los instrumentos legales correspondientes."
    ),

    p(
      "En caso de existir diferencias entre la información publicada en este sitio web y la documentación contractual o legal del proyecto, prevalecerá siempre esta última."
    ),

    p(
      "Global Terrenos SpA se reserva el derecho de actualizar, complementar, corregir, modificar o eliminar, en cualquier momento y sin previo aviso, la información, imágenes, documentos, precios, promociones, disponibilidad o cualquier otro contenido publicado en el sitio web, con el propósito de mantener la información vigente y reflejar adecuadamente el estado de sus proyectos."
    ),
  ],
};