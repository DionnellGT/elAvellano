import { p } from "../terminosycondiciones/helpers";
import type { TermsSection } from "../terminosycondiciones/types";

export const autorizacionDelUsuario: TermsSection = {
  id: "autorizacion-del-usuario",

  title: "3. AUTORIZACIÓN DEL USUARIO",

  blocks: [
    p(
      "El Usuario debe leer, comprender y aceptar las presentes Políticas de Privacidad para realizar cualquier transacción, compra y cualquier otro acto mediante los sistemas de comercialización o servicios comprendidos en el Sitio."
    ),

    p(
      "Con la aceptación de las Políticas de Privacidad, el Usuario autoriza a El Avellano SpA, conforme a la Ley N° 21.719, a tratar los Datos Personales que el Usuario proporcione al adquirir los productos y servicios que se comercializan en el Sitio."
    ),

    p(
      "El Avellano SpA sólo efectuará el Tratamiento de Datos Personales cuando cuente con la autorización del Usuario o cuando la legislación aplicable reconozca otra base de legalidad para tratar los Datos Personales, y únicamente para las finalidades descritas en las presentes Políticas de Privacidad."
    ),
  ],
};