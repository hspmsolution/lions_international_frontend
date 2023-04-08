import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";

import NewActivity from "./admin/pages/NewActivity";
import NewsReporting from "./admin/pages/NewsReporting";
import DashboardAppPage from "./admin/pages/DashboardAppPage";
import AdminReport from "./admin/pages/AdminReport";
import PastActivity from "./admin/pages/PastActivity";
import Login from "./admin/pages/login";
import Profile from "./admin/pages/Profile";
import Page404 from "./admin/pages/Page404";
import Password from "./admin/pages/Password";
import DashboardLayout from "./admin/layouts/dashboard";
import Members from "./admin/pages/Members";
import Treasurer from "./admin/pages/Treasurer";



import Home from "./pages/Home/Home";
import UserLayout from "./components/UserLayout";
import About from "./pages/About/About";
import DGTeam from "./pages/About/dgTeam/DGTeam";
import District from "./pages/About/district/District";
import OrgChart from "./pages/About/orgChart/OrgChart";
import Activities from "./pages/Activities/Activities";
import MemberDir from "./pages/Membership/MemberDir/MemberDir";
import BusinessDir from "./pages/Membership/BusinessDir/BusinessDir";
import MemberData from "./pages/Membership/MemberData/MemberData";
import News from "./pages/Resources/News/News";
import GalleryR from "./pages/Resources/Gallery/Gallery";
import Priorities from "./pages/Resources/Priorities/Priorities";

export default function Router() {
  const isAdmin = useSelector((state) => state.auth.admin);
  const role = useSelector((state) => state.auth.authData?.title);
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    setRoutes([
      { path: "/login", element: <Login /> },
      { path: "/password", element: <Password /> },
      { path: "/profile", element: <Profile /> },
      {
        path: "/404",
        element: <Page404 />,
      },
      {
        path: "*",
        element: <Navigate to="/404" replace />,
      },
      {
        path: "/",
        element: <UserLayout />,
        children: [
          { path: "", element: <Home /> },
          { path: "/about/governor", element: <About /> },
          { path: "/about/dgteam", element: <DGTeam /> },
          { path: "/about/aboutdistrict317F", element: <District /> },
          { path: "/about/organizationchart", element: <OrgChart /> },
          { path: "/activities", element: <Activities /> },
          { path: "/membership/memberdirectory", element: <MemberDir /> },
          { path: "/membership/businessdirectory", element: <BusinessDir /> },
          { path: "/membership/downloadmemberdata", element: <MemberData /> },
          { path: "/resources/news", element: <News /> },
          { path: "/resources/gallery", element: <GalleryR /> },
          { path: "/resources/globalpriorities", element: <Priorities /> },
        ],
      },

      ...(isAdmin
        ? [
            {
              path: "/dashboard",
              element: <DashboardLayout />,
              children: [
                { path: "app", element: <DashboardAppPage /> },
                { path: "activity", element: <NewActivity /> },
                { path: "news", element: <NewsReporting /> },
                { path: "admin", element: <AdminReport /> },
                { path: "pastactivity", element: <PastActivity /> },
                {path:"members",element:<Members/>},
                {path:"manage-expense",element:<Treasurer/>}
              ],
            },
          ]
        : []),
    ]);
  }, [isAdmin, role]);

  return useRoutes(routes);

}
