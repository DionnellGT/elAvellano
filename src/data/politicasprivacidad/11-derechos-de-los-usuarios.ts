import { list, p } from "../terminosycondiciones/helpers";
import type { TermsSection } from "../terminosycondiciones/types";

export const derechosDeLosUsuarios: TermsSection = {
  id: "derechos-de-los-usuarios",

  title: "11. DERECHOS DE LOS USUARIOS",

  blocks: [
    p(
      "Los Usuarios pueden revocar en cualquier momento la autorización que entregan para tratar sus Datos Personales, en cuyo caso es posible que no puedan utilizar alguno o todos los servicios que ofrece El Avellano SpA."
    ),

    p(
      "Asimismo, todo titular de datos personales podrá ejercer los derechos contemplados en el artículo 12 título II de la Ley 19.628."
    ),

    p(
      "Para ello, deberán contactar a El Avellano SpA a través de la casilla contacto@elavellano.cl."
    ),

    p(
      "Además, los Usuarios tienen el derecho a solicitar información sobre sus Datos Personales que El Avellano SpA haya recolectado y ejercer los derechos de acceso, rectificación, cancelación, oposición y todos los derechos que confiere la Ley N° 21.719 sobre Protección de datos personales. Para ejercer estos derechos, los Usuarios podrán dirigirse a alguno de los siguientes canales de comunicación:"
    ),

    list([
      "Enviando un correo electrónico a: contacto@elavellano.cl.",
      "Llamando al teléfono: +56949437974.",
    ]),

    p(
      "Del mismo modo, el Usuario siempre puede solicitar la suspensión de las comunicaciones promocionales y publicitarias, de conformidad a lo dispuesto en el artículo 28 B de la Ley N° 19.496 sobre Protección de los Derechos de los Consumidores."
    ),
  ],
};