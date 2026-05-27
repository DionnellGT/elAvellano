export interface Proyecto {
  id: string;
  idSlug: string;
  name: string;
  imageCarrousel: string;
  imagenBannerPrincipal: string;
  imagenBannerPrincipalMobile: string;
  imagenesDeCaracteristicas: string[];
  vistaProyecto360: string;
  imagenesVistasProyecto: string[];
  imagenMapaFondo: string;
  linkMapa: string;
  imagenBaner2: string;
  centrosUrbanosCercanos: {
    nombre: string;
    distancia: string;
    tiempo: string;
  }[];
  imagenCentrosUrbanos: string;
  atraccionesTuristicas: {
    nombre: string;
    tiempo: string;
    distancia: string;
  }[];
  imagenAtraccionesTuristicas: string;
}


export const proyectos: Proyecto[] = [
  {
    id: "1",
    idSlug: "paisajes-del-rio",
    name: "paisajes del rio",
    imageCarrousel: "/PaisajesDelRio/paisajes.webp",
    imagenBannerPrincipal: "/PaisajesDelRio/Banner-Paisajes-Web.webp",
    imagenBannerPrincipalMobile: "/PaisajesDelRio/Banner-Paisajes-Mobile.webp",
    imagenesDeCaracteristicas: [
      "/PaisajesDelRio/paisajes_1.webp",
      "/PaisajesDelRio/paisajes_2.webp",
    ],
    vistaProyecto360: "https://www.lanube360.com/paisajesdelrio-chiloe/",
    imagenesVistasProyecto: [
      "/PaisajesDelRio/1.webp",
      "/PaisajesDelRio/2.webp",
      "/PaisajesDelRio/3.webp",
      "/PaisajesDelRio/4.webp",
    ],
    imagenMapaFondo: "/mapa.webp",
    linkMapa: "https://maps.app.goo.gl/SECnqq15deK5HPTw7",
    imagenBaner2: "/PaisajesDelRio/inter-paisajes.webp",
    centrosUrbanosCercanos: [
      {
        nombre: "Ruta 5 sur por Palomar",
        distancia: "12 km",
        tiempo: "15 min",
      },
      {
        nombre: "Aeropuerto de castro",
        distancia: "53 km",
        tiempo: "55 min",
      },
      {
        nombre: "Centro Ancud",
        distancia: "34 km",
        tiempo: "40 min",
      },
      {
        nombre: "Centro de Quemchi",
        distancia: "27 km",
        tiempo: "30 min",
      },
      {
        nombre: "Centro de Castro",
        distancia: "68 km",
        tiempo: "1 h 10 min",
      }
    ],
    imagenCentrosUrbanos: "/PaisajesDelRio/f1.webp",
    atraccionesTuristicas: [
      {
        nombre: "Isla aucar almas navegantes",
        tiempo: "32 min",
        distancia: "27 km",
      },
      {
        nombre: "Parque aventura chaiguen",
        tiempo: "39 min",
        distancia: "33 km",
      },
      {
        nombre: "Parque ecológico y mitológico",
        tiempo: "34 min",
        distancia: "29 km",
      },
      {
        nombre: "Bahía de duhatao",
        tiempo: "1h 24min",
        distancia: "59 km",
      },
      {
        nombre: "Pinguineras puñihuil chiloé",
        tiempo: "1h 15min",
        distancia: "54 km",
      },
      {
        nombre: "Santuario de las aves de ancud",
        tiempo: "48 min",
        distancia: "38 km",
      },
      {
        nombre: "Muelle de la luz",
        tiempo: "52 min",
        distancia: "43 km",
      },
      {
        nombre: "Ecomarine Punihuil",
        tiempo: "1h 16 min",
        distancia: "54 km",
      }
    ],
    imagenAtraccionesTuristicas: "/PaisajesDelRio/f2.webp",
  },
  {
    id: "2",
    idSlug: "los-muermos",
    name: "Los Muermos",
    imageCarrousel: "/gallery/avellanolm.webp",
    imagenBannerPrincipal: "/gallery/avellanolm_banner.webp",
    imagenBannerPrincipalMobile: "/gallery/avellanolm_banner_mobile.webp",
    imagenesDeCaracteristicas: [
      "/gallery/avellanolm_caracteristica1.webp",
      "/gallery/avellanolm_caracteristica2.webp",
    ],
    vistaProyecto360: "https://www.lanube360.com/avellanolm-chiloe/",
    imagenesVistasProyecto: [
      "/gallery/avellanolm_vista1.webp",
      "/gallery/avellanolm_vista2.webp",
      "/gallery/avellanolm_vista3.webp",
    ],
    imagenMapaFondo: "/gallery/avellanolm_mapa.webp",
    linkMapa: "https://maps.app.goo.gl/SECnqq15deK5HPTw7",
    imagenBaner2: "/gallery/avellanolm_banner2.webp",
    centrosUrbanosCercanos: [
      {
        nombre: "Ruta 5 sur por Palomar",
        distancia: "12 km",
        tiempo: "15 min",
      },
      {
        nombre: "Aeropuerto de castro",
        distancia: "53 km",
        tiempo: "55 min",
      },
      {
        nombre: "Centro Ancud",
        distancia: "34 km",
        tiempo: "40 min",
      },
      {
        nombre: "Centro de Quemchi",
        distancia: "27 km",
        tiempo: "30 min",
      },
      {
        nombre: "Centro de Castro",
        distancia: "68 km",
        tiempo: "1 h 10 min",
      }
    ],
    imagenCentrosUrbanos: "/gallery/avellanolm_centrosurbanos.webp",
    atraccionesTuristicas: [
      {
        nombre: "Isla aucar almas navegantes",
        tiempo: "32 min",
        distancia: "27 km",
      },
      {
        nombre: "Parque aventura chaiguen",
        tiempo: "39 min",
        distancia: "33 km",
      }
    ],
    imagenAtraccionesTuristicas: "/gallery/avellanolm_atracciones.webp",
  }
]