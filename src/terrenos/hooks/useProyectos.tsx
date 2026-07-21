import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProjectsAction, type ProjectsResponse } from "../action/getProjects.action";
import { proyectos as proyectosData, type Proyecto } from "@/data/proyectos";

export const useProyectos = () => {
  const { data, isLoading, error } = useQuery<ProjectsResponse[], Error>({
    queryKey: ["proyectos"],
    queryFn: getProjectsAction,
  });

  const proyectos = data ?? [];

  return useMemo(
    () => ({ proyectos, loading: isLoading, error }),
    [proyectos, isLoading, error]
  );
};

export const useProyectoPorSlug = (idSlug?: string) => {
  return useMemo(
    () => proyectosData.find((proyecto) => proyecto.idSlug === idSlug),
    [idSlug]
  );
};

export type { Proyecto };
