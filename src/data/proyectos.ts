export interface Proyecto {
  id: string;
  name: string;
  imageCarrousel: string;
}


export const proyectos: Proyecto[] = [
  {
    id: "1",
    name: "paisajes del rio",
    imageCarrousel: "/gallery/paisajes.webp",
  },
  {
    id: "2",
    name: "Los Muermos",
    imageCarrousel: "/gallery/avellanolm.webp",
  }
]