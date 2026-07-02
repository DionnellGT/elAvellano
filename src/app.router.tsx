import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { AvellanoLayout } from "./terrenos/layout/AvellanoLayout";
import { HomePage } from "./terrenos/pages/HomePage";
import { ProyectoPage } from "./terrenos/pages/ProyectoPage";
import { TerminosCondiciones } from "./terrenos/components/TerminosCondiciones";
import { PoliticaPrivacidad } from "./terrenos/components/PoliticaPrivacidad";


const appRouter = createBrowserRouter([
    //Public routes
    {
        path: '/',
        element: <AvellanoLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'proyectos/:idSlug',
                element: <ProyectoPage/>
            },
            {
                path: "terminos-y-condiciones",
                element: <TerminosCondiciones />
            },
            {
                path: "politica-de-privacidad",
                element: <PoliticaPrivacidad />
            }
        ]
    },

    {
        path: '*',
        element: <Navigate to='/' />
    },
])

export function AppRouter() {
  return <RouterProvider router={appRouter} />
}