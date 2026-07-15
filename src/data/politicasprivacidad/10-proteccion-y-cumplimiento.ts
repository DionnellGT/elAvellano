import { list, p } from "../terminosycondiciones/helpers";
import type { TermsSection } from "../terminosycondiciones/types";

export const proteccionYCumplimiento: TermsSection = {
  id: "proteccion-y-cumplimiento",

  title: "10. PROTECCIÓN DE EL AVELLANO SpA Y CUMPLIMIENTO DE LA NORMATIVA APLICABLE",

  blocks: [
    p(
      "El Avellano SpA y sus proveedores de servicios podrán divulgar información personal y/o confidencial cuando dicha divulgación sea necesaria para:"
    ),

    list([
      "Cumplir con la legislación aplicable, procesos legales o solicitudes gubernamentales.",
      "Hacer cumplir los Términos y Condiciones, incluida la investigación de posibles infracciones.",
      "Detectar, prevenir o abordar actividades ilegales o presuntamente ilegales.",
      "Proteger de daños a la propiedad de El Avellano SpA, resguardar su seguridad y la de sus Usuarios o del público general, según lo permita la ley.",
      "Transferencia de negocios: ante eventuales reorganizaciones, reestructuraciones, fusiones o venta, o cualquier otra transferencia de bienes en El Avellano SpA se vea involucrado, la información recopilada y almacenada por éste, incluida la información de carácter personal, podrá ser transferida a condición de que el destinatario se comprometa a respetar íntegramente los términos de esta Política de Privacidad.",
    ]),
  ],
};