import type { TermsSection } from "./types";
import { list, p } from "./helpers";

export const limitacionDeResponsabilidad: TermsSection = {
  id: "limitacion-de-responsabilidad",

  title: "16. LIMITACIÓN DE RESPONSABILIDAD",

  blocks: [
    p(
      "Global Terrenos procurará mantener el sitio web operativo, seguro y con información actualizada, adoptando las medidas que resulten procedentes de acuerdo con los estándares técnicos y comerciales aplicables. Sin perjuicio de ello, el usuario reconoce que el funcionamiento de plataformas digitales depende de factores tecnológicos y de servicios prestados por terceros, respecto de los cuales la Empresa no tiene un control absoluto."
    ),

    p(
      "En consecuencia, salvo en los casos en que la ley disponga expresamente lo contrario, Global Terrenos no garantiza:"
    ),

    list([
      "La disponibilidad ininterrumpida o permanente del sitio web.",
      "La continuidad absoluta de los servicios digitales ofrecidos.",
      "La inexistencia de interrupciones, demoras, fallas técnicas o errores informáticos.",
      "La ausencia de virus, programas maliciosos u otros elementos nocivos introducidos por terceros, sin perjuicio de las medidas de seguridad razonablemente implementadas por la Empresa.",
      "La disponibilidad permanente de las parcelas, proyectos, promociones o servicios publicados, los que podrán modificarse o dejar de estar disponibles conforme a las condiciones comerciales vigentes.",
    ]),

    p(
      "La información contenida en el sitio web tiene carácter esencialmente informativo y referencial. Si bien Global Terrenos adopta medidas razonables para procurar su exactitud y actualización, el usuario reconoce que dicha información puede ser modificada, actualizada o corregida en cualquier momento, especialmente respecto de precios, disponibilidad, características de los proyectos, promociones, plazos, especificaciones técnicas y demás antecedentes comerciales."
    ),

    p(
      "En consecuencia, Global Terrenos no será responsable por los perjuicios que deriven exclusivamente de:"
    ),

    list([
      "Interrupciones temporales del funcionamiento del sitio web o de los servicios tecnológicos que lo soportan.",
      "Fallas en redes de telecomunicaciones, servicios de internet, plataformas tecnológicas o sistemas operados por terceros.",
      "Ataques informáticos, accesos no autorizados, virus u otros eventos de ciberseguridad que no sean imputables a la falta de diligencia exigible a la Empresa.",
      "Casos fortuitos o de fuerza mayor, conforme a la legislación vigente.",
      "Actos u omisiones de terceros ajenos a Global Terrenos que afecten el funcionamiento del sitio o el desarrollo de una operación.",
      "Decisiones adoptadas por el usuario exclusivamente sobre la base de información preliminar, referencial o publicitaria contenida en el sitio web, sin verificar las condiciones específicas de la operación ni suscribir los instrumentos contractuales correspondientes.",
    ]),

    p(
      "En ningún caso esta cláusula deberá interpretarse como una exclusión o limitación de responsabilidad respecto de aquellas materias en que la ley establezca responsabilidad irrenunciable o prohíba su exclusión o limitación, especialmente en los casos de dolo, culpa grave o infracción a normas de orden público, así como respecto de los derechos que la legislación de protección de los consumidores reconozca a los usuarios cuando ésta resulte aplicable."
    ),

    p(
      "Asimismo, ninguna disposición de estos Términos y Condiciones limitará las obligaciones legales que correspondan a Global Terrenos en la ejecución de los contratos que celebre con sus clientes, las cuales se regirán por la legislación vigente y por los respectivos instrumentos contractuales."
    ),
  ],
};