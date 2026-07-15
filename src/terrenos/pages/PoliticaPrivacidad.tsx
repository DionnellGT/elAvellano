import { politicasPrivacidad } from "@/data/politicasprivacidad";
import { useEffect } from "react";
import TableOfContents from "../components/TableOfContents/TableOfContents";
import { Section } from "../components/Section";

 
export const PoliticaPrivacidad = () => {

  useEffect(() => {
    document.title = "Política de Privacidad | El Avellano";
  }, []);

  return (
        <main className="bg-gray-100 py-12">
    
          <div className="mx-auto max-w-5xl rounded-xl bg-white px-6 py-12 shadow-sm sm:px-10">
    
            <header className="mb-12">
    
              <h1 className="text-4xl font-bold">
                Términos y Condiciones de Uso del Sitio Web
              </h1>
    
              <p className="mt-3 text-gray-500">
                Última actualización: Julio de 2026
              </p>
    
            </header>
    
            <TableOfContents sections={politicasPrivacidad} />
    
            <div className="space-y-16">
    
              {politicasPrivacidad.map((section) => (
                <Section
                  key={section.id}
                  section={section}
                />
              ))}
    
            </div>
    
          </div>
    
        </main>
      );
};

