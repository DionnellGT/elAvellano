import { useParams } from "react-router";
import { useProyectoPorSlug } from "../hooks/useProyectos";

export const ProyectoPage = () => {
  const { idSlug } = useParams();
  const proyecto = useProyectoPorSlug(idSlug);

  if (!proyecto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100">
        <h1 className="text-3xl font-bold text-stone-800">Proyecto no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-100 p-6">
      <h1 className="text-3xl font-bold text-stone-800">{proyecto.name}</h1>
      <p className="mt-4 text-stone-600">Slug: {proyecto.idSlug}</p>
    </div>
  );
} 