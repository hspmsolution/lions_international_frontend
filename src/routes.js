import { useRoutes,Navigate } from "react-router-dom";
import NewActivity from "./admin/pages/NewActivity";
import NewsReport from "./admin/pages/NewsReport";
import DashboardAppPage from "./admin/pages/DashboardAppPage";
import AdminReport from "./admin/pages/AdminReport";
import AddActivity from "./admin/pages/AddActivity";
import Login from "./admin/pages/login";
import Page404 from "./admin/pages/Page404";
import DashboardLayout from "./admin/layouts/dashboard";


import React from "react";
import Home from "./components/Home";
import Login from "./admin/pages/login";

export default function Router() {
  const route = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },

    {
      path: "/404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "app", element: <DashboardAppPage /> },
        { path: "activity", element: <NewActivity /> },
        { path: "news", element: <NewsReport /> },
        { path: "admin", element: <AdminReport /> },
        { path: "pastactivity", element: <AddActivity /> },
      ],
    },
  ];
  return useRoutes(route);
}
