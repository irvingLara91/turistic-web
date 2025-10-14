import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from "@/pages/Home/Home.tsx";
import MainLayout from "@layouts//MainLayout.tsx";


const RouteConfig: React.FC = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: '/', element: <Home /> },

            ],
        },
    ]);

    return routes;
};

export default RouteConfig;
