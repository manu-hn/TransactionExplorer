import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Statistics from "./components/pages/Statistics";
import Home from "./components/pages/Home";
import BarChart from "./components/pages/BarChart";
import PieChart from "./components/pages/PieChart";
import NotFound from "./components/error/NotFound";
import Chart from "./components/Chart";


const appRouter=createBrowserRouter([
    {
        path: "/",
        element : <App />,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : '/stats',
                element : <Statistics />
            },
            {
                path : "/charts",
                element : <Chart />
            },
           
        ]
    },
    {
        path : "*",
        element : <NotFound />
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={appRouter} />)