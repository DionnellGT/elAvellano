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
    name: "Paisajes del Río",
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
    imageCarrousel: "/los_muermos/avellanolm.webp",
    imagenBannerPrincipal: "/los_muermos/avellanolmBanner.webp",
    imagenBannerPrincipalMobile: "/los_muermos/avellanolmBannerMobile.webp",
    imagenesDeCaracteristicas: [
      "/los_muermos/choose1-img.webp",
      "/los_muermos/choose2-img.webp",
    ],
    vistaProyecto360: "https://www.lanube360.com/elavellano-losmuermos-entrebosquesypraderas/",
    imagenesVistasProyecto: [
      "/los_muermos/team1-img1.webp",
      "/los_muermos/team1-img2.webp",
      "/los_muermos/team1-img3.webp",
    ],
    imagenMapaFondo: "/los_muermos/avellanolm_mapa.webp",
    linkMapa: "https://maps.app.goo.gl/HdPcPvZFxGitpppd7",
    imagenBaner2: "/los_muermos/avellanolmBanner.webp",
    centrosUrbanosCercanos: [
      {
        nombre: "Centro de Los Muermos",
        distancia: "10 km",
        tiempo: "10 min",
      },
      {
        nombre: "Aeropuerto El Tepual Puerto Montt",
        distancia: "35 km",
        tiempo: "30 min",
      },
      {
        nombre: "Centro de Fresia",
        distancia: "43 km",
        tiempo: "45 min",
      }
    ],
    imagenCentrosUrbanos: "/los_muermos/avellanolm_centrosurbanos.webp",
    atraccionesTuristicas: [
      {
        nombre: "La Pasada Maullin",
        tiempo: "32 min",
        distancia: "32 km",
      },
      {
        nombre: "Museo Antonio Felmer en Nueva Braunau",
        tiempo: "35 min",
        distancia: "40 km",
      },
      {
        nombre: "Parque Arqueológico Monte Verde",
        tiempo: "39 min",
        distancia: "42.5 km",
      },
      {
        nombre: "Parque Nacional Hornopiren",
        tiempo: "52 min",
        distancia: "48 km",
      },
      {
        nombre: "Playa Estaquilla",
        tiempo: "57 min",
        distancia: "51 km",
      },
      {
        nombre: "Playa Llico Bajo",
        tiempo: "1h 23 min",
        distancia: "67 km",
      }
    ],
    imagenAtraccionesTuristicas: "/los_muermos/AtraccionHornopiren.webp",
  }
]