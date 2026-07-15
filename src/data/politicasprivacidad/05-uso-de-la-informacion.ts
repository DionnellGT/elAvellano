import { list, p } from "../terminosycondiciones/helpers";
import type { TermsSection } from "../terminosycondiciones/types";

export const usoDeLaInformacion: TermsSection = {
  id: "uso-de-la-informacion",

  title: "5. USO DE LA INFORMACIÓN",

  blocks: [
    p(
      "La información recopilada según lo previamente descrito es utilizada para proveer a los Usuarios de los servicios ofrecidos por medio del Sitio, así como para analizar, mejorar y personalizar dichos servicios e implementar iniciativas de publicidad. Por ejemplo, El Avellano SpA utiliza dicha información para:"
    ),

    list([
      "Procesar solicitudes de información y compra de terrenos.",
      "Emitir contratos, boletas y facturas.",
      "Identificar y contactar a los clientes para coordinar procesos de compra o postventa.",
      "Cumplir obligaciones legales, tributarias y contractuales.",
      "Mejorar la experiencia de navegación en el sitio.",
      "Enviar comunicaciones comerciales y promociones (con opción de darse de baja en cualquier momento).",
      "Determinar la ubicación geográfica de los Usuarios.",
      "Asegurar los sistemas y prevenir fraudes.",
      "Verificar la identidad de los Usuarios y verificar el cumplimiento de la normativa aplicable y de los Términos y Condiciones.",
      "Elaborar y mantener un registro de las operaciones realizadas por los Usuarios en el Sitio.",
      "Brindar soporte a los Usuarios.",
      "Realizar anuncios y contactos publicitarios y promocionales.",
      "Colaborar con la protección de los derechos de propiedad intelectual o industrial, propios o de terceros.",
      "Mantener controles estadísticos y administrativos.",
    ]),

    p(
      "Para efectos del envío de material publicitario, el Usuario de El Avellano SpA en cualquier caso, podrá solicitar la suspensión del envío de publicidades, conforme lo dispone el artículo 28 B de la Ley N° 19.496 sobre Protección de los Derechos de los Consumidores."
    ),
  ],
};