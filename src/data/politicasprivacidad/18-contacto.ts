import { list, p } from "../terminosycondiciones/helpers";
import type { TermsSection } from "../terminosycondiciones/types";

export const contacto: TermsSection = {
  id: "contacto",

  title: "18. CONTACTO",

  blocks: [
    p(
      "El Avellano SpA cuenta con los siguientes canales de atención a los Usuarios:"
    ),

    list([
      'Formulario de contacto en el Sitio. Se encuentra disponible en la sección "Contáctanos".',
      "Vía mensajería instantánea WhatsApp, al teléfono: +56949437974.",
      "Correo electrónico: contacto@elavellano.cl.",
      "Servicio al cliente a través del número telefónico: +56949437974.",
      "Servicios de atención de emergencia al número telefónico: +56971552289.",
    ]),

    p(
      "Los horarios de atención de los canales de comunicación son de lunes a jueves, desde las 10:00 horas hasta las 17:00 horas y viernes desde las 10:00 horas hasta las 16:00 horas. El canal de emergencia, no obstante, se encuentra disponible las 24 horas del día, todos los días de la semana."
    ),
  ],
};