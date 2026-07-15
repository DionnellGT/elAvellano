import { list, p } from "../terminosycondiciones/helpers";
import type { TermsSection } from "../terminosycondiciones/types";

export const usoDeCookies: TermsSection = {
  id: "uso-de-cookies",

  title: "6. USO DE COOKIES",

  blocks: [
    p("Nuestro sitio utiliza cookies para:"),

    list([
      "Mejorar la funcionalidad y personalización del sitio.",
      "Obtener estadísticas de navegación.",
      "Mostrar publicidad relacionada con nuestros servicios.",
    ]),

    p(
      "Los usuarios pueden desactivar las cookies en la configuración de su navegador, aunque esto puede afectar la experiencia en el sitio."
    ),
  ],
};