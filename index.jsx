import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter,RouterProvider } from "react-router";
import Login from "./src/components/Login";
import Inicio from "./src/components/Inicio";

const Routes =createBrowserRouter([
    {
        path: '/',
        element: <Login/>,
    },
    {
        path: '/Inicio',
        element: <Inicio/>
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={Routes}/>
    </StrictMode>
);
