import { list, p, subtitle } from "../terminosycondiciones/helpers";
import type { TermsSection } from "../terminosycondiciones/types";

export const recopilacionDeLaInformacion: TermsSection = {
  id: "recopilacion-de-la-informacion",

  title: "4. RECOPILACIÓN DE LA INFORMACIÓN",

  blocks: [
    p(
      "La información recabada en el Sitio es obtenida, en algunos casos, a través de los mismos Usuarios, quienes hacen entrega de ella al proveer la información necesaria para acceder a los productos que ofrece El Avellano SpA. Adicionalmente, la información es recolectada de forma automática por medio de la navegación del Usuario en el Sitio."
    ),

    p(
      "El Avellano SpA adoptará las medidas técnicas y organizativas destinadas a resguardar los datos personales, contra accesos no autorizados, pérdida, filtración, alteración, daño o destrucción."
    ),

    p(
      "Los Usuarios no tienen la obligación de proporcionar la información personal que se especifica a continuación. Sin embargo, la entrega de esta información es un requisito para acceder a los servicios y productos ofrecidos en el Sitio. Por ello, si el Usuario decide no proporcionar la información, no le será posible contratar a través del Sitio."
    ),

    p(
      "La información que es recabada por El Avellano SpA a través del Sitio es la siguiente:"
    ),

    subtitle("4.1 Información proporcionada por los Usuarios"),

    p(
      "Esta información es recolectada directamente de los Usuarios al acceder a los servicios ofrecidos en el Sitio. Esta incluye:"
    ),

    subtitle("Datos de identificación"),

    list([
      "Nombre completo.",
      "RUT/pasaporte.",
      "Fecha de nacimiento.",
    ]),

    subtitle("Datos de contacto"),

    list([
      "Número de teléfono particular y móvil.",
      "Dirección.",
      "Correo electrónico.",
    ]),

    subtitle("Datos de pago"),

    list([
      "Datos bancarios: información bancaria necesaria para procesar transacciones (no almacenamos datos de tarjetas de crédito, solo utilizamos proveedores de pago seguros).",
    ]),

    subtitle("Datos de navegación"),

    list([
      "Dirección IP.",
      "Cookies.",
      "Historial de interacción con el sitio.",
    ]),

    p(
      "En caso de que sea necesario solicitar otros Datos Personales o Sensibles adicionales para la debida prestación de los servicios, El Avellano SpA solicitará la debida autorización al Usuario."
    ),

    subtitle("4.2 Información recopilada de forma automática"),

    p(
      "El Avellano SpA recopila información con relación a los Usuarios y visitantes del Sitio, el uso de los servicios, la interacción de los Usuarios con ellos y la publicidad."
    ),

    p("Esta información incluye:"),

    list([
      "Dirección IP de los Usuarios y visitantes del Sitio.",
      "La actividad de los Usuarios en relación a los productos y servicios ofrecidos en el Sitio.",
      "Información transaccional respecto de los productos y servicios prestados en el Sitio, tales como compras, pagos, cotizaciones, preguntas, entre otros.",
      "Información de geolocalización de los Usuarios y visitantes del Sitio.",
      "La interacción de los Usuarios con emails y otras notificaciones automáticas y canales de mensajería online.",
      "Detalles sobre las interacciones de los Usuarios con los canales de servicio al cliente y de información a los Usuarios sobre el uso de Datos Personales.",
    ]),
  ],
};