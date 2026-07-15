import { list, p, subtitle } from "../terminosycondiciones/helpers";
import type { TermsSection } from "../terminosycondiciones/types";

export const divulgacionDeLaInformacion: TermsSection = {
  id: "divulgacion-de-la-informacion",

  title: "9. DIVULGACIÓN DE LA INFORMACIÓN",

  blocks: [
    p(
      "La información recopilada en el Sitio podrá ser divulgada a terceros para determinados propósitos, de la siguiente manera:"
    ),

    subtitle("9.1 Empresas relacionadas"),

    list([
      "Proveedores de servicios: La información de los Usuarios puede ser compartida con otras empresas, agentes o contratistas que presten servicios a El Avellano SpA y lo apoyen en la prestación de servicios. Por ejemplo, proveedores que presten los servicios de asistencia requeridos por el Usuario, servicios de tecnología de la información, procesamiento de las transacciones de las tarjetas de crédito y de otras formas de pago, servicio al cliente, análisis de los datos recopilados por el Sitio y realización de encuestas a consumidores. En el transcurso de la prestación de los servicios, estos proveedores externos podrían tener acceso a información personal o confidencial de los Usuarios, sin embargo, en ningún caso serán autorizados para utilizar o divulgar dicha información con finalidades diferentes a la de los servicios para los que son contratados.",

      "Promociones: El Avellano SpA podrá ofrecer promociones que requieran el intercambio de información con terceros como condición para participar. En caso de que el Usuario acepte dicha condición al momento de participar, el Responsable de los Datos Personales será aquella empresa a la que el Usuario proporcione directamente sus Datos Personales. En caso de que los Datos Personales sean entregados por El Avellano SpA por autorización del Usuario, El Avellano SpA será el Responsable de los Datos Personales.",
    ]),
  ],
};