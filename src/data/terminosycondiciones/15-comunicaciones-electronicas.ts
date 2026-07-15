import type { TermsSection } from "./types";
import { list, p } from "./helpers";

export const comunicacionesElectronicas: TermsSection = {
  id: "comunicaciones-electronicas",

  title: "15. COMUNICACIONES ELECTRÓNICAS",

  blocks: [
    p(
      "El usuario acepta y autoriza que Global Terrenos pueda efectuar las comunicaciones, notificaciones, avisos e intercambio de información relacionados con las consultas, cotizaciones, reservas, procesos de compraventa, ejecución de contratos, atención postventa y demás gestiones vinculadas a la relación comercial, mediante medios electrónicos, siempre que ello sea permitido por la legislación vigente."
    ),

    p(
      "Dichas comunicaciones podrán realizarse, entre otros medios, a través de:"
    ),

    list([
      "Correo electrónico.",
      "Mensajes de WhatsApp u otras aplicaciones de mensajería instantánea.",
      "Llamadas telefónicas.",
      "Mensajes de texto (SMS).",
      "Plataformas digitales, formularios web o áreas privadas del sitio.",
      "Cualquier otro medio de comunicación electrónica autorizado por la legislación vigente o expresamente aceptado por el usuario.",
    ]),

    p(
      "El usuario declara que los datos de contacto proporcionados son veraces, completos y se encuentran vigentes, comprometiéndose a informar oportunamente cualquier modificación de los mismos. Mientras no se comunique un cambio por los canales habilitados para ello, Global Terrenos podrá considerar válidos los datos registrados por el usuario para efectos de todas las comunicaciones relacionadas con la relación comercial."
    ),

    p(
      "Las comunicaciones enviadas por Global Terrenos a la dirección de correo electrónico, número telefónico o demás medios de contacto proporcionados por el usuario se entenderán válidamente efectuadas desde el momento de su envío, sin perjuicio de las formalidades especiales que la ley exija para determinados actos jurídicos."
    ),

    p(
      "La autorización conferida en la presente cláusula no reemplaza el consentimiento que la legislación aplicable pueda exigir para el envío de comunicaciones publicitarias o de marketing directo. En consecuencia, las comunicaciones de carácter promocional o comercial serán remitidas únicamente cuando exista una base de licitud que las habilite, especialmente el consentimiento del usuario o cualquier otra contemplada en la legislación vigente, pudiendo éste solicitar en cualquier momento el cese de dichas comunicaciones mediante los mecanismos de exclusión o revocación que Global Terrenos ponga a su disposición."
    ),

    p(
      "La presente cláusula se entiende sin perjuicio de las disposiciones contenidas en la Ley N.º 19.799 sobre Documentos Electrónicos, Firma Electrónica y Servicios de Certificación de dicha Firma, la Ley N.º 21.719 sobre Protección de Datos Personales, la Ley N.º 19.496 sobre Protección de los Derechos de los Consumidores y las demás normas legales que resulten aplicables."
    ),
  ],
};