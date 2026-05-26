import { createHashRouter, Navigate, RouterProvider } from "react-router";
import { AvellanoLayout } from "./terrenos/layout/AvellanoLayout";
import { HomePage } from "./terrenos/pages/HomePage";


const appRouter = createHashRouter([
    //Public routes
    {
        path: '/',
        element: <AvellanoLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
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