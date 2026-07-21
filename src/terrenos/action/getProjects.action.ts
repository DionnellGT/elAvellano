import { globalApi } from "@/api/globalApi"

export interface ProjectsResponse {
  id: string
  isActive: boolean
  idSlug: string
  marca: string
  name: string
  imageCarrousel: string
  badgeColor: string
  badgeLabel: string
  preciosDesde: string
}

export const getProjectsAction = async (): Promise<ProjectsResponse[]> => {
  const { data } = await globalApi.get<ProjectsResponse[]>(
    "/Project/brand/elavellano"
  )

  return data
}
