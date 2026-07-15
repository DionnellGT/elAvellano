import type { TermsSection } from "./types";
import { list, p } from "./helpers";

export const propiedadIntelectual: TermsSection = {
  id: "propiedad-intelectual",

  title: "12. PROPIEDAD INTELECTUAL",

  blocks: [
    p(
      "Todo el contenido disponible en el sitio web de Global Terrenos, incluyendo, entre otros, textos, fotografías, imágenes, videos, renders, planos, croquis, diseños, logotipos, marcas, nombres comerciales, gráficos, iconos, software, bases de datos, material audiovisual, documentos, fichas técnicas, elementos gráficos, código fuente, estructura, diseño, organización, compilación de contenidos y cualquier otro material susceptible de protección por las normas sobre propiedad intelectual e industrial, es de propiedad de Global Terrenos o de terceros que han autorizado su utilización, encontrándose protegido por la Constitución Política de la República, la Ley N° 17.336 sobre Propiedad Intelectual, la Ley N° 19.039 sobre Propiedad Industrial, los tratados internacionales ratificados por Chile y las demás normas aplicables."
    ),

    p(
      "El acceso al sitio web no implica, en ningún caso, la cesión, licencia, autorización o transferencia de derechos de propiedad intelectual o industrial sobre cualquiera de los contenidos publicados."
    ),

    p(
      "Queda estrictamente prohibido, sin la autorización previa, expresa y por escrito de Global Terrenos o del respectivo titular de los derechos, realizar cualquiera de las siguientes acciones:"
    ),

    list([
      "Reproducir, copiar o almacenar total o parcialmente los contenidos del sitio.",
      "Distribuir, comunicar públicamente, publicar, transmitir o poner a disposición de terceros cualquier contenido.",
      "Modificar, adaptar, traducir, transformar o crear obras derivadas.",
      "Comercializar, licenciar, vender o explotar los contenidos con fines comerciales.",
      "Extraer, reutilizar o utilizar sistemáticamente bases de datos, información o contenidos mediante herramientas automatizadas, incluyendo robots, crawlers, scrapers o cualquier mecanismo similar.",
      "Eliminar, alterar o suprimir avisos de propiedad intelectual, marcas de agua, logotipos o cualquier otra indicación relativa a la titularidad de los derechos.",
    ]),

    p(
      "El uso no autorizado de los contenidos del sitio constituirá una infracción a la normativa vigente sobre propiedad intelectual e industrial y facultará a Global Terrenos para ejercer todas las acciones civiles, penales y administrativas que correspondan para la protección de sus derechos y la indemnización de los perjuicios ocasionados."
    ),

    p(
      "Las marcas, nombres comerciales, logotipos y demás signos distintivos exhibidos en el sitio son de propiedad de Global Terrenos o de sus respectivos titulares, encontrándose protegidos por la legislación vigente. Su utilización por terceros requerirá siempre autorización previa y por escrito de su titular."
    ),
  ],
};