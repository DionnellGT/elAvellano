import { list, p } from "../terminosycondiciones/helpers";
import type { TermsSection } from "../terminosycondiciones/types";

export const seguridad: TermsSection = {
  id: "seguridad",

  title: "13. SEGURIDAD",

  blocks: [
    p(
      "El Sitio cuenta con medidas logísticas, físicas y de gestión razonables para proteger la información recolectada a través de éste contra pérdidas, robos y accesos no autorizados, uso y modificación. Sin embargo, ningún sistema es completamente a prueba de fallas o ataques, no obstante nuestros esfuerzos por resguardar la seguridad de la información personal y/o confidencial recopilada en el Sitio. En caso de que se vulneren los sistemas de seguridad del Sitio, El Avellano SpA informará adecuadamente a los Usuarios y tomará todas las medidas necesarias para resguardar sus Datos Personales."
    ),

    p("El Sitio cuenta con las siguientes medidas de seguridad:"),

    list([
      "Certificado SSL en nuestro sitio web.",
      "Servidores seguros en proveedores certificados.",
      "Acceso restringido a la información personal.",
    ]),
  ],
};