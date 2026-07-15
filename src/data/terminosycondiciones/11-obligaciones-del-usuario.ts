import type { TermsSection } from "./types";
import { list, p } from "./helpers";

export const obligacionesDelUsuario: TermsSection = {
  id: "obligaciones-del-usuario",

  title: "11. OBLIGACIONES DEL USUARIO",

  blocks: [
    p(
      "Toda persona que acceda y utilice el sitio web de Global Terrenos se obliga a hacerlo de manera diligente, responsable y conforme a la legislación vigente, a las buenas prácticas y a los presentes Términos y Condiciones."
    ),

    p(
      "En particular, el usuario se compromete a:"
    ),

    list([
      "Proporcionar información veraz, completa, exacta y actualizada cuando sea requerida para realizar consultas, reservas, cotizaciones o cualquier otra gestión.",
      "Utilizar el sitio web únicamente para fines lícitos y de conformidad con la normativa vigente, absteniéndose de realizar cualquier conducta que pueda afectar los derechos de terceros o el normal funcionamiento de la plataforma.",
      "No utilizar el sitio para fines fraudulentos, ilícitos, engañosos o contrarios al orden público y las buenas costumbres.",
      "No intentar acceder sin autorización a sistemas, servidores, bases de datos, cuentas o información perteneciente a Global Terrenos o a terceros.",
      "No realizar actos destinados a vulnerar, alterar, interrumpir o afectar la seguridad informática, disponibilidad, integridad o funcionamiento del sitio web, incluyendo el uso de virus, malware, bots, programas automatizados, ataques informáticos o cualquier otro mecanismo similar.",
      "No copiar, reproducir, modificar, distribuir, comercializar o utilizar la información, imágenes, planos, documentos, fotografías, marcas, logotipos o cualquier otro contenido del sitio sin la autorización previa y por escrito de Global Terrenos, salvo en los casos expresamente permitidos por la legislación aplicable.",
      "No utilizar la información contenida en el sitio para fines comerciales distintos de aquellos expresamente autorizados por Global Terrenos.",
      "Hacer un uso responsable de la información publicada, comprendiendo que esta puede ser actualizada o modificada conforme a los presentes Términos y Condiciones.",
    ]),

    p(
      "El usuario será responsable de los daños y perjuicios que cause a Global Terrenos o a terceros como consecuencia del incumplimiento de las obligaciones establecidas en estos Términos y Condiciones o de cualquier uso indebido del sitio web."
    ),

    p(
      "Global Terrenos se reserva el derecho de restringir, suspender o bloquear el acceso al sitio web, total o parcialmente, a aquellos usuarios que incumplan los presentes Términos y Condiciones, sin perjuicio de las acciones legales que puedan corresponder conforme a la legislación vigente."
    ),
  ],
};