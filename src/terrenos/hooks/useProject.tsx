import { useQuery } from "@tanstack/react-query";
import {
  getProjectBySlugAction,
  type ProjectBySlugResponse,
} from "../action/getProjectBySlug.action";

export const useProject = (slug?: string) => {
  const { data, isLoading, error, isError } = useQuery<ProjectBySlugResponse, Error>(
    {
      queryKey: ["proyecto", slug],
      queryFn: () => getProjectBySlugAction(slug ?? ""),
      enabled: Boolean(slug),
    }
  );

  return {
    proyecto: data,
    loading: isLoading,
    error: isError ? error : null,
  };
};
