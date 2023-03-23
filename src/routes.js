import { useRoutes,Navigate } from "react-router-dom";
import NewActivity from "./admin/pages/NewActivity";
import NewsReport from "./admin/pages/NewsReport";
import DashboardAppPage from "./admin/pages/DashboardAppPage";
import AdminReport from "./admin/pages/AdminReport";
import AddActivity from "./admin/pages/AddActivity";
import Login from "./admin/pages/login";
import Profile from "./admin/pages/Profile";
import Page404 from "./admin/pages/Page404";
import Password from "./admin/pages/Password";
import DashboardLayout from "./admin/layouts/dashboard";
import React from "react";
import Home from "./pages/Home/Home";
import UserLayout from './components/UserLayout'
import About from "./pages/About/About";
import DGTeam from "./pages/About/dgTeam/DGTeam";
import District from "./pages/About/district/District";
import OrgChart from "./pages/About/orgChart/OrgChart";
import Events from "./pages/Events/Events";
import MemberDir from "./pages/Membership/MemberDir/MemberDir"
import BusinessDir from "./pages/Membership/BusinessDir/BusinessDir"

export default function Router() {
  const route = [
    {
      path: "/",
      element: <UserLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/about/governor", element: <About /> },
        { path: "/about/dgteam", element: <DGTeam /> },
        { path: "/about/aboutdistrict317F", element: <District /> },
        { path: "/about/organizationchart", element: <OrgChart /> },
        { path: "/events", element: <Events /> },
        { path: "/membership/memberdirectory", element: <MemberDir /> },
        { path: "/membership/businessdirectory", element: <BusinessDir /> },
      ],
    },
    { path: "/login", element: <Login /> },
    {path:"/password",element:<Password/>},
    {path:'/profile',element:<Profile/>},
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
