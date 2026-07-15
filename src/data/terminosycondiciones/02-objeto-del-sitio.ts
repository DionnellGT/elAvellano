import type { TermsSection } from "./types";
import { list, p } from "./helpers";

export const objetoDelSitio: TermsSection = {
  id: "objeto-del-sitio",

  title: "2. OBJETO DEL SITIO WEB",

  blocks: [
    p(
      "El presente sitio web tiene por objeto proporcionar a los usuarios, clientes y público en general información clara, oportuna y actualizada sobre los proyectos inmobiliarios, parcelas y servicios ofrecidos por Global Terrenos SpA, facilitando el acceso a antecedentes comerciales, técnicos y de contacto que permitan a los interesados conocer las alternativas disponibles y tomar decisiones informadas respecto de una eventual adquisición."
    ),

    p(
      "A través del sitio web, los usuarios podrán acceder, entre otros, a los siguientes contenidos y servicios:"
    ),

    list([
      "Información general de los proyectos comercializados por Global Terrenos SpA.",
      "Catálogo de parcelas disponibles para la venta.",
      "Características, ubicación, superficies, deslindes y demás antecedentes generales de cada proyecto.",
      "Estado de avance de los proyectos, cuando corresponda.",
      "Información sobre factibilidades de servicios básicos, accesos, caminos interiores, urbanización y otras características propias de cada proyecto, según corresponda.",
      "Valores referenciales, promociones, descuentos, campañas comerciales y beneficios vigentes.",
      "Solicitud de cotizaciones y simulaciones comerciales.",
      "Agendamiento de visitas a terreno o reuniones con ejecutivos comerciales.",
      "Canales oficiales de contacto para resolver consultas y brindar asesoría personalizada.",
      "Información legal, contractual y documentación relacionada con los proyectos cuando ésta se encuentre disponible para su consulta.",
      "Acceso a la Política de Privacidad, Términos y Condiciones, así como a otros documentos informativos publicados por la Empresa.",
    ]),

    p(
      "La información contenida en este sitio web tiene un carácter exclusivamente informativo, descriptivo y comercial, y su finalidad es orientar a los usuarios respecto de los proyectos y servicios ofrecidos por Global Terrenos SpA. En consecuencia, dicha información no constituye una oferta irrevocable, una promesa de compraventa, un contrato ni genera obligación alguna para la Empresa mientras no se suscriban los instrumentos legales correspondientes."
    ),

    p(
      "Global Terrenos SpA procura mantener la información publicada permanentemente actualizada; sin embargo, determinadas características de los proyectos, disponibilidad de parcelas, precios, promociones, condiciones comerciales, especificaciones técnicas, plazos de ejecución, factibilidades y demás antecedentes podrán modificarse sin previo aviso, de acuerdo con las necesidades operacionales, comerciales o regulatorias de la Empresa."
    ),

    p(
      "En caso de existir diferencias entre la información publicada en el sitio web y la contenida en los contratos, escrituras, planos aprobados, certificados emitidos por organismos competentes u otros documentos legales, prevalecerán estos últimos."
    ),

    p(
      "Se recomienda a los usuarios confirmar con un ejecutivo comercial toda la información relevante antes de adoptar una decisión de compra o efectuar cualquier pago relacionado con un proyecto o parcela."
    ),
  ],
};