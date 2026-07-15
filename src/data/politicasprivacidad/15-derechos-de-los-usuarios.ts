import { list, p } from "../terminosycondiciones/helpers";
import type { TermsSection } from "../terminosycondiciones/types";

export const derechosDeLosUsuarios15: TermsSection = {
  id: "derechos-de-los-usuarios",

  title: "15. DERECHOS DE LOS USUARIOS",

  blocks: [
    p("Los usuarios pueden en cualquier momento ejercer sus derechos de:"),

    list([
      "Acceso a sus datos.",
      "Rectificación o actualización.",
      "Cancelación o eliminación.",
      "Oposición al uso de sus datos para fines comerciales.",
    ]),

    p("Para ejercer estos derechos, pueden contactarnos en:"),

    list([
      "contacto@elavellano.cl",
      "+56949437974",
    ]),
  ],
};