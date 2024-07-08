// main_app/src/router/index.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Layout from '../components/Layout/index.tsx';

const initialRoutes = [
    {
        // path: '/',
        // element: <Layout />,
        // children: [
        //     {
        //         path: '/', element: <App />
        //     },
        // ],

        path: '/',
        element: <App />,
    },
    // 其他主应用的路由
];

const createRouter = (routes) => (
    <Routes>
        {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
        ))}
    </Routes>
);

const RouterComponent = () => {
    const [routes, setRoutes] = useState(initialRoutes);

    useEffect(() => {
        // import('sub_app/routes').then(module => {
        //     const subAppRoutes = module.default;
        //     setRoutes(prevRoutes => {
        //         const updatedRoutes = [...prevRoutes];
        //         // updatedRoutes[0].children = [...updatedRoutes[0].children, ...subAppRoutes];
        //         console.log(updatedRoutes);
        //         return updatedRoutes;
        //     });
        // });
    }, []);

    return (
        <BrowserRouter>
            {createRouter(routes)}
        </BrowserRouter>
    );
};

export default RouterComponent;