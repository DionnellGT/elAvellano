import type { TermsSection } from "./types";
import { p } from "./helpers";

export const identificacion: TermsSection = {
  id: "identificacion",

  title: "1. IDENTIFICACIÓN DEL TITULAR DEL SITIO WEB",

  blocks: [
    p(
      "El presente sitio web es operado por El Avellano SpA, sociedad constituida conforme a las leyes de la República de Chile (en adelante,  'El Avellano SpA'  o 'la Empresa'), cuyo objeto es la comercialización y gestión de proyectos inmobiliarios, parcelas, lotes y servicios relacionados."
    ),

    p(
      "Estos Términos y Condiciones regulan el acceso, navegación y utilización del sitio web, así como las consultas, cotizaciones, reservas y demás servicios ofrecidos por la Empresa."
    ),

    p(
      "Al navegar por este sitio web, el usuario declara haber leído, comprendido y aceptado íntegramente estos Términos y Condiciones, así como la Política de Privacidad vigente."
    ),
  ],
};