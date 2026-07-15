import type { TermsSection } from "./types";
import { list, p } from "./helpers";

export const modificaciones: TermsSection = {
  id: "modificaciones",

  title: "17. MODIFICACIONES",

  blocks: [
    p(
      "Global Terrenos se reserva el derecho de modificar, actualizar, complementar o eliminar, en cualquier momento y sin necesidad de aviso previo, el contenido, diseño, funcionalidades y demás elementos del sitio web, cuando ello resulte necesario para mejorar sus servicios, adecuarse a cambios normativos, comerciales, tecnológicos u operacionales, o por cualquier otra causa legítima."
    ),

    p(
      "En particular, la Empresa podrá modificar, entre otros aspectos:"
    ),

    list([
      "La información publicada en el sitio web.",
      "Los proyectos inmobiliarios ofrecidos.",
      "La disponibilidad de parcelas o unidades.",
      "Los precios, promociones, descuentos y condiciones comerciales.",
      "Las imágenes, renders, planos, fichas técnicas y demás material gráfico o audiovisual.",
      "Los presentes Términos y Condiciones.",
      "La Política de Privacidad y la Política de Cookies.",
      "Las funcionalidades y servicios disponibles en la plataforma.",
    ]),

    p(
      "Las modificaciones entrarán en vigor desde su publicación en el sitio web, salvo que expresamente se indique una fecha distinta para su entrada en vigencia."
    ),

    p(
      "Las modificaciones de los presentes Términos y Condiciones regirán exclusivamente respecto de los accesos, consultas, reservas y demás actuaciones realizadas con posterioridad a su publicación, sin afectar los derechos y obligaciones derivados de contratos válidamente celebrados con anterioridad, los que continuarán rigiéndose por las condiciones vigentes al momento de su suscripción, salvo que la ley permita o las partes acuerden expresamente otra cosa."
    ),

    p(
      "La continuidad en el uso del sitio web con posterioridad a la publicación de las modificaciones constituirá aceptación de los nuevos Términos y Condiciones, en la medida en que ello sea compatible con la legislación vigente y sin perjuicio de los derechos que la ley reconozca a los usuarios y consumidores."
    ),

    p(
      "La Empresa podrá, asimismo, suspender temporal o definitivamente determinadas funcionalidades, servicios o contenidos del sitio web cuando ello resulte necesario por razones técnicas, operacionales, de seguridad, mantenimiento, cumplimiento normativo o cualquier otra causa legítima, procurando minimizar las eventuales interrupciones en la prestación de sus servicios digitales."
    ),
  ],
};