import { globalApi } from "@/api/globalApi";

export interface ProjectBySlugResponse {
  id: string;
  orden: number;
  isActive: boolean;
  idSlug: string;
  marca: string;
  name: string;
  precioDesde: string;
  badgeColor: string;
  imageCarrousel: string;
  imagenBannerPrincipal: string;
  imagenBannerPrincipalMobile: string;
  imagenesDeCaracteristicas: string[];
  vistaProyecto360: string;
  imagenesVistasProyecto: string[];
  imagenMapaFondo: string | null;
  linkMapa: string;
  imagenBaner2: string;
  imagenCentrosUrbanos: string;
  imagenAtraccionesTuristicas: string;
  centrosUrbanosCercanos: {
    id: string;
    nombre: string;
    distancia: string;
    tiempo: string;
    linkMaps: string;
    imgAtraccionTuristica: string;
  }[];
  atraccionesTuristicas: {
    id: string;
    nombre: string;
    distancia: string;
    tiempo: string;
    linkMaps: string;
    imgAtraccionTuristica: string;
  }[];
}

export const getProjectBySlugAction = async (
  slug: string
): Promise<ProjectBySlugResponse> => {
  const { data } = await globalApi.get<ProjectBySlugResponse>(
    `/Project/brand/elavellano/${slug}`
  );

  return data;
};
