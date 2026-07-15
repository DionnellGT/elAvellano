import type { TermsSection } from "./types";
import { list, p } from "./helpers";

export const factibilidadesYServicios: TermsSection = {
  id: "factibilidades-y-servicios",

  title: "10. FACTIBILIDADES Y SERVICIOS",

  blocks: [
    p(
      "Cada proyecto desarrollado o comercializado por Global Terrenos posee características, especificaciones técnicas y condiciones particulares que pueden diferir entre sí, así como entre las distintas parcelas o unidades que lo integran."
    ),

    p(
      "En consecuencia, las condiciones de cada proyecto podrán variar, entre otras materias, respecto de:"
    ),

    list([
      "Disponibilidad y factibilidad de suministro eléctrico.",
      "Disponibilidad, origen y sistema de abastecimiento de agua.",
      "Caminos interiores y vías de acceso.",
      "Estado, tipo y estándar de los accesos al proyecto y a cada parcela.",
      "Existencia de rol propio o estado del proceso de subdivisión e individualización predial, cuando corresponda.",
      "Obras de urbanización ejecutadas o proyectadas.",
      "Obras complementarias, tales como portería, cierres perimetrales, áreas comunes, señalización, iluminación, redes de servicios u otras mejoras.",
      "Factibilidad de conexión a servicios básicos y demás condiciones propias del proyecto.",
    ]),

    p(
      "La información comercial, publicitaria o gráfica tendrá un carácter meramente referencial y deberá entenderse complementada por los antecedentes técnicos, legales y contractuales específicos de cada proyecto."
    ),

    p(
      "El cliente declara conocer y aceptar que las características de una parcela no necesariamente serán idénticas a las de otras unidades, aun cuando pertenezcan al mismo proyecto, y que las condiciones descritas podrán variar según la ubicación, etapa de desarrollo, permisos, factibilidades técnicas o características propias del inmueble."
    ),

    p(
      "Antes de celebrar cualquier contrato, será responsabilidad del cliente revisar y verificar la información específica de la parcela de su interés, incluyendo sus características técnicas, urbanísticas y legales, así como las condiciones comerciales aplicables. La suscripción de la promesa de compraventa o del contrato definitivo implicará que el cliente declara haber recibido dicha información y encontrarse conforme con ella."
    ),
  ],
};